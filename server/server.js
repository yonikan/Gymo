const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const favicon = require('serve-favicon');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();
const api = require('./routes/api');
const widgetsApi = require('./routes/widgets');
const profileApi = require('./routes/profile');


app.use(favicon(path.join(__dirname, '../dist', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../dist')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, PUT, DELETE, OPTIONS');
  next();
});

app.use('/api', api);
app.use('/widgets', widgetsApi);
app.use('/profile', profileApi);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});


const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

var io = require('socket.io').listen(server); // Sockets.IO =================

server.listen(port, () => console.log(`API running on localhost:${port}`));


// Sockets.IO =================
io.sockets.on('connection', function(socket){
  console.log('Socket connected');
  // Socket event for gist created
  socket.on('gistSaved', function(gistSaved){
    io.emit('gistSaved', gistSaved);
  });

  // Socket event for gist updated
  socket.on('gistUpdated', function(gistUpdated){
    io.emit('gistUpdated', gistUpdated);
  });
});