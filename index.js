'use strict'

const RCon = require('./services/rcon.js')
const Processor = require('./services/processor.js')

const Geo = require('./services/helpers/geo.js')
const Maps = require('./services/helpers/maps.js')
const Modes = require('./services/helpers/modes.js')
const Weapons = require('./services/helpers/weapons.js')

/**
 * BFRcon class
 * @class
 */
class BFRcon {
  constructor () {
    this.servers = null
  }

  /**
   * Connects to server(s)
   * @param {Array|Object} servers an array of servers or a single server to connect to
   * @returns {Object}
   */
  async connect (servers) {
    if (Array.isArray(servers)) {
      for (let i = 0, len = servers.length; i < len; i++) {
        this.servers[i] = new RCon(servers[i], i + 1)
        const processor = new Processor(this.servers[i])

        this.servers[i].on('connect', function () {
          console.log('# Connected to ' + this.host + ':' + this.port)
        }.bind(this.servers[i]))

        this.servers[i].on('ready', function () {
          this.serverInfo().then((info) => {
            this.info = info
          })

          this.version().then((version) => {
            this.serverVersion = version[1]
          })

          this.listPlayers().then((players) => {
            this.players = players
          })

          this.emit('updated')

          this.on('event', function (message) {
            processor.router(this, message)
          })

          this.on('server.updated', function (info) {
            this.info = info
          })

          this.on('players.updated', function (players) {
            this.players = players
          })
        }.bind(this.servers[i]))
        this.servers[i].connect()
      }
    } else if (typeof servers === 'object') {
      this.servers = new RCon(servers, 1)
      const processor = new Processor(this.servers)

      this.servers.on('connect', function () {
        console.log('# Connected to ' + this.host + ':' + this.port)
      }.bind(this.servers))

      this.servers.on('ready', function () {
        this.serverInfo().then((info) => {
          this.info = info
        })

        this.version().then((version) => {
          this.serverVersion = version[1]
        })

        this.listPlayers().then((players) => {
          this.players = players
        })

        this.emit('updated')

        this.on('event', function (message) {
          processor.router(this, message)
        })

        this.on('server.updated', function (info) {
          this.info = info
        })

        this.on('players.updated', function (players) {
          this.players = players
        })
      }.bind(this.servers))
      this.servers.connect()
    } else {
      throw new TypeError('Servers must either be an array of objects or a single object')
    }
    return this.servers
  }
}

exports.BFRcon = BFRcon

exports.Geo = Geo

exports.Maps = Maps

exports.Modes = Modes

exports.Weapons = Weapons
