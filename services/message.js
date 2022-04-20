'use strict'

class Message {
  constructor (id, flags, data) {
    this.id = id & 0x3fffffff
    this.flags = flags & 0x3
    this.data = typeof data === 'string' ? data.split(' ') : data
    this._FLAGS = {}
    this._FLAGS.RESPONSE = 0x01
    this._FLAGS.FROMSERVER = 0x02
  }

  encode () {
    const data = []
    let dataLength = 0
    for (let i = 0; i < this.data.length; i++) {
      const word = Buffer.from(this.data[i], 'utf8')
      const part = Buffer.alloc(word.length + 5)
      part.writeUInt32LE(word.length, 0)
      word.copy(part, 4)
      part.writeUInt8(0x00, part.length - 1)
      data.push(part)
      dataLength += part.length
    }
    const buf = Buffer.alloc(dataLength + 12)
    buf.writeUInt32LE(((this.flags << 30) & 0xC0000000) | (this.id & 0x3fffffff), 0) // Header
    buf.writeUInt32LE(buf.length, 4) // Overall packet size
    buf.writeUInt32LE(data.length, 8) // Data count
    Buffer.concat(data).copy(buf, 12) // Data
    return buf
  }

  isResponse () {
    return (this.flags & this._FLAGS.RESPONSE) === this._FLAGS.RESPONSE
  }

  isFromServer () {
    return (this.flags & this._FLAGS.FROMSERVER) === this._FLAGS.FROMSERVER
  }

  decode (buf) {
    const head = buf.readUInt32LE(0)
    const id = head & 0x3fffffff
    const flags = (head >> 30) & 0x3
    const dataLength = buf.readUInt32LE(8)
    const data = []
    let offset = 12
    for (let i = 0; i < dataLength; i++) {
      const len = buf.readUInt32LE(offset)
      offset += 4
      data.push(buf.slice(offset, offset + len).toString('utf8'))
      offset += len + 1
    }
    return new Message(id, flags, data)
  }
}

module.exports = Message
