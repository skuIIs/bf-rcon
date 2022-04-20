module.exports = function (RCon) {
  /**
   * Insert map at specified offset in map list
   * @param {String} map  map to add
   * @param {String} gameMode  game mode of the map
   * @param {Number} [rounds=1]  option for the number of rounds to play map
   * @param {Number} [offset=0]  option to place the map at a certain index
   * @returns {Promise} returns the promise or error
   * @throws {TypeError} throws if map is not a string or gameMode is not a string or rounds is not a number or offset is not a number
   */
  RCon.mapList_add = (map, gameMode, rounds = 1, offset = 0) => {
    if (typeof map !== 'string') throw new TypeError('parameter map must be string')
    if (typeof gameMode !== 'string') throw new TypeError('parameter gameMode must be string')
    if (typeof rounds !== 'number') throw new TypeError('parameter rounds must be number')
    if (typeof offset !== 'number') throw new TypeError('parameter offset must be number')
    return new Promise((resolve, reject) => {
      RCon.exec(['mapList.add', map, gameMode, rounds, offset], function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Return list of available maps or gamemodes
   * @param  {String} [filter='']  [description]
   * @returns {Promise} returns the response or error
   * @throws {TypeError} throws if filter is not a string
   */
  RCon.mapList_availableMaps = (filter = '') => {
    if (typeof filter !== 'string') throw new TypeError('parameter filter must be string')
    return new Promise((resolve, reject) => {
      RCon.exec(['mapList.availableMaps', filter], function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }

  /**
   * Clear map list
   * @returns {Promise} returns the promise or error
   */
  RCon.mapList_clear = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('mapList.clear', function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * End current round, declaring the specified team as winners
   * @param  {Number} [teamId=1]  team id to declare as winner
   * @returns {Promise} returns the promise or error
   * @throws {TypeError} throws if teamId is not a number
   */
  RCon.mapList_endRound = (teamId = 1) => {
    if (typeof teamId !== 'number') throw new TypeError('parameter teamId must be number')
    return new Promise((resolve, reject) => {
      RCon.exec(['mapList.endRound', teamId], function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Get indices for current & next map
   * @returns {Promise} returns the response or error
   */
  RCon.mapList_getMapIndices = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('mapList.getMapIndices', function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }

  /**
   * Get current round and number of rounds
   * @returns {Promise} returns the response or error
   */
  RCon.mapList_getRounds = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('mapList.getRounds', function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }

  /**
   * Returns part of the map list
   * @param  {Number} [startIndex=0]  option to get the list starting at an index
   * @returns {Promise} returns the response or error
   * @throws {TypeError} throws if startIndex is not a number
   */
  RCon.mapList_list = (startIndex = 0) => {
    if (typeof startIndex !== 'number') throw new TypeError('parameter startIndex must be number')
    return new Promise((resolve, reject) => {
      RCon.exec(['mapList.list', startIndex], function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }

  /**
   * Load list of maps from disk
   * @returns {Promise} returns the promise or error
   */
  RCon.mapList_load = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('mapList.load', function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Remove specified map from map list
   * @param {Number}  map index to remove
   * @returns {Promise} returns the promise or error
   * @throws {TypeError} throws if index is not a number
   */
  RCon.mapList_remove = (index) => {
    if (typeof index !== 'number') throw new TypeError('parameter index must be number')
    return new Promise((resolve, reject) => {
      RCon.exec(['mapList.remove', index], function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Restart current round
   * @returns {Promise} returns the promise or error
   */
  RCon.mapList_restartRound = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('mapList.restartRound', function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Abort current round and move on to next
   * @returns {Promise} returns the promise or error
   */
  RCon.mapList_runNextRound = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('mapList.runNextRound', function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Save list of maps to disk
   * @returns {Promise} returns the promise or error
   */
  RCon.mapList_save = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('mapList.save', function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Set which map to switch to at end of current round
   * @returns {Promise} returns the promise or error
   * @throws {TypeError} throws if index is not a number
   */
  RCon.mapList_setNextMapIndex = (index) => {
    if (typeof index !== 'number') throw new TypeError('parameter index must be number')
    return new Promise((resolve, reject) => {
      RCon.exec(['mapList.setNextMapIndex', index], function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }
}
