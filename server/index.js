/*
 * Require
 */
var express = require('express');
var Server = require('http').Server;
var socket = require('socket.io');

/*
 * Vars
 */
var app = express();
var server = Server(app);
var io = socket(server);

/*
 * Socket.io
 */
let id = 0;
io.on('connection', function(socket) {
  // test
  console.log('CONNECTED');
  //io.emit('chat message', { id: id, messageValue: 'Wesh meridj!' });

  socket.on('chat message', function(message) {
    message.id = ++id;
    io.emit('chat message', message);
  });
});

/*
 * Server
 */
server.listen(3000, function() {
  console.log('listening on *:3000');
});
