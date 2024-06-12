# AVR Protocol

The basis of a packet is presented like this:

```jsx
[total_length: ushort][uid: ushort][event: byte][data: total_length - 5 bytes]
```

The state allows the system to respond. If it is 0, this is a message without an initiator, a server event.

## Requests

### 0x00 Disconnect

If the client sends/resents a disconnect event, the client will enter the “Disconnected” state and will no longer be able to interact with the server. This event will not be acknowledged.

```jsx
-- Client
[reason?: string]
```

### 0x01 Handshake

<aside>
💡 Require ClientStatus ≥ Disconnected

</aside>

The handshake can be introduced just once to introduce yourself to the server and give it some basic information. This event is mandatory, allows the client to switch to “Handshaked” status and can interact with public events.

```jsx
-- Client
[protocol_version: ushort]
[engine: Engine]
[platform: Platfrom]
```

```jsx
-- Server
[procotol_version: ushort]
[client_id: ushort]
[client_status: ClientStatus]
[client_ip: 4 bytes]
[port: ushort]
```

### 0x02 Status

<aside>
💡 Require ClientStatus > Disconnected

</aside>

- Public (ClientStatus < Authentificated)
    
    If you send a status request anonymously, you will only have access to public status information.
    

```jsx
-- Client
[page?: byte = 0]
```

```jsx
-- Server
[flags: ServerFlags]
[master_server: string]
[instance_count: byte]
[instance_count * (
	[flags: InstanceFlags]
	[iid: ushort]
	[mid: uint]
	[player_count: ushort]
	[player_capacity: ushort]
)]
[page: byte]
[page_count: byte]
```

### 0x03 Latency

<aside>
💡 Require ClientStatus > Disconnected

</aside>

This is to calculate latency and check that the user is on time.

```jsx
-- Client
[client: TimestampMS]
```

```jsx
-- Server
[client: TimestampMS][server: TimestampMS]
```

### 0x04 Authentification

<aside>
💡 Require ClientStatus = Handshaked

</aside>

This request will change the user's status to Authentificating. If the request fails, the user returns to Handshaked status, and if the request fails, the user returns to Authentificated status.

If the user is Blacklisted, the reason and duration in minutes will be indicated. If the duration is 0, then it's definitive.

```jsx
-- Client
[flags: AuthFlags]
[uid: uint]
[server: string]
[access_token: string]
```

```jsx
-- Server
[result: AuthResult]
{result == Blacklisted ? (
	[reason: string]
	[expire_in: uint]
)}
{result == Success ? (
	[uid: uint]
	[display: string]
	[server: string]
)}
```

### 0x05 Enter - Instance

<aside>
💡 Require ClientStatus = Authentificated, PlayerStatus = None

</aside>

This request initializes the connection to an instance.
It changes the player status from None to Connecting, otherwise it leaves it at None.
To finalize the connection and go to Configuration status, it may be necessary to go through a “Password Requirement”, which takes the user to Password status.

```jsx
-- Client
[iid: ushort]
[flags: EnterFlags]
{flags has UsePseudonyme ? [display: string]}
{instance.flags has UsePassword ? [password: string]}
```

```jsx
-- Server
[iid: ushort]
[result: EnterResult]
{result == Blacklisted ? (
	[reason: string]
	[expire_in: uint]
)}
{result == Refused ? (
	[reason: string]
)}
{result in (Success, NeedPassword) ? (
	[flags: PlayerFlags]
	[pid: ushort]
	[display: string]
	[date_reference: DateTime]
	[max_tps: byte]
)}
```

### 0x06 Quit - Instance

<aside>
💡 Require PlayerStatus > None

</aside>

This request allows the client to quit an instance of the server. To learn more about this request, the server response can be found in event 0x06:Quit.

```jsx
-- Client
[iid: ushort]
[type: QuitType]
[reason?: string]
```

### 0x07 Custom data packets - Instance

<aside>
💡 RequirePlayerStatus ≥ Configuration

</aside>

This request is used to send data to a person channel in the instance.
When a request is sent, the recipient replies with the number of people who are supposed to receive the packet.

```jsx
-- Client
[iid: ushort]
[type: CustomDataPacketType.Request]
[state: ushort]
[selector: Selector]
[length: ushort - 6 - selector_length]
[data: length]
```

```jsx
-- Server
[iid: ushort]
[type: CustomDataPacketType.Sent]
[state: ushort]
[player_count: ushort]
```

### 0x09 Configuration - Instance

<aside>
💡 Require PlayerStatus = Configuration

</aside>

The configuration (pre-initialization) is a list of actions that the customer must prepare in order to initialize his connection.

```jsx
[iid: ushort][action: ConfigurationAction][data: . bytes]
```

- (1) Download & Load world
    
    Get world informations.
    If the version is the maximum value, the last version is retrieved.
    
    ```jsx
    -- Client
    [...][action: ConfigurationAction.WorldData]
    ```
    
    ```jsx
    -- Server
    [...][action: ConfigurationAction.WorldData]
    [mid: uint]
    [server: string]
    [version: ushort]
    ```
    
    Event to say that world has ready.
    
    ```jsx
    -- Client
    [...][action: ConfigurationAction.WorldLoaded]
    ```
    

If an error occurs during configuration, the client sends an error message. This will cause the client to exit the instance with 0x06:Quit event. 

At the end of configuration, the client indicates that it is ready and its PlayerStatus changes to Ready.

```jsx
-- Client
[...][action: ConfigurationAction.Ready || ConfigurationAction.Error]
{action == Error ? [reason: string]}
```

### 0x0c Transform - Instance

<aside>
💡 Require PlayerStatus = Ready

</aside>

This request moves a player, a networked object or an element of the current scene of the player performing the action.

```jsx
-- Client
[iid: ushort]
[type: TransformType]
{type == ByPath ? [path: string]}
{type == OnPlayer ? (
	[pid: ushort]
	[rig: PlayerRig]
)}
{type == OnObject ? [oid: ushort]}
[flags: TransformFlags]
{flags has TransformFlags.Position ? [position: Vector3]}
{flags has TransformFlags.Rotation ? [rotation: Quaternion]}
{flags has TransformFlags.Scale ? [scale: Vector3]}
{flags has TransformFlags.Velocity ? [velocity: Vector3]}
{flags has TransformFlags.AngularVelocity ? [angularVelocity: Vector3]}
```

### 0x0d Teleport - Instance

<aside>
💡 Require PlayerStatus = Ready

</aside>

This request allows you to change a player's scene, and requires you to be a moderator or the player in question. To perform an action on yourself, you must set the pid to the maximum value. To learn more about this request, the server response can be found in event 0x0d:Teleport.

```jsx
-- Client
[iid: ushort]
[action: TeleportType.Request]
[state: ushort]
[pid: ushort]
[scene_id: byte]
```

## Events

The specificity of events is that they have a UID of 0 except for a few exceptions (like 0x06:Quit which can have a UID > 0 like 0). They are used when it's a server message or a general response.

### 0x00 Disconnect

```jsx
[reason?: string]
```

### 0x06 Quit - Instance

<aside>
💡 Require PlayerStatus > None

</aside>

```jsx
-- Server
[iid: ushort]
[type: QuitType]
[reason?: string]
```

### 0x07 Custom data packets - Instance

<aside>
💡 Require PlayerStatus ≥ Configuration

</aside>

This event is linked to the 0x06:CDP request, when it receives this data it may or may not respond.

- Selected Player
    
    ```jsx
    -- Server
    [iid: ushort]
    [type: CustomDataPacketType.Receive]
    [state: ushort]
    [pid: ushort]
    [length: ushort]
    [data: length]
    ```
    
    ```jsx
    -- Client
    [iid: ushort]
    [type: CustomDataPacketType.Response]
    [state: ushort]
    [length: ushort]
    [data: length]
    ```
    
- Callback
    
    ```jsx
    -- Server
    [iid: ushort]
    [type: CustomDataPacketType.Callback]
    [state: ushort]
    [pid: ushort]
    [length: ushort]
    [data: length]
    ```
    

### 0x0a Join - Instance

<aside>
💡 Require PlayerStatus = Ready

</aside>

This event is launched when the client indicates that it is ready and for as long as it remains in the instance.

```jsx
[iid: ushort]
[flags: PlayerFlags]
[pid: ushort]
[mid: uint]
[server: string]
[display: string]
[date_reference: DateTime]
[engine: Engine]
[platform: Platform]
```

### 0x0b Leave - Instance

<aside>
💡 Require PlayerStatus = Ready

</aside>

This event is launched when the client indicates that it is ready and for as long as it remains in the instance.

```jsx
[iid: ushort]
[type: QuitType]
[pid: ushort]
```

### 0x0c Transform - Instance

### 0x0d Teleport - Instance

<aside>
💡 Require PlayerStatus = Ready

</aside>

This event changes the player's scene. This event is intended for the player, the people in the player's current scene, the people in the destination scene, and the moderator.

- Player Reception
    
    When the player receives this information, he has the option of refusing or accepting. If the request is accepted by the player, he will load the new scene and send the result back to the initiator. If the joeur is the initiator, he is not obliged to respond to her request, he can directly change the scene and send the positive result.
    
    ```jsx
    -- Server
    [iid: ushort]
    [action: TeleportType.ImTeleported]
    [state: ushort]
    [destination_id: byte]
    ```
    
    ```jsx
    -- Client
    [iid: ushort]
    [action: TeleportType.Accept || TeleportType.Refuse]
    [state: ushort]
    {action == Refuse ? [reason: string]}
    ```
    
- Initiator Response
    
    After the player has responded, the initiator will know the result of the request. If his request is accepted by the player, he will wait for a second response to the result of the player's teleportation. 
    
    ```jsx
    -- Server
    [iid: ushort]
    [action: TeleportType.Accept || TeleportType.Refuse]
    [state: ushort]
    {action == Refuse ? [reason: string]}
    ```
    
- Player Result
    
    After accepting the initiator's request, the player loads the new scene. If the scene load is a success, he sends the response to the initiator and any other players who may be concerned.
    
    ```jsx
    -- Client
    [iid: ushort]
    [action: TeleportType.Teleported || TeleportType.Errored]
    [state: ushort]
    {action == Refuse ? [reason: string]}
    ```
    
- Initiator Result
    
    This is the second response the initiator can receive.
    
    ```jsx
    -- Server
    [iid: ushort]
    [action: TeleportType.Teleported || TeleportType.Errored]
    [state: ushort]
    {action == Refuse ? [reason: string]}
    ```
    
- Concerned Player Result
    
    This event allows the players concerned to either make the player disappear or display him.
    
    ```jsx
    -- Server
    [iid: ushort]
    [action: TeleportType.Change]
    [pid: ushort]
    [initial_id: byte]
    [destination_id: byte]
    ```
    

## Constants

### ServerFlags (ByteFlag)

1. ServerIsReady
2. AuthVerification
3. AuthRequired

### EnterFlags (ByteFlag)

1. AsBot
2. UsePseudonyme
3. UsePassword

### AuthFlags (ByteFlag)

1. UseIntegrity

### InstanceFlags (UIntFlag)

<aside>
💡 If both VanishBlocked and GhostBlocked are present, the blocker is the only one to receive information from the player it has blocked.
Moderators will always see the people they've blocked.

</aside>

1. IsPublic (Repertoried on Status)
2. IsDefault
3. UsePassword
4. UseWhitelist
5. AuthorizeBot
6. UseMods
7. EnableCrossInventory
8. EnableCustomAvatar
9. AllowWorldModification
10. AllowFly
11. AllowProps    
12. VanishBlocked
13. GhostBlocked
14. GroupModeration
15. AllowOverload

### ClientStatus (ByteEnum)

1. Disconnected
2. Handshaked
3. Authentificating
4. Authentificated

### Engine (ByteEnum)

1. None
2. Unity
3. Unreal
4. Godot
5. Source

### Platfrom (ByteEnum)

1. Windows
2. Linux
3. MacOS
4. Android

### AuthResult (ByteEnum)

1. Success
2. InvalidToken
3. CannotContactMasterServer
4. Blacklisted
5. NotReady
6. Unknown

### EnterResult (ByteEnum)

1. Success
2. NotFound
3. Full
4. Blacklisted
5. NotWhitelisted
6. InvalidGame
7. IncorrectPassword
8. Unknown
9. Refused

### PlayerFlags  (UIntFlag)

1. IsBot
2. InstanceMaster
3. InstanceModerator
4. InstanceOwner
5. GuildModerator (if this instance is created with a GroupHost)
6. MasterModerator
7. WorldOwner
8. WorldModerator
9. AuthUnverified

### ConfigurationAction (UIntEnum)

1. Ready
2. Error
3. WorldData
4. WorldLoaded

### TransformType (ByteEnum)

1. ByPath
2. OnPlayer
3. OnObject

### TransformFlags (ByteFlag)

1. Position
2. Rotation
3. Scale
4. Velocity
5. AngularVelocity

### TeleportType (ByteEnum)

1. Request
2. ImTeleported
3. Accept
4. Refuse
5. Teleported
6. Errored
7. Change

### QuitType (ByteEnum)

1. Normal
2. Timeout
3. ModerationKick
4. VoteKick
5. ConfigurationError
6. UnknowError

### CustomDataPacketType (ByteEnum)

1. Request
2. Sent
3. Receive
4. Response
5. Callback

### PlayerStatus (ByteEnum)

1. None
2. Configuration
3. Ready