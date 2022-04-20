'use strict'

const EventEmitter = require('events')
const net = require('net')
const crypto = require('crypto')
const Message = require('./Message')
const _message = new Message()

class RCon extends EventEmitter {
  constructor (server, id) {
    super()
    this.host = server.host
    this.port = server.port
    this.pass = server.password
    this.server_id = id
    this.serverVersion = null
    this.timeout_interval = null
    this.loggedIn = false
    this.sock = null
    this.id = 0x3fffffff
    this.buf = Buffer.concat([])
    this.cbs = {}
    this.info = []
    this.players = []
    this.lastUpdated = false
    this.config = server
  }

  connect (callback) {
    if (this.sock !== null) {
      return
    }
    this.sock = new net.Socket()
    this.sock.setTimeout(20000, function () {
      console.log('Timeout reached')
      this.sock.end()
      this.sock.destroy()
    }.bind(this))

    let cbCalled = false
    this.sock.on('error', function (err) {
      if (!this.loggedIn && callback && !cbCalled) {
        cbCalled = true
        callback(err)
      }
      this.emit('error', err)
    }.bind(this))

    this.sock.on('close', function () {
      this.emit('close')
      this.sock = null
      clearInterval(this.timeout_interval)
    }.bind(this))

    this.sock.connect(this.port, this.host, function () {
      this.emit('connect')
      this.sock.on('data', this.gather.bind(this))
      if (this.login) {
        this.login(callback)
      }

      clearInterval(this.timeout_interval)
      this.timeout_interval = setInterval(function () {
        this.serverInfo().then((info) => {
          this.info = info
          this.emit('server.updated', info)
        })

        this.listPlayers().then((players) => {
          this.players = players
          this.emit('players.updated', players)
        })
      }.bind(this), 10000)
    }.bind(this))
  }

  disconnect () {
    if (this.sock !== null) {
      this.sock.end()
    }
  }

  gather (chunk) {
    this.buf = Buffer.concat([this.buf, chunk])
    do {
      if (this.buf.length < 8) return
      const size = this.buf.readUInt32LE(4)
      if (this.buf.length < size) return
      const data = this.buf.slice(0, size)
      this.buf = this.buf.slice(size, this.buf.length)
      try {
        this.process(_message.decode(data))
      } catch (err) {
        this.emit('error', err)
      }
    } while (true)
  }

  process (msg) {
    if (msg.data.length === 0) {
      this.emit('error', 'Empty message received')
      return
    }
    if (msg.isFromServer()) {
      this.emit('event', msg)
    } else {
      this.emit('message', msg)
      if (Object.prototype.hasOwnProperty.call(this.cbs, 'cb' + msg.id)) {
        const callback = this.cbs['cb' + msg.id]
        delete this.cbs['cb' + msg.id]
        if (msg.data[0] === 'OK') {
          callback(null, msg.data.slice(1))
        } else {
          callback(new Error(msg.data.join(' ')))
        }
      }
    }
  }

  /**
   * Executes a command
   * @function BFRcon#exec
   * @param {String} command command to execute
   * @param {Function} callback callback
   */
  exec (command, callback) {
    const msg = new Message(this.id, 0, command)
    if (typeof callback === 'function') {
      this.cbs['cb' + this.id] = callback
    }
    try {
      this.emit('exec', msg) // May throw to abort
    } catch (aborted) {
      return
    }
    this.sock.write(msg.encode())
    this.id = (this.id + 1) & 0x3fffffff
  }

  tabulate (res, offset) {
    if (!offset) offset = 0
    const nColumns = parseInt(res[offset], 10)
    const columns = []
    let i
    for (i = offset + 1; i <= nColumns + offset; i++) {
      columns.push(res[i])
    }
    const nRows = parseInt(res[i], 10)
    const rows = []
    for (let n = 0; n < nRows; n++) {
      const row = {}
      for (let j = 0; j < columns.length; j++) {
        row[columns[j]] = res[++i]
      }
      rows.push(row)
    }
    rows.columns = columns
    return rows
  }

  login (callback) {
    this.exec(['login.hashed'], (err, res) => {
      hashError(this, err, callback)
      const md = crypto.createHash('md5')
      md.update(res[0], 'hex')
      md.update(this.pass, 'utf8')
      this.exec(['login.hashed', md.digest('hex').toUpperCase()], (err) => {
        hashError(this, err, callback)
        this.loggedIn = true
        this.emit('login')
        if (callback) return callback(null)
      })
    })

    this.on('login', function () {
      require('./commands/misc.js')(this)
      require('./commands/admin.js')(this)
      require('./commands/banning.js')(this)
      require('./commands/fairfight.js')(this)
      require('./commands/maplist.js')(this)
      require('./commands/player.js')(this)
      require('./commands/punkbuster.js')(this)
      require('./commands/reservedslots.js')(this)
      require('./commands/spectatorlist.js')(this)
      require('./commands/squad.js')(this)
      require('./commands/variables.js')(this)
      this.admin_eventsEnabled(true)
      this.admin_help().then(() => {
        this.emit('ready')
      })
    })
  }
}

function hashError (th, error, cb) {
  if (error) {
    th.sock.end()
    th.emit('error', error)
    if (cb) return cb(error)
    return false
  }
}

module.exports = RCon
