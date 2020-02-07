var express = require('express');
var app = express();
var server=require('http').createServer(app);
var path=require('path')



app.get('/', function(req, res){
   res.send("Hello world!");
});

server=app.listen(3000)
const io=require("socket.io")(server);
io.on('connection',(socket)=>{
   console.log('new user connected')
   socket.emit
})
app.set('view engine','pug');
app.get('/ucok',(req,res)=>{
   res.render('ucok')
})
app.use(express.static(path.join(__dirname,'public')));