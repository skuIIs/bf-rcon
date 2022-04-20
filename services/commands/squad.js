module.exports = function (RCon) {
  /**
   * Get/Set the leader of a squad
   * @param  {Number} teamId  team ID to query
   * @param  {Number} squadId  squad ID to query
   * @param  {String|Null} [playerName=null]  optional player to setas squad lead
   * @returns {Promise|String} returns promise, a string of the squad leader, or error
   * @throws {TypeError} throws if teamId is not a number or squadId is not a number or playerName is not a string and null
   */
  RCon.squad_leader = (teamId, squadId, playerName = null) => {
    if (typeof teamId !== 'number') throw new TypeError('parameter teamId must be number')
    if (typeof squadId !== 'number') throw new TypeError('parameter squadId must be number')
    if (typeof playerName !== 'string' && playerName !== null) throw new TypeError('parameter playerName must be string or null')
    return new Promise((resolve, reject) => {
      if (playerName == null) {
        RCon.exec(['squad.leader', teamId, squadId], function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['squad.leader', teamId, squadId, playerName], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }

  /**
   * Get all squads that have players in them on a specific team
   * @param  {Number} teamId  team ID to query
   * @returns {Promise} returns response or error
   * @throws {TypeError} throws if teamId is not a number
   */
  RCon.squad_listActive = (teamId) => {
    if (typeof teamId !== 'number') throw new TypeError('parameter teamId must be number')
    return new Promise((resolve, reject) => {
      RCon.exec(['squad.listActive', teamId], function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }

  /**
   * Get player count and names of soldiers in a specific squad
   * @param  {Number} teamId  team ID to query
   * @param  {Number} squadId  squad ID to query
   * @return {Promise} returns response or error
   * @throws {TypeError} throws if teamId is not a number or squadId is not a number
   */
  RCon.squad_listPlayers = (teamId, squadId) => {
    if (typeof teamId !== 'number') throw new TypeError('parameter teamId must be number')
    if (typeof squadId !== 'number') throw new TypeError('parameter squadId must be number')
    return new Promise((resolve, reject) => {
      RCon.exec(['squad.listPlayers', teamId, squadId], function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }

  /**
   * Get/Set whether a squad is private or not
   * @param  {Number} teamId  team ID to query
   * @param  {Number} squadId  squad ID to query
   * @param  {Boolean} [isPrivate=null]  option to set private or not
   * @return {Promise} returns promise or error
   * @throws {TypeError} throws if teamId is not a number or squadId is not a number or isPrivate is not a boolean and null
   */
  RCon.squad_private = (teamId, squadId, isPrivate = null) => {
    if (typeof teamId !== 'number') throw new TypeError('parameter teamId must be number')
    if (typeof squadId !== 'number') throw new TypeError('parameter squadId must be number')
    if (typeof isPrivate !== 'boolean' && isPrivate !== null) throw new TypeError('parameter isPrivate must be boolean or null')
    return new Promise((resolve, reject) => {
      if (isPrivate == null) {
        RCon.exec(['squad.private', teamId, squadId], function (error, response) {
          if (error) return reject(error)
          resolve(response)
        })
      } else {
        RCon.exec(['squad.private', teamId, squadId, isPrivate], function (error, response) {
          if (error) return reject(error)
          resolve()
        })
      }
    })
  }
}
