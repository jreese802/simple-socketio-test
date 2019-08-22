const argv = require('yargs').argv
const io = require('socket.io-client')

let host = argv.host || 'localhost'
let port = argv.port || 80
let upgrade = argv.upgrade || false
let transports = argv.transports.split(',') || ['websocket']


process.stdin.on('data', sendEcho)

function sendEcho(msg){
  socket.emit('echo', msg)
}

const socket = io('http://localhost',
    { host, port, upgrade, transports });

socket.on('ping', function (data) {
  console.log('recv: ping');
});
socket.on('echo', function (data) {
  console.log('recv: echo: ' + data);
});
