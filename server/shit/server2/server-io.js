var app = require('http').createServer();
var io = require('socket.io')(app);
app.listen(80);
io.on('connection', function (socket) {
  socket.on('message',function(message){
    console.log(message); 
  });
  socket.emit('message','Hello, my name is Server');
});