(function() {
  'use strict';

  var battery;
  var percentage = "";
  var i;
  var interval;

  alert("let's start charging");


  var b1 = document.querySelector(".ldBar");
  var b = new ldBar(b1);

  if ('getBattery' in navigator) {
    navigator.getBattery().then(readBattery);
  } 
  else if (navigator.battery) {
    readBattery(navigator.battery);
  }
  
  function readBattery(battery) {
    i = (battery.level * 100);
    b.set(i, false);
    interval = setInterval( increment, 5000);
  }

  function increment(){
    if(i < 100){
      i = i + 1;
    }
    b.set(i, false);
  }

  window.onload = function () {
    battery.addEventListener('chargingchange', function() {
      readBattery();
    });

    battery.addEventListener("levelchange", function() {
      readBattery();
    });
  };
  
}());