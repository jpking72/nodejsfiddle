$(document).ready(function () {

	var socket = io.connect('http://local.baseball.com:2001');
	socket.on('news', function (data) {
		console.log(data);
		socket.emit('other event', {my : 'data'});

	});
});

