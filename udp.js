var udp = require('dgram');
var idd='s001';
var id;
var gyx,gyy,gyz,gas1,gas2,gas3,ultrasonic1,ultrasonic2,pintu1,pintu2,stater,stak,stpln,stgn,mamet,myText,dbc,que;
var calgyx,calgyy,calgyz=0;
//var warnxkr,warnxkn,warnyd,warnyb,warnb =0;
var ox,oy=0;
//of=0;
var express = require('express');
var app = express();
var server=require('http').createServer(app);
var path=require('path')
var objtest = {};

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/dbkapal";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  var dbo = db.db("dbkapal");
  /*
  dbo.createCollection("kapal", function(err, res){
    if (err) throw err;
    console.log("Collection created!");
    //db.close();
  });
  
  var myobj = {_id: 137, GYROX: 0, GYROY: 0, GYROZ: 100.023, alertx: 10, alerty: 10};
  dbo.collection("kapal").insertOne(myobj, function(err,res){
    if (err) throw err;
    console.log("1 document inserted");
    //db.close();
  });*/
  dbc=dbo;
  var query = { _id:137};
  que=query;
  var newvalues = {$set: {GYROX: 0.35 ,GYROY:1.023 , GYROZ:100.023} };
  
  dbo.collection("kapal").find(query).toArray(function(err, result) {
    if (err) throw err;
    calgyx=parseFloat(result[0].GYROX);
    calgyy=result[0].GYROY;
    console.log(calgyx)
  });  
  //db.close();
});




// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("kapaldb"); 
//   dbc=dbo;
//   var query = { _id:137};
//   que=query;
//   var newvalues = {$set: {GYROX: 0.35 ,GYROY:1.023 , GYROZ:100.023} };
 
//   dbo.collection("kapal").find(query).toArray(function(err, result) {
//     if (err) throw err;

//     calgyx=parseFloat(result[0].GYROX);
//     calgyy=result[0].GYROY;
//     console.log(calgyx)
  
//   });
// }); 

var keypress = require('keypress');
keypress(process.stdin);
process.stdin.on('keypress', function(ch, key) {
    console.log('got "keypress"', key);
    if (key && key.name =='return'){
      //location.assign('http://localhost:3000/mamet')
    }
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
   // console.log(stater);
    pintu1=msg.readUInt8(6)
    pintu2=msg.readUInt8(7)
    stak=msg.readUInt8(8)
    stpln=msg.readUInt8(9)
   // console.log(stpln);
    stgn=msg.readUInt8(10)

   }

   if(id=='0'){
   gyx=(msg.readFloatLE(13)+calgyx);
  // console.log(msg.readFloatLE(13)); //round(gyx,2)
   gyy=(msg.readFloatLE(17)+calgyy);
   //console.log(gyy);
   gyz=msg.readFloatLE(21)

    };

    if(id=='2'){
      gas1=msg.readFloatLE(1)
      //console.log(gas1);
     gas2=msg.readFloatLE(5)
      gas3=msg.readFloatLE(9)

    


   };
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
      warningak:stak,
      warningpln:stpln,
      warninggn:stgn,
      
    
     });
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
  socket.on('calx',function(data,cb){
    //console.log(data);
    of=data;
    if(cb){
      cb(data);
      ox=data;
      if(dbc)
      {

      var newvalues1 = {$set: {GYROX:parseFloat(ox)} };
      dbc.collection("kapal").updateOne(que, newvalues1,function(err,result){
        if (err) throw err;
      //  dbc.db.close();
      });
      
      calgyx=parseFloat(ox);
      

      console.log('cal x = '+ox)
     // console.log(ox);
    
  }

    
  
    
  

  }
  });

  socket.on('caly',function(data,cb){
    //console.log(data);
    of=data;
    if(cb){
      cb(data);
      oy=data;
      if(dbc)
      {

      var newvalues1 = {$set: {GYROY:parseFloat(oy)} };
      dbc.collection("kapal").updateOne(que, newvalues1)
        calgyy=parseFloat(oy);
      console.log('cal y = '+oy )
      //console.log(oy);
    }
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
    warningak:stak,
    warningpln:stpln,
    warninggn:stgn
  
  })
  io.emit('ofset',{
    oof:myText,
    });
 
})

app.set('view engine','pug');
app.get('/ucok',(req,res)=>{
  ejot=res
  res.render('mmetpug');
})

app.get('/mamet',(req,res)=>{
  res.render('seting')
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