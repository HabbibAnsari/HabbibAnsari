var countDate = new Date('Jan 1, 2022 00:00:0000').getTime();

//  console.log(countDate);

    function newYear() {
        var now = new Date().getTime();
            gap = countDate - now;

        //console.log(gap);
          
        //   var miliseconds = 1000;
          var seconds = 1000;
          var minutes = seconds * 60;
          var hours = minutes * 60;
          var days = hours * 24;

          var d = Math.floor( gap / (days));
          var h = Math.floor( (gap % (days)) / (hours));
          var m = Math.floor( (gap % (hours)) / (minutes));
          var s = Math.floor( (gap % (minutes)) / (seconds));
        //   var m = Math.floor( (gap % (seconds)) / (miliseconds));

          document.getElementById('days').innerHTML = d;
          document.getElementById('hours').innerHTML = h;
          document.getElementById('minutes').innerHTML = m;
          document.getElementById('seconds').innerHTML = s;
        //   document.getElementById('miliseconds').innerHTML = m;
  }

  setInterval(function(){
      newYear();
  },1000)
