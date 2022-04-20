module.exports = function (RCon) {
  /**
   * Add player/IP/GUID to ban list for a certain amount of time
   * @param {String} idType  key to ban, can be 'name', 'guid', or 'ip'
   * @param {String} id  value to ban
   * @param {String} [timeout='perm']  option for how long to ban, can be 'perm', 'rounds x', or 'seconds x'
   * @param {String|Null} [reason=null]  optional reason for ban
   * @returns {Promise} returns the promise or error
   * @throws {TypeError} throws if idType graceful is not a string or id is not a string or timeout is not a string or reason is not a string and null
   */
  RCon.banList_add = (idType, id, timeout = 'perm', reason = null) => {
    if (typeof idType !== 'string') throw new TypeError('parameter idType must be string')
    if (typeof id !== 'string') throw new TypeError('parameter id must be string')
    if (typeof timeout !== 'string') throw new TypeError('parameter timeout must be string')
    if (typeof reason !== 'string' && reason !== null) throw new TypeError('parameter reason must be string or null')
    return new Promise((resolve, reject) => {
      RCon.exec(['banList.add', idType, id, timeout, reason], function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Clears ban list
   * @returns {Promise} returns the promise or error
   */
  RCon.banList_clear = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('banList.clear', function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Return part of the list of banned players/IPs/GUIDs
   * @param  {Number} [startIndex=0]  optional index to start from
   * @returns {Promise} returns the list or error
   * @throws {TypeError} throws if startIndex is not a number
   */
  RCon.banList_list = (startIndex = 0) => {
    if (typeof startIndex !== 'number') throw new TypeError('parameter startIndex must be number')
    return new Promise((resolve, reject) => {
      RCon.exec('banList.list', function (error, response) {
        if (error) return reject(error)
        resolve(response)
      })
    })
  }

  /**
   * Load list of banned players/IPs/GUIDs from file
   * @returns {Promise} returns the promise or error
   */
  RCon.banList_load = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('banList.load', function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Remove player/IP/GUID from ban list
   * @param  {String} idType  key to remove, can be 'name', 'guid', or 'ip'
   * @param  {String} id  value to remove
   * @return {Promise} returns the promise or error
   * @throws {TypeError} throws if idType is not a string or id is not a string
   */
  RCon.banList_remove = (idType, id) => {
    if (typeof idType !== 'string') throw new TypeError('parameter idType must be string')
    if (typeof id !== 'string') throw new TypeError('parameter id must be string')
    return new Promise((resolve, reject) => {
      RCon.exec(['banList.remove', idType, id], function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }

  /**
   * Save list of banned players/IPs/GUIDs to file
   * @returns {Promise} returns the promise or error
   */
  RCon.banList_save = () => {
    return new Promise((resolve, reject) => {
      RCon.exec('banList.save', function (error, response) {
        if (error) return reject(error)
        resolve()
      })
    })
  }
}
