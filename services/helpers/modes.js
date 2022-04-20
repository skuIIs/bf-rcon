/**
 * Mode Helper module
 * @module Mode
 */

/**
 * Converts rcon mode to full mode string
 * @param  {String} mode  rcon mode to convert
 * @returns {String|Null} returns full mode string or null if not found
 * @throws {TypeError} throws if mode is not a string
 */
module.exports = (mode) => {
  if (typeof mode !== 'string') throw new TypeError('parameter mode must be string')
  const modes = {
    ConquestLarge0: 'Conquest Large',
    ConquestSmall0: 'Conquest',
    Domination0: 'Domination',
    Elimination0: 'Defuse',
    Obliteration: 'Obliteration',
    RushLarge0: 'Rush',
    SquadDeathMatch0: 'Squad Deathmatch',
    TeamDeathMatch0: 'Team Deathmatch',
    AirSuperiority0: 'Air Superiority',
    CaptureTheflag0: 'Capture the Flag',
    CarrierAssaultSmall0: 'Carrier Assault',
    CarrierAssaultLarge0: 'Carrier Assault Large',
    SquadObliteration0: 'Squad Obliteration',
    GunMaster0: 'Gun Master',
    GunMaster1: 'Gun Master'
  }
  if (modes[mode] === undefined) return null
  return modes[mode]
}
