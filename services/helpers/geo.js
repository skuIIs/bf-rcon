const geoip = require('geoip-country')

/**
 * Geo Helper module
 * @module Geo
 */

/**
 * Get the country from an IP address
 * @param  {String} ip  IP address to lookup
 * @returns {String|Null} returns a string of the country if found or null
 * @throws {TypeError} throws if ip is not a string
 */
module.exports = (ip) => {
  if (typeof ip !== 'string') throw new TypeError('parameter ip must be string')
  const geo = geoip.lookup(ip)
  if (geo) return geo.country
  return null
}
