var udp = require('dgram');
var idd='s001';
var id;
var gyx,gyy,gyz,gas1,gas2,gas3,ultrasonic1,ultrasonic2,pintu1,pintu2,stater,mamet,warnxkr,warnxkn,warnyd,warnyb,warnb,myText ;
var of;
of=0;
var express = require('express');
var app = express();
var server=require('http').createServer(app);
var path=require('path')
var objtest = {};


var keypress = require('keypress');
keypress(process.stdin);
process.stdin.on('keypress', function(ch, key) {
    console.log('got "keypress"', key);
    if (key && key.ctrl && key.name == 'c') {
        process.exit();
    }
}); 
process.stdin.setRawMode(true);
process.stdin.resume();

objtest.apapun = "ini";

console.log(objtest.apapun);


//server=app.listen(3000);
// --------------------creating a udp server --------------------

// creating a udp server
var server1 = udp.createSocket('udp4');

// emits when any error occurs
server1.on('error',function(error){
  console.log('Error: ' + error);
  server1.close();
});

// emits on new datagram msg
server1.on('message',function(msg,info){
 // console.log('Data received from client : ' + msg.toString());
 //console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);
  id =msg[0];//msg.slice(0,1).toString()
 // console.log(id);
  if(id=='5'){
    ultrasonic1=msg.readUInt16LE(1)
    ultrasonic2=msg.readUInt16LE(3)
    stater=msg.readUInt8(5)
    console.log(stater);
    pintu1=msg.readUInt8(6)
    pintu2=msg.readUInt8(7)
   }

  if(id=='0'){
   gyx=msg.readFloatLE(13)
   //round(gyx,2)
   gyy=msg.readFloatLE(17)
   //console.log(gyy);
   gyz=msg.readFloatLE(21)

   if(gyx > 10)
   {
     warnxkn=1;
   }
   else{
     warnxkn=0;
   }
   if(gyx <-10)
   {
     warnxkr=1;
   }
   else{
     warnxkr=0;
   }
   if(gyy < -10)
   {
     warnyb=1;
   }
   else
   {
     warnyb=0;
   }
   if(gyy > 10)
   {
     warnyd=1;
   }
   else
   {
     warnyd=0;
   }

  }
  if(id=='2'){
   gas1=msg.readFloatLE(1)
   //console.log(gas1);
   gas2=msg.readFloatLE(5)
   gas3=msg.readFloatLE(9)

    


    if(gas1>1||gas2>1||gas3>1)
    {
      warnb=1;
    }
    else
    {
      warnb=0;
    }
    //console.log(warny)
   if(mamet){
    io.emit('ucok', {
      id1:id,
      Gyx:gyx,
      Gyy:gyy,
      Gyz:gyz,
      GAS1:gas1,
      GAS2:gas2,
      GAS3:gas3,
      ultra1:ultrasonic1,
      ultra2:ultrasonic2,
      Stater:stater,
      Pintu1:pintu1,
      Pintu2:pintu2,
      warningxkn:warnxkn,
      warningxkr:warnxkr,
      warningyd:warnyd,
      warningyb:warnyb,
      warningb:warnb

     });
      };
 

   /*console.log(id)//'ID :'+msg.slice (0,4).toString())
   console.log(gyx)//'x :'+msg.readFloatBE(4))
   console.log(gyy)//'y :'+msg.readFloatBE(8))
   console.log(gyz)
   console.log(gas1)
   console.log(gas2)
   console.log(gas3)
   console.log(ultrasonic1)
   console.log(ultrasonic2)
   console.log(stater)
   console.log(pintu1)
   console.log(pintu2)*/
  };

 
 

//sending msg
/*server.send(msg,info.port,'localhost',function(error){
  if(error){
    client.close();
  }else{
    console.log('Data sent !!!');
  }

});
*/
});

server=app.listen(3000)
const io=require("socket.io")(server);
io.on('connection',(socket)=>{
  socket.on('get_offset',function(data,cb){
    console.log(data);
    of=data;
    if(cb){
      cb(data);
      of=data;
    }
  });
   console.log('new user connected')
   mamet=io
   io.emit('ucok', {
    id1:id,
    Gyx:gyx,
    Gyy:gyy,
    Gyz:gyz,
    GAS1:gas1,
    GAS2:gas2,
    GAS3:gas3,
    ultra1:ultrasonic1,
    ultra2:ultrasonic2,
    Stater:stater,
    Pintu1:pintu1,
    Pintu2:pintu2,
    warningxkn:warnxkn,
    warningxkr:warnxkr,
    warningyd:warnyd,
    warningyb:warnyb,
    warningb:warnb
  
  })
  io.emit('ofset',{
    oof:myText,
    });
 
})

app.set('view engine','pug');
app.get('/ucok',(req,res)=>{
  ejot=res
  res.render('mamet',{
id1:id,
Gyx:gyx,
Gyy:gyy,
Gyz:gyz,
gs1:gas1,
gs2:gas2,
gs3:gas3,
ultra1:ultrasonic1,
ultra2:ultrasonic2,
Stater:stater,
Pintu1:pintu1,
Pintu2:pintu2,
warningxkn:warnxkn,
warningxkr:warnxkr,
warningyd:warnyd,
warningyb:warnyb,
warningb:warnb

});
})

app.get('/mamet',(req,res)=>{
  res.render('ucok')
});

app.get('/ofset',function(req,res){ 
 myText = req.query.mytext; //mytext is the name of your input box
  /*res.render('ucok',{
    Ofx:myText
  }),*/
  

}) ;
//emits when socket is ready and listening for datagram msgs
server1.on('listening',function(){
  var address = server.address();
  var port = address.port;
  var family = address.family;
  var ipaddr = address.address;
  //console.log('Server is listening at port' + port);
  //console.log('Server ip :' + ipaddr);
 // console.log('Server is IP4/IP6 : ' + family);
});

//emits after the socket is closed using socket.close();
server1.on('close',function(){
  console.log('Socket is closed !');
});

server1.bind(1234);


// -------------------- udp client ----------------

var buffer = require('buffer');

// creating a client socket
var client = udp.createSocket('udp4');

//buffer msg
var data = Buffer.from('abcdefghijklmn');

client.on('message',function(msg,info){
 // console.log('Data received from server : ' + msg.toString());
 // console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);
  
});
app.use(express.static(path.join(__dirname,'public')));
app.use("/md",express.static(path.join(__dirname,'node_modules')));