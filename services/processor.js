'use strict'

const geo = require('./helpers/geo.js')
const weapons = require('./helpers/weapons.js')

class Processor {
  constructor (server) {
    this.server = server
  }

  router (server, message) {
    if (message.data[0] === 'punkBuster.onMessage') {
      this.processPunkBuster(server, message.data[1])
    } else {
      this.processEvent(server, message)
    }
  }

  processEvent (server, message) {
    const map = {
      /**
       * Player authenticated event
       * @memberof BFRcon
       * @event "player.onAuthenticated"
       * @returns {Object} {event: String, name: String, refresh: Boolean}
       */
      'player.onAuthenticated': {
        event: 'player.onAuthenticated',
        name: String(message.data[1]),
        refresh: true
      },
      /**
       * Player join event
       * @memberof BFRcon
       * @event "player.onJoin"
       * @returns {Object} {event: String, name: String, guid: String, refresh: Boolean}
       */
      'player.onJoin': {
        event: 'player.onJoin',
        name: String(message.data[1]),
        guid: String(message.data[2]),
        refresh: false
      },
      /**
       * Player leave event
       * @memberof BFRcon
       * @event "player.onLeave"
       *@returns {Object} {event: String, name: String, info: String, refresh: Boolean}
       */
      'player.onLeave': {
        event: 'player.onLeave',
        name: String(message.data[1]),
        info: String(message.data[2]),
        refresh: true
      },
      /**
       * Player disconnect event
       * @memberof BFRcon
       * @event "player.onDisconnect"
       * @returns {Object} {event: String, name: String, refresh: Boolean}
       */
      'player.onDisconnect': {
        event: 'player.onDisconnect',
        name: String(message.data[1]),
        refresh: true
      },
      /**
       * Player spawn event
       * @memberof BFRcon
       * @event "player.onSpawn"
       * @returns {Object} {event: String, name: String, team: Number, refresh: Boolean}
       */
      'player.onSpawn': {
        event: 'player.onSpawn',
        name: String(message.data[1]),
        team: parseInt(message.data[2]),
        refresh: false
      },
      /**
       * Player kill event
       * @memberof BFRcon
       * @event "player.onKill"
       * @returns {Object} {event: String, name: String, victim: String, weapon: {weapon_key: String, type: String, kit: String, group: String}, headshot: Boolean, refresh: Boolean}
       */
      'player.onKill': {
        event: 'player.onKill',
        name: String(message.data[1]),
        victim: String(message.data[2]),
        weapon: weapons(message.data[3]),
        headshot: this.parseBool(String(message.data[4])),
        refresh: false
      },
      /**
       * Player chat event
       * @memberof BFRcon
       * @event "player.onChat"
       * @returns {Object} {event: String, name: String, text: String, subset: String, refresh: Boolean}
       */
      'player.onChat': {
        event: 'player.onChat',
        name: String(message.data[1]),
        text: String(message.data[2]),
        subset: String(message.data.slice(3)),
        refresh: false
      },
      /**
       * Player squad change event
       * @memberof BFRcon
       * @event "player.onSquadChange"
       * @returns {Object} {event: String, name: String, team: Number, squad: Number, refresh: Boolean}
       */
      'player.onSquadChange': {
        event: 'player.onSquadChange',
        name: String(message.data[1]),
        team: parseInt(message.data[2]),
        squad: parseInt(message.data[3]),
        refresh: false
      },
      /**
       * Player team change event
       * @memberof BFRcon
       * @event "player.onTeamChange"
       * @returns {Object} {event: String, name: String, team: Number, squad: Number, refresh: Boolean}
       */
      'player.onTeamChange': {
        event: 'player.onTeamChange',
        name: String(message.data[1]),
        team: parseInt(message.data[2]),
        squad: parseInt(message.data[3]),
        refresh: false
      },
      /**
       * Server max player count change event
       * @memberof BFRcon
       * @event "server.onMaxPlayerCountChange"
       * @returns {Object} {event: String, count: Number, refresh: Boolean}
       */
      'server.onMaxPlayerCountChange': {
        event: 'server.onMaxPlayerCountChange',
        count: parseInt(message.data[1]),
        refresh: false
      },
      /**
       * Server level loaded event
       * @memberof BFRcon
       * @event "server.onLevelLoaded"
       * @returns {Object} {event: String, level: String, mode: String, played: Number, total: Number, refresh: Boolean}
       */
      'server.onLevelLoaded': {
        event: 'server.onLevelLoaded',
        level: String(message.data[1]),
        mode: String(message.data[2]),
        played: parseInt(message.data[3]),
        total: parseInt(message.data[4]),
        refresh: true
      },
      /**
       * Server round over event
       * @memberof BFRcon
       * @event "server.onRoundOver"
       * @returns {Object} {event: String, winner: Number, refresh: Boolean}
       */
      'server.onRoundOver': {
        event: 'server.onRoundOver',
        winner: parseInt(message.data[1]),
        refresh: true
      },
      /**
       * Server round over players event
       * @memberof BFRcon
       * @event "server.onRoundOverPlayers"
       * @returns {Object} {event: String, players: Array, refresh: Boolean}
       */
      'server.onRoundOverPlayers': {
        event: 'server.onRoundOverPlayers',
        players: message.data[1],
        refresh: false
      },
      /**
       * Server round over team scores event
       * @memberof BFRcon
       * @event "server.onRoundOverTeamScores"
       * @returns {Object} {event: String, scores: Array, refresh: Boolean}
       */
      'server.onRoundOverTeamScores': {
        event: 'server.onRoundOverTeamScores',
        scores: message.data[1],
        refresh: false
      }
    }
    const payload = map[message.data[0]]
    this.emit(server, payload)
  }

  processPunkBuster (server, message) {
    const computedReg = /Player GUID Computed ([0-9a-f]{32})\(-\) \(slot #([0-9]+)\) (([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})):([0-9]{1,5}) ([a-zA-Z0-9_-]+)/
    const violationReg = /VIOLATION \(([a-zA-Z]+)\) #([0-9]+): ([a-zA-Z0-9_-]+) \(slot #([0-9]+)\) Violation \(([a-zA-Z]+)\) #([0-9]+) \[([0-9a-f]{32})\(-\) (([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})):([0-9]{1,5})\]/

    let matches = null
    let payload = null

    if (computedReg.test(message)) {
      matches = computedReg.exec(message)
      /**
       * Server punkbuster computed event
       * @memberof BFRcon
       * @event "punkbuster.onComputed"
       * @returns {Object} {event: String, message: String, name: String, guid: String, ip: String, country: String, refresh: Boolean}
       */
      payload = {
        event: 'punkbuster.onComputed',
        message: message,
        name: matches[9],
        guid: matches[1],
        ip: matches[3],
        country: geo(matches[3]),
        refresh: false
      }
      this.emit(server, payload)
    }

    if (violationReg.test(message)) {
      matches = violationReg.exec(message)
      /**
       * Server punkbuster violation event
       * @memberof BFRcon
       * @event "punkbuster.onViolation"
       * @returns {Object} {event: String, message: String, name: String, guid: String, ip: String, country: String, type: String, number: Number, refresh: Boolean}
       */
      payload = {
        event: 'punkbuster.onViolation',
        message: message,
        name: matches[3],
        guid: matches[7],
        ip: matches[8],
        country: geo(matches[8]),
        type: matches[1],
        number: matches[2],
        refresh: false
      }
      this.emit(server, payload)
    }
  }

  emit (server, payload) {
    server.emit(payload.event, payload)

    if (payload.refresh) {
      server.listPlayers().then((players) => {
        server.players = players
        server.emit('players.updated', players)
      })
    }
  }

  parseBool (string) {
    return (string === '1' || string === 'true')
  }
}

module.exports = Processor
