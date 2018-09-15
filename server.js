// Dependencies
var express = require("express"),
    http = require('http'),
    bodyParser = require('body-parser'),
    path = require('path'),
    router = require('./routes'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    app = express(),
    morgan = require('morgan'),
    CONSTANT = require('./utilities').CONSTANTS,
    trycatch = require('trycatch'),
    server = http.createServer(app);

// MongoDB
mongoose.Promise = global.Promise;
var connection = mongoose.connect(CONSTANT.LOCAL_DB , { useMongoClient: true });
mongoose.connection.on('open', function () {
});

// Configuring Views
app.use(express.static(path.join(__dirname, 'public')));
var publicDir = path.join(__dirname, './public/');
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());
// use morgan to log requests to the console
app.use(morgan('dev'));

var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false
};
app.use(cors(corsOptions));

/*Error Handler*/
trycatch(function () {
    // do something error-prone
}, function (err) {
    console.log(err.stack);
});
app.get('*', function(req, res, next) {
    if (!req.url.includes('/api/v1/')) {
        res.sendFile(path.join(publicDir, 'index.html'));
    }
    next();
});

app.use(function(req, res, next){
    var d = res.status(404);
    if(d && !req.url.includes('/api/v1/')){
        res.sendFile(path.join(publicDir, 'index.html'));
    } else {
        next();
    }
});

app.use('/api/v' +
    '1/user', router);

// Configuring PORT
var port = process.env.PORT || CONSTANT.PORT;
server.listen(port, CONSTANT.IP, function () {
    console.log("Server is Listening on http://" + CONSTANT.IP + ':' + port);
});