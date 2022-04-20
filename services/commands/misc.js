module.exports = function (RCon) {
  /**
  * Attempt to login to game server with password
  * @param  {String} password  rcon password
  * @returns {Promise} returns the promise or error
  * @throws {TypeError} throws if password is not a string
  */
  RCon.login_plainText = (password) => {
    if (typeof password !== 'string') throw new TypeError('parameter password must be string')
    return new Promise((resolve, reject) => {
      RCon.exec(['login.plainText', password], function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
  * Retrieves the salt, used in the hashed password login process or sends a hashed password to the server, in an attempt to login
  * @param  {String|Null} [passwordHard=null]  option to get the salt or to use the hashed password to login
  * @returns {Promise} returns the promise or error
  * @throws {TypeError} throws if passwordHard is not a string and null
  */
  RCon.login_hashed = (passwordHard = null) => {
    if (typeof passwordHard !== 'string' && passwordHard !== null) throw new TypeError('parameter passwordHard must be string or null')
    return new Promise((resolve, reject) => {
      if (passwordHard == null) {
        RCon.exec('login.hashed', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['login.hashed', passwordHard], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
  * @typedef InfoObject
  * @type {Object}
  * @property {Number} id
  * @property {String} serverName
  * @property {Number} current_playercount
  * @property {Number} effective_max_playercount
  * @property {String} current_gamemode
  * @property {String} current_map
  * @property {Number} roundsPlayed
  * @property {Number} roundsTotal
  * @property {String} scores - JSON string of team scores
  * @property {String} onlineState
  * @property {Boolean} ranked
  * @property {Boolean} punkBuster
  * @property {Boolean} hasGamePassword
  * @property {Number} serverUpTime
  * @property {Number} roundTime
  * @property {String} gameIpAndPort
  * @property {String} punkBusterVersion
  * @property {Boolean} joinQueueEnabled
  * @property {String} region
  * @property {String} closestPingSite
  * @property {String} country
  * @property {Number} blazePlayerCount
  * @property {String} blazeGameState
  */

  /**
   * Query for brief server info
   * @returns {Object<InfoObject>} returns the info object of the server or an error
   */
  RCon.serverInfo = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('serverInfo', function (error, response) {
        if (error) return reject(error)
        const numTeams = parseInt(response[7])
        const teamScores = []
        for (let i = 0; i < numTeams; i++) {
          teamScores[i] = parseFloat(response[7 + i + 1])
        }
        const info = {
          id: RCon.server_id,
          serverName: String(response[0]),
          current_playercount: parseInt(response[1]),
          effective_max_playercount: parseInt(response[2]),
          current_gamemode: String(response[3]),
          current_map: String(response[4]),
          roundsPlayed: parseInt(response[5]),
          roundsTotal: parseInt(response[6]),
          scores: JSON.stringify(teamScores),
          onlineState: String(response[9 + numTeams]),
          ranked: (String(response[10 + numTeams]) === 'true'),
          punkBuster: (String(response[11 + numTeams]) === 'true'),
          hasGamePassword: (String(response[12 + numTeams]) === 'true'),
          serverUpTime: parseInt(response[13 + numTeams]),
          roundTime: parseInt(response[14 + numTeams]),
          gameIpAndPort: String(response[15 + numTeams]),
          punkBusterVersion: String(response[16 + numTeams]),
          joinQueueEnabled: (String(response[17 + numTeams]) === 'true'),
          region: String(response[18 + numTeams]),
          closestPingSite: String(response[19 + numTeams]),
          country: String(response[20 + numTeams]),
          blazePlayerCount: parseInt(response[21 + numTeams]),
          blazeGameState: String(response[22 + numTeams])
        }
        resolve(info)
      })
    })
  }

  /**
   * Logout from game server
   * @returns {Promise} returns the promise or error
   */
  RCon.logout = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('logout', function (error) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Disconnect from server
   * @returns {Promise} returns the promise or error
   */
  RCon.quit = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('quit', function (error) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Reports game server type, and build ID
   * @returns {Promise} returns the response or error
   */
  RCon.version = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('version', function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }

  /**
   * Return current map running on game server
   * @returns {Promise} returns the response or error
   */
  RCon.currentLevel = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('currentLevel', function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }

  /**
   * Return list of a group of players on the server, without GUIDs
   * @param  {String} [subset='all']  optional subset to filter
   * @param  {String|Null} [players=null]  optional players to filter
   * @returns {Promise} returns an array of player objects or error
   * @throws {TypeError} throws if subset is not a string or players is not a string and null
   */
  RCon.listPlayers = (subset = 'all', players = null) => {
    if (typeof subset !== 'string') throw new TypeError('parameter subset must be string')
    if (typeof players !== 'string' && players !== null) throw new TypeError('parameter players must be string or null')
    return new Promise((resolve, reject) => {
      if (players == null) {
        RCon.exec(['admin.listPlayers', subset], function (error, response) {
          if (error) {
            RCon.exec(['listPlayers', subset], function (error2, response2) {
              if (error2) return reject(error2)
              resolve(RCon.tabulate(response2))
            })
          }
          resolve(RCon.tabulate(response))
        })
      } else {
        RCon.exec(['admin.listPlayers', subset, players], function (error, response) {
          if (error) {
            RCon.exec(['listPlayers', subset, players], function (error2, response2) {
              if (error2) return reject(error2)
              resolve(RCon.tabulate(response2))
            })
          }
          resolve(RCon.tabulate(response))
        })
      }
    })
  }

  /**
   * Query for game server FPS
   * @returns {Promise} returns the response or error
   */
  RCon.vars_serverTickTime = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('vars.serverTickTime', function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }
}
