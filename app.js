var express = require('express');
var app = express();
var path = require('path');
var http = require('http');

var routes = require('./routes');
var users = require('./routes/user');

var server = app.listen(2001);
var io = require('socket.io').listen(server);

app.set('views', __dirname + '/views'); // specify the views directory
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);
app.get('/users', users.list);

app.get("/", function (req, res) {
    res.render('index', { title : 'Hey', message : 'Hello there!'} )
})

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world'});
    socket.on('other event', function (data) {
        console.log(data)
    })
})

