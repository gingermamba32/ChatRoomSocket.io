var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});



// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('chat message', function(msg){
//     console.log('message: ' + msg);
//   });
// });
// io.emit('some event', { for: 'everyone' });
	
  io.on('connection', function(socket){
  	console.log('a user connected');
  	socket.on('chat message', function(msg){
    	io.emit('chat message', msg);
    	console.log('message: ' + msg);
  	});
  socket.on('disconnect', function(){
    console.log('user disconnected');
 	});
});


  


http.listen(3000, function(){
  console.log('listening on *:3000');
});


// The main idea behind Socket.IO is that you can send and receive any events you want, with any data you want. Any objects that can be encoded as JSON will do, and binary data is supported too.


// //Socket.IO is composed of two parts:

// A server that integrates with (or mounts on) the Node.JS HTTP Server: socket.io
// A client library that loads on the browser side: socket.io-client


