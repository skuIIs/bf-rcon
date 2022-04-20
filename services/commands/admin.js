module.exports = function (RCon) {
  /**
   * Set whether or not the server will send events to the current connection
   * @param  {Boolean} [enabled=true]  option to set events enabled or disabled
   * @returns {Promise} returns the response or error
   * @throws {TypeError} throws if enabled is not a boolean
   */
  RCon.admin_eventsEnabled = (enabled = true) => {
    if (typeof enabled !== 'boolean') throw new TypeError('parameter enabled must be boolean')
    return new Promise((resolve, reject) => {
      RCon.exec(['admin.eventsEnabled', enabled ? 'true' : 'false'], function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }

  /**
   * Report which commands the server knows about
   * @returns {Promise} returns the response or error
   */
  RCon.admin_help = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('admin.help', function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }

  /**
   * Kick player from server
   * @param  {String} playerName  player name to kick
   * @param  {String} reason  reason to kick player
   * @returns {Promise} returns the promise or error
   * @throws {TypeError} throws if playerName is not a string or reason is not a string
   */
  RCon.admin_kickPlayer = (playerName, reason) => {
    if (typeof playerName !== 'string') throw new TypeError('parameter playerName must be string')
    if (typeof reason !== 'string') throw new TypeError('parameter reason must be string')
    return new Promise((resolve, reject) => {
      RCon.exec(['admin.kickPlayer', playerName, reason], function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Kill a player without scoring effects admin.listPlayers
   * @param  {String} playerName  player name to kill
   * @returns {Promise} returns the promise or error
   * @throws {TypeError} throws if playerName is not a string
   */
  RCon.admin_killPlayer = (playerName) => {
    if (typeof playerName !== 'string') throw new TypeError('parameter playerName must be string')
    return new Promise((resolve, reject) => {
      RCon.exec(['admin.killPlayer', playerName], function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Return list of a group of players on the server
   * @param  {String} [subset='all']  option to list subset
   * @param  {String|Null} [players=null]  option to list players
   * @return {Array} returns a list of players or error
   * @throws {TypeError} throws if subset is not a string or players is not a string and not null
   */
  RCon.admin_listPlayers = (subset = 'all', players = null) => {
    if (typeof subset !== 'string') throw new TypeError('parameter subset must be string')
    if (typeof players !== 'string' && players !== null) throw new TypeError('parameter players must be string or null')
    return new Promise((resolve, reject) => {
      if (players == null) {
        RCon.exec(['admin.listPlayers', subset], function (error, response) {
          if (error) return reject(error)
          resolve(RCon.tabulate(response))
        })
      } else {
        RCon.exec(['admin.listPlayers', subset, players], function (error, response) {
          if (error) return reject(error)
          resolve(RCon.tabulate(response))
        })
      }
    })
  }

  /**
   * Move a player to another team and squad
   * @param  {String} playerName  player name to move
   * @param  {Number} teamId  team id to move to, must use same id if just moving squad
   * @param  {Number} [squadId=0]  squad id to move to
   * @param  {Boolean} [forceKill=false]  option to force kill player or wait for next death/spawn
   * @returns {Promise} returns the promise or error
   * @throws {TypeError} throws if playerName is not a string or teamId is not a number or squadId is not a number or forceKill is not a boolean
   */
  RCon.admin_movePlayer = (playerName, teamId, squadId = 0, forceKill = false) => {
    if (typeof playerName !== 'string') throw new TypeError('parameter playerName must be string')
    if (typeof teamId !== 'number') throw new TypeError('parameter teamId must be number')
    if (typeof squadId !== 'number') throw new TypeError('parameter squadId must be number')
    if (typeof forceKill !== 'boolean') throw new TypeError('parameter forceKill must be boolean')
    return new Promise((resolve, reject) => {
      RCon.exec(['admin.movePlayer', playerName, teamId, squadId, forceKill], function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Set the admin password for the server
   * @param  {String} password  password to change to
   * @returns {Promise} returns the promise or error
   * @throws {TypeError} throws if password is not a string
   */
  RCon.admin_password = (password) => {
    if (typeof password !== 'string') throw new TypeError('parameter password must be string')
    return new Promise((resolve, reject) => {
      RCon.exec(['admin.password', password], function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Send a chat message to a group of players
   * @param  {String} message  message to send
   * @param  {String} [subset='all']  optional subset
   * @param  {String|Null} [players=null]  optional players/player
   * @return {Promise} returns the promise or error
   * @throws {TypeError} throws if message is not a string or subset is not a string or players is not a string and null
   */
  RCon.admin_say = (message, subset = 'all', players = null) => {
    if (typeof message !== 'string') throw new TypeError('parameter message must be string')
    if (typeof subset !== 'string') throw new TypeError('parameter subset must be string')
    if (typeof players !== 'string' && players !== null) throw new TypeError('parameter players must be string or null')
    return new Promise((resolve, reject) => {
      if (players == null) {
        RCon.exec(['admin.say', message, subset], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      } else {
        RCon.exec(['admin.say', message, subset, players], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Shuts down the game server
   * @param  {Boolean} [gracefulShutdown=true]  option for graceful or forceful
   * @returns {Promise} returns the promise or error
   * @throws {TypeError} throws if graceful is not a boolean
   */
  RCon.admin_shutDown = (graceful = true) => {
    if (typeof graceful !== 'boolean') throw new TypeError('parameter graceful must be boolean')
    return new Promise((resolve, reject) => {
      RCon.exec(['admin.shutDown', graceful], function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Show a large on-screen message for a group of players
   * @param  {String} message  message to send
   * @param  {Number} [duration=10]  how long to yell, must be string
   * @param  {String} [subset='all']  optional subset
   * @param  {String|Null} [players=null]  optional players/player
   * @return {Promise} returns the promise or error
   * @throws {TypeError} throws if message is not a string or duration is not a number or subset is not a string or players is not a string and null
   */
  RCon.admin_yell = (message, duration = 10, subset = 'all', players = null) => {
    if (typeof message !== 'string') throw new TypeError('parameter message must be string')
    if (typeof duration !== 'number') throw new TypeError('parameter duration must be number')
    if (typeof subset !== 'string') throw new TypeError('parameter subset must be string')
    if (typeof players !== 'string' && players !== null) throw new TypeError('parameter players must be string or null')
    return new Promise((resolve, reject) => {
      if (players == null) {
        RCon.exec(['admin.yell', message, duration.toString(), subset], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      } else {
        RCon.exec(['admin.yell', message, duration.toString(), subset, players], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }
}
