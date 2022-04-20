module.exports = function (RCon) {
  /**
   * Attempt to activate PunkBuster if it is not currently running
   * @returns {Promise} returns promise or error
   */
  RCon.punkBuster_activate = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('punkBuster.activate', function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Returns whether or not PunkBuster currently is active
   * @returns {Promise} returns response or error
   */
  RCon.punkBuster_isActive = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('punkBuster.isActive', function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }

  /**
   * Send a raw PunkBuster command to the PunkBuster server
   * @param  {String} command  command to run
   * @returns {Promise} returns response or error
   * @throws {TypeError} throws if command is not a string
   */
  RCon.punkBuster_pb_sv_command = (command) => {
    if (typeof command !== 'string') throw new TypeError('parameter command must be string')
    return new Promise((resolve, reject) => {
      RCon.exec(['punkBuster.pb_sv_command', command], function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }
}
