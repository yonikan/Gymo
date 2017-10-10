const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();
// const io = require("socket.io")(app);
// import { imageFilter, loadCollection } from './utils';
// const upload = multer({ dest: `${UPLOAD_PATH}/`, fileFilter: imageFilter }); // apply filter

const appRoutes = require('./api/app');
// const widgetRoutes = require('./api/widgets');
// const messageRoutes = require('./api/messages');

// mongoose.connect('localhost:27017/node-angular');


// =================================================
// var io = require("socket.io")(server);
// io.on("connection", handleClient);
// // emit a “notification” event on the server and listen for it on the client side ======
// io.on("connection", (socket) => {
//     let notification = {
//         type: "widget-msg",
//         text: "widget number ## was added to you dashboard."
//     };

//     // have it send every second
//     let interval = setInterval(() => {
//         socket.emit("notification", notification);
//     }, 2000);

//     socket.on("disconnect", () => {
//         clearInterval(interval);
//     });
// });


// If we wanted to send tweets from the browser and let the server consume them,
// we could do the following on the server ========
// io.on("connection", (socket) => {
//     socket.on("notification", (notification) => {
//         // we received a tweet from the browser

//         console.log(notification);
//     });
// });
// =================================================


app.set('views', path.join(__dirname, '../dist'));
app.set('view engine', 'html');

// app.use(favicon(path.join(__dirname, '../dist/assets', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../dist/assets')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    // res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Set our api routes
// app.use('/widgets', widgetRoutes);
// app.use('/message', messageRoutes);
// app.use('/profile', profileRoutes);
app.use('/', appRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});

module.exports = app;
