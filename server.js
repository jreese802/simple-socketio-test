const app = require('http').createServer()
const io = require('socket.io')(app)
const fs = require('fs')
const argv = require('yargs').argv

let port = argv.port || 80

app.listen(80);

io.on('connection', function (socket) {
  socket.emit('ping', {})
  setInterval( () => {socket.emit('ping', {})}, 3000)
  socket.on('echo', function (data) {
    console.log('recv: echo: ' + data)
    socket.emit('echo', data)
  });
});
