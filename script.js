var cell = document.getElementById('cell');
var indicator = document.getElementById('indicator');
 navigator.getBattery().then(function(battery) {
   function updateAllBatteryInfo(){
     updateChargeInfo();
     updateLevelInfo();
     updateChargingInfo();
     updateDischargingInfo();
   }
   updateAllBatteryInfo();

   battery.addEventListener('chargingchange', function(){
     updateChargeInfo();
   });
   function updateChargeInfo(){
      if(battery.charging){
          cell.style.background="#06eeb0";
          indicator.style.display="block";
      }
      else{
        indicator.style.display="none";
        if(battery.level<0.25){
          cell.style.background="#e0821f";
        }
        else{
        cell.style.background="#08c66b";
        }
      }
   }

   battery.addEventListener('levelchange', function(){
     updateLevelInfo();
   });
   function updateLevelInfo(){
     cell.style.height = battery.level * 100 + "%";
     cell.innerHTML = "<br/>"+Math.round(battery.level * 100) + "%";
     if(battery.level<0.15){
       cell.style.background="#e0821f";
     }
   }

   battery.addEventListener('chargingtimechange', function(){
     updateChargingInfo();
   });
   function updateChargingInfo(){
     console.log("Battery charging time: "
                  + battery.chargingTime + " seconds");
   }

   battery.addEventListener('dischargingtimechange', function(){
     updateDischargingInfo();
   });
   function updateDischargingInfo(){
     console.log("Battery discharging time: "
                  + battery.dischargingTime + " seconds");
   }

 });
