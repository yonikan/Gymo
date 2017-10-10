const express = require('express');


io.on('connection', (socket) => {
    
    socket.on('message',(message) => {
      console.log(message); 
    });

    socket.emit('message','Hello, my name is Server');
});