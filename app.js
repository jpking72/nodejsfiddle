var express = require('express');
var app = express();
var path = require('path');
var server = require('http').Server(app);
var io = require('socket.io')(server);

var routes = require('./routes');
var users = require('./routes/user');

app.set('views', './views'); // specify the views directory
app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', routes.index);
app.get('/users', users.list);

app.listen(2001);

app.get("/", function (req, res) {
    res.render('index', { title : 'Hey'})
})

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world'});
    socket.on('other event', function (data) {
        console.log(data)
    })
})

