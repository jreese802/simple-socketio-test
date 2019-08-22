## Simple SocketIO Tester

This is a dead-simple socket.io tester. Start up the server, then start up the client. If they can talk, then the client should get a ping every 3 seconds. You can also send something via stdin and should immediately get the same message back from the server (echo).

#### Usage (shown with all possible arguments set to default values):

server:
```node server.js --port 80```

client:
```node client.js --host localhost --port 80 --upgrade false --transports polling,websocket ```
