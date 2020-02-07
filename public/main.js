// anime({
//   targets: 'div.box.red',
//   translateY: [
//     { value: 200, duration: 500 },
//     { value: 0, duration: 800 }
//   ],
//   rotate:{
//     value: '1turn',
//     easing: 'easeInOutSine'
//   }
// });

// anime({
//   targets: 'div.box.blue',
//   translateY: [
//     { value: 200, duration: 500, delay: 1000},
//     { value: 0, duration: 800 }
//   ],
//   rotate:{
//     value: '1turn',
//     easing: 'easeInOutSine',
//     delay: 1000
//   }
// });

// anime({
//   targets: 'div.box.green',
//   translateY: [
//     { value: 200, duration: 500, delay: 2000},
//     { value: 0, duration: 800 }
//   ],
//   rotate:{
//     value: '1turn',
//     easing: 'easeInOutSine',
//     delay: 2000
//   }
// });

// anime({
//    targets: 'div.boxong.yellow',
//    value: [0, 1000],
//    round: 1,
//    easing: 'easeInOutExpo'

//  });

// /*var playPause = */ 
// anime({
//   targets: 'div.boxong',
//   translateY: [
//     { value: 0, duration: 500 },
//     { value: 0, duration: 800 }
//   ],
//   rotate:{
//      value: -360,
//      duration: 1000,
//      easing: 'linear'
//   },
//   delay: function(el, i, l){ return i * 1000},
//   loop:true
// });
// var app = require('express')();
// var http = require('http').createServer(app);
// var io = require('socket.io')(http);1111111
var socket=io();
var idElm,gx,gy,gz,g1,g2,g3,u1,u2,u221,st,p1,p2,ggx,ggy,u22,wrxkn,wrxkr,wryd,wryb,wrb;
var rangeValue = //parseInt(rangeInput.value);


console.log('Client-side code running');

var button = document.getElementById('myButton');
button.addEventListener('click', function(e) {
 location.assign('http://localhost:3000/mamet');
  console.log('button was clicked');
/*  $.get('/mamet',function(data){
console.log(data);
  });*/
});



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
   // $(idElm).text("ini id nya");
  //  console.log($(u1).text());
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
     
     $(st).text(data.Stater);
     $(p1).text(data.Pintu1);
     $(p2).text(data.Pintu2);
     ggx=data.Gyx.toFixed(1);
     ggy=data.Gyy.toFixed(1);
     u22=data.ultra2;
     u221=data.ultra2/10;
     $(u2).text(u221);
     wrxkn=data.warningxkn;
     wrxkr=data.warningxkr;
     wryd=data.warningyd;
     wryb=data.warningyb;
     
    // console.log(u2);
    
     (function() {

        // Variables to use later
        var rangeWrapper = document.querySelector('.range__wrapper');
        var rangeInput = document.querySelector('.range__input');
        var rangeValues = document.querySelector('.range__values');
        var rangeValueNumberTop = document.querySelector('.range__value__number--top');
        var rangeValueNumberBottom = document.querySelector('.range__value__number--bottom');
        var rangeSliderPaths = document.querySelectorAll('.range__slider__path');
        var mouseX = 0;
        var mouseY = 0;
        var mouseInitialY = 0;
        var mouseDy = 0;
        var mouseDyLimit = 150;
        var mouseDyFactor = 3;
        var max = 100;
        //var rangeMin = parseInt(rangeInput.min);
       // var rangeMax = parseInt(rangeInput.max);
        
        var rangeHeight = 480;
        var currentY = rangeHeight * rangeValue / max;
       // var rangeMinY = rangeHeight * rangeMin / max;
       // var rangeMaxY = rangeHeight * rangeMax / max;
        var scaleMax = 0.32;
        var scale, newPath, newY, newSliderY, lastMouseDy, rangeWrapperLeft, pageX, pageY;
      
        // Update slider value, initially using the `input` value
        updateValue();
      
        // Function to build the slider `path`, using the given `dy` and `ty` values
        function buildPath(dy, ty) {
            return 'M 0 ' + ty + ' q ' + mouseX + ' ' + dy + ' 320 0 l 0 480 l -320 0 Z';
        }
      
        // Function to update the slider value
        function updateValue() {
            // Clear animations if are still running
            anime.remove([rangeValues, rangeSliderPaths[0], rangeSliderPaths[1]]);
      
            // Calc the `input` value using the current `y`
            rangeValue =ggx;// parseInt(currentY * max / rangeHeight);
            // Calc `scale` value for numbers
          //  scale = (rangeValue - rangeMin) / (rangeMax - rangeMin) * scaleMax;
            // Update `input` value
            //rangeInput.value = rangeValue;
            // Update numbers values
          //  rangeValueNumberTop.innerText = ggx;
          //  rangeValueNumberBottom.innerText = ggy;
            // Translate range values
           // rangeValues.style.transform = 'translateY(' + (rangeHeight - 110) + 'px)';
            // Apply corresponding `scale` to numbers
            //rangeValueNumberTop.style.transform = 'scale(' + (1 - scale) + ')';
            //rangeValueNumberBottom.style.transform = 'scale(' + (1 - (scaleMax - scale)) + ')';
            anime({
              targets:'div.belakang',
              //opacity:wr1,
              rotate:{
                      value: ggx,
                      
                      duration: 0,
                      easing: 'linear'
                   }      
            })
            anime({
                targets:'div.alrt_belakang',
                opacity:wrxkn||wrxkr,
                rotate:{
                        value: ggx,
                        
                        duration: 0,
                        easing: 'linear'
                     }      
              })
            anime({
              targets:'div.samping',
              rotate:{
                      value: ggy,
                      duration: 0,
                      easing: 'linear'
                   }
            })
            anime({
                targets:'div.alrt_samping',
                opacity:wryd||wryb,
                rotate:{
                        value: ggy,
                        duration: 0,
                        easing: 'linear'
                     }
              })
            
            anime({
                targets:'div.pintu_denah',
                opacity:data.Pintu2,
               
              })

            anime({
                targets:'div.pintu_denah1',
                opacity:data.Pintu1,
               
              })
              anime({
                targets:'div.door_alrt',
                opacity:data.Pintu1||data.Pintu2,
               
              })
              anime({
                targets:'div.bensin_alrt',
                opacity:data.warningb,
               
              })
              anime({
                targets:'div.alrt',
                opacity:data.Pintu1||data.Pintu2||data.warningb||wrxkn||wrxkr||wryd||wryb,
               
              })
              anime({
                targets:'div.st_pintu',
                opacity:data.Pintu1||data.Pintu2,
               
              })
            anime({
                targets:'div.bbm_kiri',
                opacity:data.GAS2
               
              })
              anime({
                targets:'div.bbm_kanan',
                opacity:data.GAS1
               
              })
              anime({
                targets:'div.st_bbm',
                opacity:data.warningb,
               
              })
              anime({
                targets:'div.st_gxkn',
                opacity:data.warningxkn,
               
              })

            anime({
                targets:'div.st_gxkr',
                opacity:data.warningxkr,
               
              })

              anime({
                targets:'div.st_gyd',
                opacity:data.warningyd,
               
              })

              anime({
                targets:'div.st_gyb',
                opacity:data.warningyb,
               
              })
              anime({
                targets:'div.rk_kr',
                opacity:data.warningxkn,
               
              })
              anime({
                targets:'div.rk_kn',
                opacity:data.warningxkr,
               
              })
              anime({
                targets:'div.rk_d',
                opacity:data.warningyb,
               
              })
              anime({
                targets:'div.rk_b',
                opacity:data.warningyd,
               
              })
              anime({
                targets:'div.rk_p',
                opacity:data.Pintu1||data.Pintu2,
               
              })
              anime({
                targets:'div.rk_bbm',
                opacity:data.warningb,
               
              })




            anime({
                   targets: 'div.over',
                  translateY: [
                     { value: (13.0-(u22/10)), duration:0}
                    
                   ]
                });
           /* anime({
                targets:'div.boxong.battery',
                translateY:{value:rangeValue*4,duration:0},
                easing: 'linear',
            })*/
      
            // Some maths calc
            if (Math.abs(mouseDy) < mouseDyLimit) {
                lastMouseDy = mouseDy;
            } else {
                lastMouseDy = mouseDy < 0 ? -mouseDyLimit : mouseDyLimit;
            }
      
            // Calc the `newSliderY` value to build the slider `path`
           /* newSliderY = currentY + lastMouseDy / mouseDyFactor;
            if (newSliderY < rangeMinY || newSliderY > rangeMaxY) {
                newSliderY = newSliderY < rangeMinY ? rangeMinY : rangeMaxY;
            }*/
      /*
            // Build `path` string and update `path` elements
            newPath = buildPath(lastMouseDy, rangeHeight - newSliderY);
            rangeSliderPaths[0].setAttribute('d', newPath);
            rangeSliderPaths[1].setAttribute('d', newPath);*/
        }
        
        // Function to simulate the elastic behavior
        function elasticRelease() {
            // Morph the paths to the opposite direction, to simulate a strong elasticity
            anime({
                targets: rangeSliderPaths,
                d: buildPath(-lastMouseDy * 1.3, rangeHeight - (currentY - lastMouseDy / mouseDyFactor)),
                duration: 150,
                easing: 'linear',
                complete: function () {
                    // Morph the paths to the normal state, using the `elasticOut` easing function (default)
                    anime({
                        targets: rangeSliderPaths,
                        d: buildPath(0, rangeHeight - currentY),
                        duration: 4000,
                        elasticity: 880
                    });
                }
            });
      
            // Translate the values to the opposite direction, to simulate a strong elasticity
            anime({
                targets: rangeValues,
                translateY: rangeHeight - (currentY + lastMouseDy / mouseDyFactor / 4),
                duration: 150,
                easing: 'linear',
                complete: function () {
                    // Translate the values to the right position, using the `elasticOut` easing function (default)
                    anime({
                        targets: rangeValues,
                        translateY: rangeHeight - currentY,
                        duration: 4000,
                        elasticity: 880
                    });
                }
            });
        }
      
        // Handle `mousedown` and `touchstart` events, saving data about mouse position
        function mouseDown(e) {
            mouseY = mouseInitialY = e.targetTouches ? e.targetTouches[0].pageY : e.pageY;
            rangeWrapperLeft = rangeWrapper.getBoundingClientRect().left;
        }
      
        // Handle `mousemove` and `touchmove` events, calculating values to morph the slider `path` and translate values properly
        function mouseMove(e) {
            if (mouseY) {
                pageX = e.targetTouches ? e.targetTouches[0].pageX : e.pageX;
                pageY = e.targetTouches ? e.targetTouches[0].pageY : e.pageY;
                mouseX = pageX - rangeWrapperLeft;
                mouseDy = (pageY - mouseInitialY) * mouseDyFactor;
                newY = currentY + mouseY - pageY;
                if (newY >= rangeMinY && newY <= rangeMaxY) {
                    currentY = newY;
                    mouseY = pageY;
                } else {
                    currentY = newY < rangeMinY ? rangeMinY : rangeMaxY;
                }
                // After doing maths, update the value
                updateValue();
            }
        }
      
        // Handle `mouseup`, `mouseleave` and `touchend` events
        function mouseUp() {
            // Trigger elastic animation in case `y` value has changed
            if (mouseDy) {
                elasticRelease();
            }
            // Reset values
            mouseY = mouseDy = 0;
        }
      /*
        // Events listeners
        rangeWrapper.addEventListener('mousedown', mouseDown);
        rangeWrapper.addEventListener('touchstart', mouseDown);
        rangeWrapper.addEventListener('mousemove', mouseMove);
        rangeWrapper.addEventListener('touchmove', mouseMove);
        rangeWrapper.addEventListener('mouseup', mouseUp);
        rangeWrapper.addEventListener('mouseleave', mouseUp);
        rangeWrapper.addEventListener('touchend', mouseUp);
      */
      })();
  });
  
  //ggx=90;
  //console.log('a');



