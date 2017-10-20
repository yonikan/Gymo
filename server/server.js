const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const favicon = require('serve-favicon');
const logger = require('morgan');
const mongoose = require('mongoose');

// var flash    = require('connect-flash');
// var configDB = require('./config/database.config.js');
// mongoose.connect(configDB.url); // connect to our database
// var passport = require('passport');
// require('./config/passport.config')(passport); // pass passport for configuration

const app = express();

// const api = require('./routes/api');
// const widgetsApi = require('./routes/widgets');
// const profileApi = require('./routes/profile');

app.use(favicon(path.join(__dirname, '../dist', 'favicon.ico')));

// app.use(express.cookieParser()); // needed for auth
// app.use(express.bodyParser()); // get information from html forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../dist')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, PUT, DELETE, OPTIONS');
  next();
});


// required for passport
// app.use(express.session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session



// API ====================
// app.use('/api', api);
// app.use('/widgets', widgetsApi);
// app.use('/profile', profileApi);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});


const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
var io = require('socket.io').listen(server);
server.listen(port, () => console.log(`API running on localhost:${port}`));



io.sockets.on('connection', socket => {
  console.log('Socket connected');
  
  // // Socket event for gist created
  // socket.on('gistSaved', function(gistSaved){
  //   io.emit('gistSaved', gistSaved);
  // });

  // // Socket event for gist updated
  // socket.on('gistUpdated', function(gistUpdated){
  //   io.emit('gistUpdated', gistUpdated);
  // });
});