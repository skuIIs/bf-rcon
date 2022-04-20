module.exports = function (RCon) {
  /**
   * Attempts to activate FairFight if it is not currently running
   * @returns {Promise} returns the promise or error
   */
  RCon.fairFight_activate = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('fairFight.activate', function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Attempts to deactivate FairFight if it is currently running
   * @returns {Promise} returns the promise or error
   */
  RCon.fairFight_deactivate = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('fairFight.deactivate', function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Returns whether or not FairFight currently is active
   * @returns {Promise} returns the response or error
   */
  RCon.fairFight_isActive = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('fairFight.isActive', function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }
}
