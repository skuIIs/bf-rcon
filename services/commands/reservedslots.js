module.exports = function (RCon) {
  /**
   * Add to list of players who can use the reserved slots
   * @param {String} playerName  player to add
   * @returns {Promise} returns promise or error
   * @throws {TypeError} throws if playerName is not a string
   */
  RCon.reservedSlotsList_add = (playerName) => {
    if (typeof playerName !== 'string') throw new TypeError('parameter playerName must be string')
    return new Promise((resolve, reject) => {
      RCon.exec(['reservedSlotsList.add', playerName], function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Set if the server should kick to make room for VIP
   * @param {boolean} enabled  to enable or not
   * @returns {Promise} returns promise or error
   * @throws {TypeError} throws if enabled is not a boolean
   */
  RCon.reservedSlotsList_aggressiveJoin = (enabled) => {
    if (typeof enabled !== 'boolean') throw new TypeError('parameter enabled must be boolean')
    return new Promise((resolve, reject) => {
      RCon.exec(['reservedSlotsList.aggressiveJoin', enabled], function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Clear reserved slots list
   * @returns {Promise} returns promise or error
   */
  RCon.reservedSlotsList_clear = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('reservedSlotsList.clear', function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Retrieve list of players who can utilize the reserved slots
   * @returns {Promise} returns response or error
   */
  RCon.reservedSlotsList_list = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('reservedSlotsList.list', function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }

  /**
   * Load list of reserved soldier names from file
   * @returns {Promise} returns response or error
   */
  RCon.reservedSlotsList_load = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('reservedSlotsList.load', function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Remove from list of players who can use the reserved slots
   * @param  {String} playerName  player to remove
   * @returns {Promise} returns promise or error
   * @throws {TypeError} throws if playerName is not a string
   */
  RCon.reservedSlotsList_remove = (playerName) => {
    if (typeof playerName !== 'string') throw new TypeError('parameter playerName must be string')
    return new Promise((resolve, reject) => {
      RCon.exec(['reservedSlotsList.remove', playerName], function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Save list of reserved soldier names to file
   * @returns {Promise} returns promise or error
   */
  RCon.reservedSlotsList_save = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('reservedSlotsList.save', function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }
}
