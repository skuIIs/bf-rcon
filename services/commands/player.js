module.exports = function (RCon) {
  /**
   * Get idle duration for a soldier
   * @param  {String} playerName  player name to check
   * @returns {Promise} returns the response or error
   * @throws {TypeError} throws if playerName is not a string
   */
  RCon.player_idleDuration = (playerName) => {
    if (typeof playerName !== 'string') throw new TypeError('parameter playerName must be string')
    return new Promise((resolve, reject) => {
      RCon.exec(['player.idleDuration', playerName], function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }

  /**
   * Check if the soldier is alive
   * @param  {String} playerName  player name to check
   * @returns {Promise} returns the response or error
   * @throws {TypeError} throws if playerName is not a string
   */
  RCon.player_isAlive = (playerName) => {
    if (typeof playerName !== 'string') throw new TypeError('parameter playerName must be string')
    return new Promise((resolve, reject) => {
      RCon.exec(['player.isAlive', playerName], function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }

  /**
   * Get a soldiers ping to the server
   * @param  {String} playerName  player name to check
   * @returns {Promise} returns the response or error
   * @throws {TypeError} throws if playerName is not a string
   */
  RCon.player_ping = (playerName) => {
    if (typeof playerName !== 'string') throw new TypeError('parameter playerName must be string')
    return new Promise((resolve, reject) => {
      RCon.exec(['player.ping', playerName], function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }
}
