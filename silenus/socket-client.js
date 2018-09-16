var io = require('socket.io-client');
var socket = io.connect('http://localhost:8001', {reconnect: true});

// Add a connect listener
socket.on('connect', function (socket) {
    console.log('Connected!');
});
socket.emit('meme', 'me', 'test msg');
console.log("done")
