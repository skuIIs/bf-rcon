/**
 * Map Helper module
 * @module Map
 */

/**
 * Converts rcon map to full map string
 * @param  {String} map  rcon map to convert
 * @returns {String|Null} returns full map string or null if not found
 * @throws {TypeError} throws if map is not a string
 */
module.exports = (map) => {
  if (typeof map !== 'string') throw new TypeError('parameter map must be string')
  const maps = {
    MP_Abandoned: 'Zavod 311',
    MP_Damage: 'Lancang Dam',
    MP_Flooded: 'Flood Zone',
    MP_Journey: 'Golmud Railway',
    MP_Naval: 'Paracel Storm',
    MP_Prison: 'Operation Locker',
    MP_Resort: 'Hainan Resort',
    MP_Siege: 'Siege of Shanghai',
    MP_TheDish: 'Rogue Transmission',
    MP_Tremors: 'Dawnbreaker',
    XP0_Caspian: 'Caspian Border 2014',
    XP0_Firestorm: 'Operation Firestorm 2014',
    XP0_Metro: 'Operation Metro 2014',
    XP0_Oman: 'Gulf Of Oman 2014',
    XP1_001: 'Silk Road',
    XP1_002: 'Altai Range',
    XP1_003: 'Guilin Peaks',
    XP1_004: 'Dragon Pass',
    XP2_001: 'Lost Islands',
    XP2_002: 'Nansha Strike',
    XP2_003: 'Wave Breaker',
    XP2_004: 'Operation Mortar',
    XP3_MarketPl: 'Pearl Market',
    XP3_Prpganda: 'Propaganda',
    XP3_UrbanGdn: 'Lumphini Garden',
    XP3_WtrFront: 'Sunken Dragon',
    XP4_Arctic: 'Operation Whiteout',
    XP4_SubBase: 'Hammerhead',
    XP4_Titan: 'Hangar 21',
    XP4_WlkrFtry: 'Giants Of Karelia',
    XP5_Night_01: 'Zavod: Graveyard Shift',
    XP6_CMP: 'Operation Outbreak',
    XP7_Valley: 'Dragon Valley'
  }
  if (maps[map] === undefined) return null
  return maps[map]
}
