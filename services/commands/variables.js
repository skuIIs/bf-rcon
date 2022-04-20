module.exports = function (RCon) {
  /**
   * Get/Set vars.3dSpotting
   * @param  {Boolean|Null} [enabled=null]  option to enable or disable
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if enabled is not a boolean and null
   */
  RCon.vars_3dSpotting = (enabled = null) => {
    if (typeof enabled !== 'boolean' && enabled !== null) throw new TypeError('parameter enabled must be boolean or null')
    return new Promise((resolve, reject) => {
      if (enabled == null) {
        RCon.exec('vars.3dSpotting', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.3dSpotting', enabled], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.3pCam
   * @param  {Boolean|Null} [enabled=null]  option to enable or disable
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if enabled is not a boolean and null
   */
  RCon.vars_3pCam = (enabled = null) => {
    if (typeof enabled !== 'boolean' && enabled !== null) throw new TypeError('parameter enabled must be boolean or null')
    return new Promise((resolve, reject) => {
      if (enabled == null) {
        RCon.exec('vars.3pCam', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.3pCam', enabled], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get vars.alwaysAllowSpectators
   * @return {Promise} returns response or error
   */
  RCon.vars_alwaysAllowSpectators = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('vars.alwaysAllowSpectators', function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }

  /**
   * Get/Set vars.autoBalance
   * @param  {Boolean|Null} [enabled=null]  option to enable or disable
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if enabled is not a boolean and null
   */
  RCon.vars_autoBalance = (enabled = null) => {
    if (typeof enabled !== 'boolean' && enabled !== null) throw new TypeError('parameter enabled must be boolean or null')
    return new Promise((resolve, reject) => {
      if (enabled == null) {
        RCon.exec('vars.autoBalance', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.autoBalance', enabled], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.bulletDamage
   * @param  {Number|Null} [modifier=null]  option to set modifier
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if modifier is not a number and null
   */
  RCon.vars_bulletDamage = (modifier = null) => {
    if (typeof modifier !== 'number' && modifier !== null) throw new TypeError('parameter modifier must be number or null')
    return new Promise((resolve, reject) => {
      if (modifier == null) {
        RCon.exec('vars.bulletDamage', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.bulletDamage', modifier], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.commander
   * @param  {Boolean|Null} [enabled=null]  option to enable or disable
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if enabled is not a boolean and null
   */
  RCon.vars_commander = (enabled = null) => {
    if (typeof enabled !== 'boolean' && enabled !== null) throw new TypeError('parameter enabled must be boolean or null')
    return new Promise((resolve, reject) => {
      if (enabled == null) {
        RCon.exec('vars.commander', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.commander', enabled], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.crossHair
   * @param  {Boolean|Null} [enabled=null]  option to enable or disable
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if enabled is not a boolean and null
   */
  RCon.vars_crossHair = (enabled = null) => {
    if (typeof enabled !== 'boolean' && enabled !== null) throw new TypeError('parameter enabled must be boolean or null')
    return new Promise((resolve, reject) => {
      if (enabled == null) {
        RCon.exec('vars.crossHair', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.crossHair', enabled], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.forceReloadWholeMags
   * @param  {Boolean|Null} [enabled=null]  option to enable or disable
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if enabled is not a boolean and null
   */
  RCon.vars_forceReloadWholeMags = (enabled = null) => {
    if (typeof enabled !== 'boolean' && enabled !== null) throw new TypeError('parameter enabled must be boolean or null')
    return new Promise((resolve, reject) => {
      if (enabled == null) {
        RCon.exec('vars.forceReloadWholeMags', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.forceReloadWholeMags', enabled], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.friendlyFire
   * @param  {Boolean|Null} [enabled=null]  option to enable or disable
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if enabled is not a boolean and null
   */
  RCon.vars_friendlyFire = (enabled = null) => {
    if (typeof enabled !== 'boolean' && enabled !== null) throw new TypeError('parameter enabled must be boolean or null')
    return new Promise((resolve, reject) => {
      if (enabled == null) {
        RCon.exec('vars.friendlyFire', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.friendlyFire', enabled], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.gameModeCounter
   * @param  {Number|Null} [modifier=null]  option to set modifier
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if modifier is not a number and null
   */
  RCon.vars_gameModeCounter = (modifier = null) => {
    if (typeof modifier !== 'number' && modifier !== null) throw new TypeError('parameter modifier must be number or null')
    return new Promise((resolve, reject) => {
      if (modifier == null) {
        RCon.exec('vars.gameModeCounter', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.gameModeCounter', modifier], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.gamePassword
   * @param  {String|Null} [password=null]  option to set password
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if password is not a number and null
   */
  RCon.vars_gamePassword = (password = null) => {
    if (typeof password !== 'string' && password !== null) throw new TypeError('parameter password must be string or null')
    return new Promise((resolve, reject) => {
      if (password == null) {
        RCon.exec('vars.gamePassword', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.gamePassword', password], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.hitIndicatorsEnabled
   * @param  {Boolean|Null} [enabled=null]  option to enable or disable
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if enabled is not a boolean and null
   */
  RCon.vars_hitIndicatorsEnabled = (enabled = null) => {
    if (typeof enabled !== 'boolean' && enabled !== null) throw new TypeError('parameter enabled must be boolean or null')
    return new Promise((resolve, reject) => {
      if (enabled == null) {
        RCon.exec('vars.hitIndicatorsEnabled', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.hitIndicatorsEnabled', enabled], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.hud
   * @param  {Boolean|Null} [enabled=null]  option to enable or disable
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if enabled is not a boolean and null
   */
  RCon.vars_hud = (enabled = null) => {
    if (typeof enabled !== 'boolean' && enabled !== null) throw new TypeError('parameter enabled must be boolean or null')
    return new Promise((resolve, reject) => {
      if (enabled == null) {
        RCon.exec('vars.hud', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.hud', enabled], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.idleBanRounds
   * @param  {Number|Null} [numRounds=null]  option to set number of rounds for idle bans
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if numRounds is not a number and null
   */
  RCon.vars_idleBanRounds = (numRounds = null) => {
    if (typeof numRounds !== 'number' && numRounds !== null) throw new TypeError('parameter numRounds must be number or null')
    return new Promise((resolve, reject) => {
      if (numRounds == null) {
        RCon.exec('vars.idleBanRounds', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.idleBanRounds', numRounds], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.idleTimeout
   * @param  {Number|Null} [time=null]  option to set idle timeout
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if time is not a number and null
   */
  RCon.vars_idleTimeout = (time = null) => {
    if (typeof time !== 'number' && time !== null) throw new TypeError('parameter time must be number or null')
    return new Promise((resolve, reject) => {
      if (time == null) {
        RCon.exec('vars.idleTimeout', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.idleTimeout', time], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.killCam
   * @param  {Boolean|Null} [enabled=null]  option to enable or disable
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if enabled is not a boolean and null
   */
  RCon.vars_killCam = (enabled = null) => {
    if (typeof enabled !== 'boolean' && enabled !== null) throw new TypeError('parameter enabled must be boolean or null')
    return new Promise((resolve, reject) => {
      if (enabled == null) {
        RCon.exec('vars.killCam', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.killCam', enabled], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.maxPlayers
   * @param  {Number|Null} [numPlayers=null]  option to set max players
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if numPlayers is not a number and null
   */
  RCon.vars_maxPlayers = (numPlayers = null) => {
    if (typeof numPlayers !== 'number' && numPlayers !== null) throw new TypeError('parameter numPlayers must be number or null')
    return new Promise((resolve, reject) => {
      if (numPlayers == null) {
        RCon.exec('vars.maxPlayers', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.maxPlayers', numPlayers], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.maxSpectators
   * @param  {Number|Null} [numSpectators=null]  option to set number of spectator slots
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if numSpectators is not a number and null
   */
  RCon.vars_maxSpectators = (numSpectators = null) => {
    if (typeof numSpectators !== 'number' && numSpectators !== null) throw new TypeError('parameter numSpectators must be number or null')
    return new Promise((resolve, reject) => {
      if (numSpectators == null) {
        RCon.exec('vars.maxSpectators', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.maxSpectators', numSpectators], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.miniMap
   * @param  {Boolean|Null} [enabled=null]  option to enable or disable
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if enabled is not a boolean and null
   */
  RCon.vars_miniMap = (enabled = null) => {
    if (typeof enabled !== 'boolean' && enabled !== null) throw new TypeError('parameter enabled must be boolean or null')
    return new Promise((resolve, reject) => {
      if (enabled == null) {
        RCon.exec('vars.miniMap', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.miniMap', enabled], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.miniMapSpotting
   * @param  {Boolean|Null} [enabled=null]  option to enable or disable
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if enabled is not a boolean and null
   */
  RCon.vars_miniMapSpotting = (enabled = null) => {
    if (typeof enabled !== 'boolean' && enabled !== null) throw new TypeError('parameter enabled must be boolean or null')
    return new Promise((resolve, reject) => {
      if (enabled == null) {
        RCon.exec('vars.miniMapSpotting', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.miniMapSpotting', enabled], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get vars.mpExperience
   * @return {Promise} returns response or error
   */
  RCon.vars_mpExperience = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('vars.mpExperience', function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }

  /**
   * Get/Set vars.nameTag
   * @param  {Boolean|Null} [enabled=null]  option to enable or disable
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if enabled is not a boolean and null
   */
  RCon.vars_nameTag = (enabled = null) => {
    if (typeof enabled !== 'boolean' && enabled !== null) throw new TypeError('parameter enabled must be boolean or null')
    return new Promise((resolve, reject) => {
      if (enabled == null) {
        RCon.exec('vars.nameTag', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.nameTag', enabled], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.onlySquadLeaderSpawn
   * @param  {Boolean|Null} [enabled=null]  option to enable or disable
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if enabled is not a boolean and null
   */
  RCon.vars_onlySquadLeaderSpawn = (enabled = null) => {
    if (typeof enabled !== 'boolean' && enabled !== null) throw new TypeError('parameter enabled must be boolean or null')
    return new Promise((resolve, reject) => {
      if (enabled == null) {
        RCon.exec('vars.onlySquadLeaderSpawn', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.onlySquadLeaderSpawn', enabled], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.playerRespawnTime
   * @param  {Number|Null} [modifier=null]  option to set modifier
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if modifier is not a number and null
   */
  RCon.vars_playerRespawnTime = (modifier = null) => {
    if (typeof modifier !== 'number' && modifier !== null) throw new TypeError('parameter modifier must be number or null')
    return new Promise((resolve, reject) => {
      if (modifier == null) {
        RCon.exec('vars.playerRespawnTime', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.playerRespawnTime', modifier], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get vars.preset
   * @return {Promise} returns response or error
   */
  RCon.vars_preset = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('vars.preset', function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }

  /**
   * Get/Set vars.regenerateHealth
   * @param  {Boolean|Null} [enabled=null]  option to enable or disable
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if enabled is not a boolean and null
   */
  RCon.vars_regenerateHealth = (enabled = null) => {
    if (typeof enabled !== 'boolean' && enabled !== null) throw new TypeError('parameter enabled must be boolean or null')
    return new Promise((resolve, reject) => {
      if (enabled == null) {
        RCon.exec('vars.regenerateHealth', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.regenerateHealth', enabled], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.roundLockdownCountdown
   * @param  {Number|Null} [time=null]  option to set number of spectator slots
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if time is not a number and null
   */
  RCon.vars_roundLockdownCountdown = (time = null) => {
    if (typeof time !== 'number' && time !== null) throw new TypeError('parameter time must be number or null')
    return new Promise((resolve, reject) => {
      if (time == null) {
        RCon.exec('vars.roundLockdownCountdown', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.roundLockdownCountdown', time], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.roundLockdownCountdown
   * @param  {Number|Null} [countdown=null]  option to set number of spectator slots
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if countdown is not a number and null
   */
  RCon.vars_roundLockdownCountdown = (countdown = null) => {
    if (typeof countdown !== 'number' && countdown !== null) throw new TypeError('parameter countdown must be number or null')
    return new Promise((resolve, reject) => {
      if (countdown == null) {
        RCon.exec('vars.roundRestartPlayerCount', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.roundRestartPlayerCount', countdown], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.roundStartPlayerCount
   * @param  {Number|Null} [numPlayers=null]  option to set number players required to start round
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if numPlayers is not a number and null
   */
  RCon.vars_roundStartPlayerCount = (numPlayers = null) => {
    if (typeof numPlayers !== 'number' && numPlayers !== null) throw new TypeError('parameter numPlayers must be number or null')
    return new Promise((resolve, reject) => {
      if (numPlayers == null) {
        RCon.exec('vars.roundStartPlayerCount', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.roundStartPlayerCount', numPlayers], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.roundTimeLimit
   * @param  {Number|Null} [modifier=null]  option to set modifier
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if modifier is not a number and null
   */
  RCon.vars_roundTimeLimit = (modifier = null) => {
    if (typeof modifier !== 'number' && modifier !== null) throw new TypeError('parameter modifier must be number or null')
    return new Promise((resolve, reject) => {
      if (modifier == null) {
        RCon.exec('vars.roundTimeLimit', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.roundTimeLimit', modifier], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.roundWarmupTimeout
   * @param  {Number|Null} [time=null]  option to set time in pre-round
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if time is not a number and null
   */
  RCon.vars_roundWarmupTimeout = (time = null) => {
    if (typeof time !== 'number' && time !== null) throw new TypeError('parameter time must be number or null')
    return new Promise((resolve, reject) => {
      if (time == null) {
        RCon.exec('vars.roundWarmupTimeout', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.roundWarmupTimeout', time], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.serverDescription
   * @param  {String|Null} [description=null]  option to set server description
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if description is not a string and null
   */
  RCon.vars_serverDescription = (description = null) => {
    if (typeof description !== 'string' && description !== null) throw new TypeError('parameter description be string or null')
    return new Promise((resolve, reject) => {
      if (description == null) {
        RCon.exec('vars.serverDescription', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.serverDescription', description], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.serverMessage
   * @param  {String|Null} [message=null]  option to set server message
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if message is not a string and null
   */
  RCon.vars_serverMessage = (message = null) => {
    if (typeof message !== 'string' && message !== null) throw new TypeError('parameter message must be string or null')
    return new Promise((resolve, reject) => {
      if (message == null) {
        RCon.exec('vars.serverMessage', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.serverMessage', message], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.serverName
   * @param  {String|Null} [message=null]  option to set server name
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if name is not a string and null
   */
  RCon.vars_serverName = (name = null) => {
    if (typeof name !== 'string' && name !== null) throw new TypeError('parameter name must be string or null')
    return new Promise((resolve, reject) => {
      if (name == null) {
        RCon.exec('vars.serverName', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.serverName', name], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get vars.serverType
   * @return {Promise} returns response or error
   */
  RCon.vars_serverType = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('vars.serverType', function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }

  /**
   * Get/Set vars.soldierHealth
   * @param  {Number|Null} [modifier=null]  option to set modifier
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if modifier is not a number and null
   */
  RCon.vars_soldierHealth = (modifier = null) => {
    if (typeof modifier !== 'number' && modifier !== null) throw new TypeError('parameter modifier must be number or null')
    return new Promise((resolve, reject) => {
      if (modifier == null) {
        RCon.exec('vars.soldierHealth', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.soldierHealth', modifier], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.team1FactionOverride
   * @param  {Number|Null} [factionId=null]  option to set team 2 faction
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if factionId is not a string and null
   */
  RCon.vars_team1FactionOverride = (factionId = null) => {
    if (typeof factionId !== 'string' && factionId !== null) throw new TypeError('parameter factionId must be string or null')
    return new Promise((resolve, reject) => {
      if (factionId == null) {
        RCon.exec('vars.team1FactionOverride', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.team1FactionOverride', factionId], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.team2FactionOverride
   * @param  {Number|Null} [factionId=null]  option to set team 1 faction
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if factionId is not a string and null
   */
  RCon.vars_team2FactionOverride = (factionId = null) => {
    if (typeof factionId !== 'string' && factionId !== null) throw new TypeError('parameter factionId must be string or null')
    return new Promise((resolve, reject) => {
      if (factionId == null) {
        RCon.exec('vars.team2FactionOverride', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.team2FactionOverride', factionId], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.team3FactionOverride
   * @param  {Number|Null} [factionId=null]  option to set team 3 faction
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if factionId is not a string and null
   */
  RCon.vars_team3FactionOverride = (factionId = null) => {
    if (typeof factionId !== 'string' && factionId !== null) throw new TypeError('parameter factionId must be string or null')
    return new Promise((resolve, reject) => {
      if (factionId == null) {
        RCon.exec('vars.team3FactionOverride', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.team3FactionOverride', factionId], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.team4FactionOverride
   * @param  {Number|Null} [factionId=null]  option to set team 4 faction
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if factionId is not a string and null
   */
  RCon.vars_team4FactionOverride = (factionId = null) => {
    if (typeof factionId !== 'string' && factionId !== null) throw new TypeError('parameter factionId must be string or null')
    return new Promise((resolve, reject) => {
      if (factionId == null) {
        RCon.exec('vars.team4FactionOverride', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.team4FactionOverride', factionId], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.teamKillKickForBan
   * @param  {Number|Null} [count=null]  option to set count
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if count is not a string and null
   */
  RCon.vars_teamKillKickForBan = (count = null) => {
    if (typeof count !== 'number' && count !== null) throw new TypeError('parameter count must be number or null')
    return new Promise((resolve, reject) => {
      if (count == null) {
        RCon.exec('vars.teamKillKickForBan', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.teamKillKickForBan', count], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.teamKillValueDecreasePerSecond
   * @param  {Number|Null} [count=null]  option to set count
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if count is not a string and null
   */
  RCon.vars_teamKillValueDecreasePerSecond = (count = null) => {
    if (typeof count !== 'number' && count !== null) throw new TypeError('parameter count must be number or null')
    return new Promise((resolve, reject) => {
      if (count == null) {
        RCon.exec('vars.teamKillValueDecreasePerSecond', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.teamKillValueDecreasePerSecond', count], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.teamKillCountForKick
   * @param  {Number|Null} [count=null]  option to set count
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if count is not a string and null
   */
  RCon.vars_teamKillCountForKick = (count = null) => {
    if (typeof count !== 'number' && count !== null) throw new TypeError('parameter count must be number or null')
    return new Promise((resolve, reject) => {
      if (count == null) {
        RCon.exec('vars.teamKillCountForKick', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.teamKillCountForKick', count], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.teamKillValueForKick
   * @param  {Number|Null} [count=null]  option to set count
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if count is not a string and null
   */
  RCon.vars_teamKillValueForKick = (count = null) => {
    if (typeof count !== 'number' && count !== null) throw new TypeError('parameter count must be number or null')
    return new Promise((resolve, reject) => {
      if (count == null) {
        RCon.exec('vars.teamKillValueForKick', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.teamKillValueForKick', count], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.teamKillValueIncrease
   * @param  {Number|Null} [count=null]  option to set count
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if count is not a string and null
   */
  RCon.vars_teamKillValueIncrease = (count = null) => {
    if (typeof count !== 'number' && count !== null) throw new TypeError('parameter count must be number or null')
    return new Promise((resolve, reject) => {
      if (count == null) {
        RCon.exec('vars.teamKillValueIncrease', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.teamKillValueIncrease', count], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.ticketBleedRate
   * @param  {Number|Null} [modifier=null]  option to set modifier
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if modifier is not a number and null
   */
  RCon.vars_ticketBleedRate = (modifier = null) => {
    if (typeof modifier !== 'number' && modifier !== null) throw new TypeError('parameter modifier must be number or null')
    return new Promise((resolve, reject) => {
      if (modifier == null) {
        RCon.exec('vars.ticketBleedRate', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.ticketBleedRate', modifier], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.unlockMode
   * @param  {String|Null} [type=null]  option to set unlock mode
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if type is not a number and null
   */
  RCon.vars_unlockMode = (type = null) => {
    if (typeof type !== 'string' && type !== null) throw new TypeError('parameter type must be string or null')
    return new Promise((resolve, reject) => {
      if (type == null) {
        RCon.exec('vars.unlockMode', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.unlockMode', type], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.vehicleSpawnAllowed
   * @param  {Boolean|Null} [enabled=null]  option to enable or disable
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if enabled is not a boolean and null
   */
  RCon.vars_vehicleSpawnAllowed = (enabled = null) => {
    if (typeof enabled !== 'boolean' && enabled !== null) throw new TypeError('parameter enabled must be boolean or null')
    return new Promise((resolve, reject) => {
      if (enabled == null) {
        RCon.exec('vars.vehicleSpawnAllowed', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.vehicleSpawnAllowed', enabled], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.vehicleSpawnDelay
   * @param  {Number|Null} [modifier=null]  option to set modifier
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if modifier is not a number and null
   */
  RCon.vars_vehicleSpawnDelay = (modifier = null) => {
    if (typeof modifier !== 'number' && modifier !== null) throw new TypeError('parameter modifier must be number or null')
    return new Promise((resolve, reject) => {
      if (modifier == null) {
        RCon.exec('vars.vehicleSpawnDelay', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.vehicleSpawnDelay', modifier], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.roundPlayersReadyBypassTimer
   * @param  {Number|Null} [time=null]  option to set unlock mode
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if time is not a number and null
   */
  RCon.vars_roundPlayersReadyBypassTimer = (time = null) => {
    if (typeof time !== 'number' && time !== null) throw new TypeError('parameter time must be number or null')
    return new Promise((resolve, reject) => {
      if (time == null) {
        RCon.exec('vars.roundPlayersReadyBypassTimer', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.roundPlayersReadyBypassTimer', time], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.roundPlayersReadyMinCount
   * @param  {Number|Null} [count=null]  option to set count
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if count is not a string and null
   */
  RCon.vars_roundPlayersReadyMinCount = (count = null) => {
    if (typeof count !== 'number' && count !== null) throw new TypeError('parameter count must be number or null')
    return new Promise((resolve, reject) => {
      if (count == null) {
        RCon.exec('vars.roundPlayersReadyMinCount', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.roundPlayersReadyMinCount', count], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.roundPlayersReadyPercent
   * @param  {Number|Null} [modifier=null]  option to set modifier
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if modifier is not a number and null
   */
  RCon.vars_roundPlayersReadyPercent = (modifier = null) => {
    if (typeof modifier !== 'number' && modifier !== null) throw new TypeError('parameter modifier must be number or null')
    return new Promise((resolve, reject) => {
      if (modifier == null) {
        RCon.exec('vars.roundPlayersReadyPercent', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.roundPlayersReadyPercent', modifier], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.IsNoobOnlyJoin
   * @param  {Boolean|Null} [enabled=null]  option to enable or disable
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if enabled is not a boolean and null
   */
  RCon.vars_IsNoobOnlyJoin = (enabled = null) => {
    if (typeof enabled !== 'boolean' && enabled !== null) throw new TypeError('parameter enabled must be boolean or null')
    return new Promise((resolve, reject) => {
      if (enabled == null) {
        RCon.exec('vars.IsNoobOnlyJoin', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.IsNoobOnlyJoin', enabled], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get/Set vars.roundPlayersReadyBypassTimer
   * @param  {Number|Null} [index=null]  option to set gun master preset
   * @return {Promise} returns promise, response, or error
   * @throws {TypeError} throws if index is not a number and null
   */
  RCon.vars_gunMasterWeaponsPreset = (index = null) => {
    if (typeof index !== 'number' && index !== null) throw new TypeError('parameter index must be number or null')
    return new Promise((resolve, reject) => {
      if (index == null) {
        RCon.exec('vars.gunMasterWeaponsPreset', function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['vars.gunMasterWeaponsPreset', index], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get vars.serverTickTime
   * @return {Promise} returns response or error
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
