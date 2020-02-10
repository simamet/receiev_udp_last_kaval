
var socket=io();
var idElm,gx,gy,gz,g1,g2,u1,u2,st,p1,p2,myText;


$(document).ready(()=>{
    idElm = $('#id-info'),
    gx=$('#gyx-inf'),
    gy=$('#gyy-inf'),
    gz=$('#gyz-inf'),
    u1=$('#ultra1-inf'),
    u2=$('#ultra2-inf'),
    g1=$('#gs1-inf'),
    g2=$('#gs2-inf'),
    g3=$('#gs3-inf'),
    st=$('#str-inf'),
    p1=$('#pn1-inf'),
    p2=$('#pn2-inf')

    $('form[name="get_offset"]').click((e)=>{
      e.preventDefault();
      myText=$('input[name="mytext"]').val();
      $('#ofx-inf').text(myText)
      socket.emit('get_offset',myText,(res)=>{
        console.log(res);
      })

    })
   // $(idElm).text("ini id nya");
  //  console.log($(u1).text());
});
socket.on('ofset',function(data){
console.log(data);

});
socket.on('ucok',function(data){
  //console.log(data)
    //g1=data.GAS1,
   // g1=$('#gs1-inf');/*
   $(idElm).text(data.id1);
   $(gx).text(data.Gyx.toFixed(1));
   $(gy).text(data.Gyy.toFixed(1));
   $(gz).text(data.Gyz.toFixed(1));
   $(g1).text(data.GAS1.toFixed(1));
   $(g2).text(data.GAS2.toFixed(1));
   $(g3).text(data.GAS3.toFixed(1));
   $(u1).text(data.ultra1);
   //$(u2).text(data.ultra2);
   $(st).text(data.Stater);
   $(p1).text(data.Pintu1);
   $(p2).text(data.Pintu2);
   $('#gfx-inf').text(data.Gyx.toFixed(1));
   //console.log(data)
});
console.log('a')
 button = document.getElementById('backUI');
button.addEventListener('click', function(e) {
 location.assign('http://localhost:3000/ucok');
  console.log('button was clicked');

});

function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
} 