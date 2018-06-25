/*
 * Require
 */
const express = require('express');
const Server = require('http').Server;
const socket = require('socket.io');

/*
 * consts
 */
const app = express();
const server = Server(app);
const io = socket(server);

/*
 * Socket.io
 */
let id = 0;

io.on('connection', socket => {
  console.log('USER CONNECTED');

  socket.on('chat message', message => {
    message.id = ++id;
    console.log('message : ', message);

    io.emit('chat message', message);
  });

  socket.on('disconnect', () => {
    console.log('USER DISCONNECTED');
  });

  socket.on('user is writting', user => {
    io.emit('user is writting', user);
  });
});

/*
 * Server
 */
server.listen(3000, () => {
  console.log('listening on *:3000');
});
