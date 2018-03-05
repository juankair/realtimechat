var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
  res.sendFile(__dirname+"/page/index.htm");
});

io.on('connection',function(socket){
  console.log('user connected');

  socket.on('disconnect',function(){
    console.log('user disconnect');
  });


  socket.on('chat message',function(msg){
    io.emit('chat message',msg);
    // socket.broadcast.emit('chat message',msg);
    // console.log(msg);
    console.log(msg);
  });
});


http.listen(8081,function(){
  console.log('Server running on *:8081');
});
