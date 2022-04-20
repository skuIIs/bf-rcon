# skuIIs/bf-rcon

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/skuIIs/bf-rcon?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/skuIIs/bf-rcon?style=flat-square)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/skuIIs/bf-rcon?style=flat-square)
![GitHub Sponsors](https://img.shields.io/github/sponsors/skuIIs?style=flat-square)
![GitHub](https://img.shields.io/github/license/skuIIs/bf-rcon?style=flat-square)

BF4 RCon in pure JavaScript

## Installation

You can use npm or yarn to install this package into your project

```bash
npm install bf4rcon
yarn add bf4rcon
```

## Usage

```js
const { BFrcon } = require('bf4rcon')

async function init () {
  const rcon = new BFrcon()

  // Connects to server(s), can be an object or an array of objects

  // *** Example for a single server ***
  const server = await rcon.connect({
    host: '127.0.0.1',
    port: 47200,
    password: 'password'
  })

  server.on('ready', async function () {
    console.log('Server: ' + this.server_id + ' added to listener!')

    // Run some command
    const players = await this.listPlayers()
    console.log(players)

    // Listen for some event
    this.on('player.onAuthenticated', function (player) {
      console.log(player)
    })
  }.bind(server))

  // *** Example for a multiple servers ***
  const servers = await rcon.connect([
    {
      host: '127.0.0.1',
      port: 47200,
      password: 'password'
    },
    {
      host: '127.0.0.1',
      port: 47201,
      password: 'password'
    },
  ])

  for (var i = 0, len = servers.length; i < len; i++) {
    servers[i].on('ready', async function () {
      console.log('Server: ' + this.server_id + ' added to listener!')

      // Run some command
      const players = await this.listPlayers()
      console.log(players)

      // Listen for some event
      this.on('player.onAuthenticated', function (player) {
        console.log(player)
      })
    }.bind(servers[i]))
  }
}

init()
```

## Commands

After connecting to a server(s) you can use the `exec` function to execute a command, or use the built-in API for commands made with promises. See `./services/commands/*` for available commands.

```js
...
  this.exec('serverInfo', function (error, response) {
    if (error) return reject(error)
    // Do something with response. Note here you must parse things yourself!
  })
...
```

Is the same as:

```js
...
  const info = await this.serverInfo()
  // Already parsed for you!
  console.log(info)
...
```

## Events

Listen for events from the server is simple. After connecting to the server(s) just use a standard `on` listener.

```js
  this.on('player.onChat', function (chat) {
    console.log(chat)
  })
```

## Caveats

- This has only been tested for BF4. This *could* work for BF3 or BFH.

- This package is meant for long-running processes and also doesn't handle reconnecting after disconnects or errors. You must handle those on your own. Example:

```js
  const config = {
    host: '127.0.0.1',
    port: 47200,
    password: 'password'
  }

  // Initial connection
  const server = await rcon.connect(config)

  server.on('ready', async function () {
    // Code
  }.bind(server))

  // Socket connection was ended
  server.on('end', function () {
    // Reconnect!
    server = await rcon.connect(config)
  })
```

- If you want to issue a command on a server and exit then it can be done, you just have to connect, issue the command after the connection is ready, and then manually disconnect. Example:

```js
  const server = await rcon.connect({
    host: '127.0.0.1',
    port: 47200,
    password: 'password'
  })

  server.on('ready', async function () {

    // Run some command
    const players = await this.listPlayers()
    console.log(players)

    // Disconnect
    this.disconnect()
  }.bind(server))
```

## Modules

<dl>
<dt><a href="#module_Geo">Geo</a></dt>
<dd><p>Geo Helper module</p>
</dd>
<dt><a href="#module_Map">Map</a></dt>
<dd><p>Map Helper module</p>
</dd>
<dt><a href="#module_Mode">Mode</a></dt>
<dd><p>Mode Helper module</p>
</dd>
<dt><a href="#module_Weapon">Weapon</a></dt>
<dd><p>Weapon Helper module</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#BFRcon">BFRcon</a></dt>
<dd><p>BFRcon class</p>
</dd>
</dl>

<a name="module_Geo"></a>

## Geo
Geo Helper module

<a name="exp_module_Geo--module.exports"></a>

### module.exports(ip) ⇒ <code>String</code> \| <code>Null</code> ⏏
Get the country from an IP address

**Kind**: Exported function  
**Returns**: <code>String</code> \| <code>Null</code> - returns a string of the country if found or null  
**Throws**:

- <code>TypeError</code> throws if ip is not a string


| Param | Type | Description |
| --- | --- | --- |
| ip | <code>String</code> | IP address to lookup |

<a name="module_Map"></a>

## Map
Map Helper module

<a name="exp_module_Map--module.exports"></a>

### module.exports(map) ⇒ <code>String</code> \| <code>Null</code> ⏏
Converts rcon map to full map string

**Kind**: Exported function  
**Returns**: <code>String</code> \| <code>Null</code> - returns full map string or null if not found  
**Throws**:

- <code>TypeError</code> throws if map is not a string


| Param | Type | Description |
| --- | --- | --- |
| map | <code>String</code> | rcon map to convert |

<a name="module_Mode"></a>

## Mode
Mode Helper module

<a name="exp_module_Mode--module.exports"></a>

### module.exports(mode) ⇒ <code>String</code> \| <code>Null</code> ⏏
Converts rcon mode to full mode string

**Kind**: Exported function  
**Returns**: <code>String</code> \| <code>Null</code> - returns full mode string or null if not found  
**Throws**:

- <code>TypeError</code> throws if mode is not a string


| Param | Type | Description |
| --- | --- | --- |
| mode | <code>String</code> | rcon mode to convert |

<a name="module_Weapon"></a>

## Weapon
Weapon Helper module


* [Weapon](#module_Weapon)
    * [module.exports(weapon)](#exp_module_Weapon--module.exports) ⇒ <code>Object.&lt;WeaponObject&gt;</code> \| <code>Null</code> ⏏
        * [~WeaponObject](#module_Weapon--module.exports..WeaponObject) : <code>Object</code>

<a name="exp_module_Weapon--module.exports"></a>

### module.exports(weapon) ⇒ <code>Object.&lt;WeaponObject&gt;</code> \| <code>Null</code> ⏏
Converts rcon weapon to full weapon object

**Kind**: Exported function  
**Returns**: <code>Object.&lt;WeaponObject&gt;</code> \| <code>Null</code> - returns full weapon object or null if not found  
**Throws**:

- <code>TypeError</code> throws if weapon is not a string


| Param | Type | Description |
| --- | --- | --- |
| weapon | <code>String</code> | rcon mode to convert |

<a name="module_Weapon--module.exports..WeaponObject"></a>

#### module.exports~WeaponObject : <code>Object</code>
**Kind**: inner typedef of [<code>module.exports</code>](#exp_module_Weapon--module.exports)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| weapon_key | <code>String</code> |  |
| type | <code>String</code> | [primary, secondary, auxiliary] |
| kit | <code>String</code> | [assault, engineer, support, recon, none] |
| group | <code>String</code> | [suicide, melee, impact, nonlethal, assaultrifle, carbine, smg, lmg, shotgun, dmr, sniperrifle, handgun, explosive, projectileexplosive, vehiclepersonal, vehicletransport, vehiclestationary, vehiclelight, vehicleheavy, vehicleair, vehiclewater, none] |

<a name="BFRcon"></a>

## BFRcon
BFRcon class

**Kind**: global class  

* [BFRcon](#BFRcon)
    * _instance_
        * [.connect(servers)](#BFRcon+connect) ⇒ <code>Object</code>
        * [.exec(command, callback)](#BFRcon+exec)
    * _static_
        * ["player.onAuthenticated"](#BFRcon.event_player.onAuthenticated) ⇒ <code>Object</code>
        * ["player.onJoin"](#BFRcon.event_player.onJoin) ⇒ <code>Object</code>
        * ["player.onLeave"](#BFRcon.event_player.onLeave) ⇒ <code>Object</code>
        * ["player.onDisconnect"](#BFRcon.event_player.onDisconnect) ⇒ <code>Object</code>
        * ["player.onSpawn"](#BFRcon.event_player.onSpawn) ⇒ <code>Object</code>
        * ["player.onKill"](#BFRcon.event_player.onKill) ⇒ <code>Object</code>
        * ["player.onChat"](#BFRcon.event_player.onChat) ⇒ <code>Object</code>
        * ["player.onSquadChange"](#BFRcon.event_player.onSquadChange) ⇒ <code>Object</code>
        * ["player.onTeamChange"](#BFRcon.event_player.onTeamChange) ⇒ <code>Object</code>
        * ["server.onMaxPlayerCountChange"](#BFRcon.event_server.onMaxPlayerCountChange) ⇒ <code>Object</code>
        * ["server.onLevelLoaded"](#BFRcon.event_server.onLevelLoaded) ⇒ <code>Object</code>
        * ["server.onRoundOver"](#BFRcon.event_server.onRoundOver) ⇒ <code>Object</code>
        * ["server.onRoundOverPlayers"](#BFRcon.event_server.onRoundOverPlayers) ⇒ <code>Object</code>
        * ["server.onRoundOverTeamScores"](#BFRcon.event_server.onRoundOverTeamScores) ⇒ <code>Object</code>
        * ["punkbuster.onComputed"](#BFRcon.event_punkbuster.onComputed) ⇒ <code>Object</code>
        * ["punkbuster.onViolation"](#BFRcon.event_punkbuster.onViolation) ⇒ <code>Object</code>

<a name="BFRcon+connect"></a>

### bfRcon.connect(servers) ⇒ <code>Object</code>
Connects to server(s)

**Kind**: instance method of [<code>BFRcon</code>](#BFRcon)  

| Param | Type | Description |
| --- | --- | --- |
| servers | <code>Array</code> \| <code>Object</code> | an array of servers or a single server to connect to |

<a name="BFRcon+exec"></a>

### bfRcon.exec(command, callback)
Executes a command

**Kind**: instance method of [<code>BFRcon</code>](#BFRcon)  

| Param | Type | Description |
| --- | --- | --- |
| command | <code>String</code> | command to execute |
| callback | <code>function</code> | callback |

<a name="BFRcon.event_player.onAuthenticated"></a>

### "player.onAuthenticated" ⇒ <code>Object</code>
Player authenticated event

**Kind**: event emitted by [<code>BFRcon</code>](#BFRcon)  
**Returns**: <code>Object</code> - {event: String, name: String, refresh: Boolean}  
<a name="BFRcon.event_player.onJoin"></a>

### "player.onJoin" ⇒ <code>Object</code>
Player join event

**Kind**: event emitted by [<code>BFRcon</code>](#BFRcon)  
**Returns**: <code>Object</code> - {event: String, name: String, guid: String, refresh: Boolean}  
<a name="BFRcon.event_player.onLeave"></a>

### "player.onLeave" ⇒ <code>Object</code>
Player leave event

**Kind**: event emitted by [<code>BFRcon</code>](#BFRcon)  
**Returns**: <code>Object</code> - {event: String, name: String, info: String, refresh: Boolean}  
<a name="BFRcon.event_player.onDisconnect"></a>

### "player.onDisconnect" ⇒ <code>Object</code>
Player disconnect event

**Kind**: event emitted by [<code>BFRcon</code>](#BFRcon)  
**Returns**: <code>Object</code> - {event: String, name: String, refresh: Boolean}  
<a name="BFRcon.event_player.onSpawn"></a>

### "player.onSpawn" ⇒ <code>Object</code>
Player spawn event

**Kind**: event emitted by [<code>BFRcon</code>](#BFRcon)  
**Returns**: <code>Object</code> - {event: String, name: String, team: Number, refresh: Boolean}  
<a name="BFRcon.event_player.onKill"></a>

### "player.onKill" ⇒ <code>Object</code>
Player kill event

**Kind**: event emitted by [<code>BFRcon</code>](#BFRcon)  
**Returns**: <code>Object</code> - {event: String, name: String, victim: String, weapon: {weapon_key: String, type: String, kit: String, group: String}, headshot: Boolean, refresh: Boolean}  
<a name="BFRcon.event_player.onChat"></a>

### "player.onChat" ⇒ <code>Object</code>
Player chat event

**Kind**: event emitted by [<code>BFRcon</code>](#BFRcon)  
**Returns**: <code>Object</code> - {event: String, name: String, text: String, subset: String, refresh: Boolean}  
<a name="BFRcon.event_player.onSquadChange"></a>

### "player.onSquadChange" ⇒ <code>Object</code>
Player squad change event

**Kind**: event emitted by [<code>BFRcon</code>](#BFRcon)  
**Returns**: <code>Object</code> - {event: String, name: String, team: Number, squad: Number, refresh: Boolean}  
<a name="BFRcon.event_player.onTeamChange"></a>

### "player.onTeamChange" ⇒ <code>Object</code>
Player team change event

**Kind**: event emitted by [<code>BFRcon</code>](#BFRcon)  
**Returns**: <code>Object</code> - {event: String, name: String, team: Number, squad: Number, refresh: Boolean}  
<a name="BFRcon.event_server.onMaxPlayerCountChange"></a>

### "server.onMaxPlayerCountChange" ⇒ <code>Object</code>
Server max player count change event

**Kind**: event emitted by [<code>BFRcon</code>](#BFRcon)  
**Returns**: <code>Object</code> - {event: String, count: Number, refresh: Boolean}  
<a name="BFRcon.event_server.onLevelLoaded"></a>

### "server.onLevelLoaded" ⇒ <code>Object</code>
Server level loaded event

**Kind**: event emitted by [<code>BFRcon</code>](#BFRcon)  
**Returns**: <code>Object</code> - {event: String, level: String, mode: String, played: Number, total: Number, refresh: Boolean}  
<a name="BFRcon.event_server.onRoundOver"></a>

### "server.onRoundOver" ⇒ <code>Object</code>
Server round over event

**Kind**: event emitted by [<code>BFRcon</code>](#BFRcon)  
**Returns**: <code>Object</code> - {event: String, winner: Number, refresh: Boolean}  
<a name="BFRcon.event_server.onRoundOverPlayers"></a>

### "server.onRoundOverPlayers" ⇒ <code>Object</code>
Server round over players event

**Kind**: event emitted by [<code>BFRcon</code>](#BFRcon)  
**Returns**: <code>Object</code> - {event: String, players: Array, refresh: Boolean}  
<a name="BFRcon.event_server.onRoundOverTeamScores"></a>

### "server.onRoundOverTeamScores" ⇒ <code>Object</code>
Server round over team scores event

**Kind**: event emitted by [<code>BFRcon</code>](#BFRcon)  
**Returns**: <code>Object</code> - {event: String, scores: Array, refresh: Boolean}  
<a name="BFRcon.event_punkbuster.onComputed"></a>

### "punkbuster.onComputed" ⇒ <code>Object</code>
Server punkbuster computed event

**Kind**: event emitted by [<code>BFRcon</code>](#BFRcon)  
**Returns**: <code>Object</code> - {event: String, message: String, name: String, guid: String, ip: String, country: String, refresh: Boolean}  
<a name="BFRcon.event_punkbuster.onViolation"></a>

### "punkbuster.onViolation" ⇒ <code>Object</code>
Server punkbuster violation event

**Kind**: event emitted by [<code>BFRcon</code>](#BFRcon)  
**Returns**: <code>Object</code> - {event: String, message: String, name: String, guid: String, ip: String, country: String, type: String, number: Number, refresh: Boolean}  

## Contributing
Pull requests are welcome for bug fixes or feature requests.

## Sponsors
Support this project and possibly other open-source projects by becoming a sponsor. Higher tier sponsor will appear here with a logo and link to your website. [Become a sponsor](https://github.com/sponsors/skuIIs)

## License
[MIT](https://github.com/skuIIs/bf-rcon/blob/main/LICENSE)