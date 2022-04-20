module.exports = function (RCon) {
  /**
   * Add player to the spectator list
   * @param {String} playerName  player to add
   * @returns {Promise} returns promise or error
   * @throws {TypeError} throws if playerName is not a string
   */
  RCon.spectatorList_add = (playerName) => {
    if (typeof playerName !== 'string') throw new TypeError('parameter playerName must be string')
    return new Promise((resolve, reject) => {
      RCon.exec(['spectatorList.add', playerName], function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Clears spectator list
   * @returns {Promise} returns promise or error
   */
  RCon.spectatorList_clear = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('spectatorList.clear', function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Return part of the list of spectators
   * @param  {Number} [startIndex=0]  option to get the list starting at an index
   * @returns {Promise} returns the response or error
   * @throws {TypeError} throws if startIndex is not a number
   */
  RCon.spectatorList_list = (startIndex = 0) => {
    if (typeof startIndex !== 'number') throw new TypeError('parameter startIndex must be number')
    return new Promise((resolve, reject) => {
      RCon.exec(['spectatorList.list', startIndex], function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }

  /**
   * Remove player from spectator list
   * @param  {String} playerName  player to remove
   * @returns {Promise} returns promise or error
   * @throws {TypeError} throws if playerName is not a string
   */
  RCon.spectatorList_remove = (playerName) => {
    if (typeof playerName !== 'string') throw new TypeError('parameter playerName must be string')
    return new Promise((resolve, reject) => {
      RCon.exec(['spectatorList.remove', playerName], function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Save list of spectators to file
   * @returns {Promise} returns the promise or error
   */
  RCon.spectatorList_save = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('spectatorList.save', function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }
}
