var app = require('http').createServer()
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(80);

io.on('connection', function (socket) {
  socket.emit('ping', {})
  setInterval( () => {socket.emit('ping', {})}, 5000)
  socket.on('echo', function (data) {
    console.log('recv: echo: ' + data);
    socket.emit('echo', data)
  });
});
