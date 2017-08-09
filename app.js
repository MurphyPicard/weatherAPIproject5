var x = document.getElementsByTagName("h6")[0];
// document.getElementById("thish1").innerHTML = "changed22222!!!";
$("#divc").hide();
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    console.log("Note - this is position: ")
    console.log(position);
    $.ajax({
            url: "https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude +
            "&lon=" + position.coords.longitude,
            // Ara: https://fcc-weather-api.glitch.me/api/current?lat=41.828868799999995&lon=-71.4331117
            success: function(result){
              console.log("Note - this is result.weather[0] and [1]: ");
              console.log(result.weather[0]);
              console.log(result.weather[1]);
              $("#divdesc").html(result.weather[0].description);
              $("#divcity").html(result.name);
              $(".divcity").html(result.name);

              if(result.weather[0].icon){$("#divicon").html('<img style="height: 95px;" src="' + result.weather[0].icon + '">');}
              else{$("#divicon").html('<img src="http://openweathermap.org/img/w/' + result.weather[1].icon + '.png">');}

              $("#divc").html(Math.round(result.main.temp) + " degrees<br>Celcius").hide();
              $("#divf").html(Math.round(result.main.temp * 9/5 + 32) + " degrees Fahrenheit");
        }});
}//showPosition

function getLocation(){
    if (navigator.geolocation) {
      console.log("Note: in IF");
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Note: in ELSE");
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}//getLocation

//for openweathermap.org
var weatherKey = "b2e58b52829ad3eed30844f56780b2f2";

// $("#weatherbutton").click(function(){
//     $.ajax({
//         url: "https://fcc-weather-api.glitch.me/api/",
//         success: function(result){
//                   $(".divf").html(result);
//     }});
// });

// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}

// Example of API call:
// api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1111111111

// fcc version https://fcc-weather-api.glitch.me/api/current?
var showCelcius = false;
function FtoCtoF(){
  if (showCelcius == false){
    $("#divf").hide();
    $("#divc").show();
    showCelcius = true;
  }else{
    $("#divc").hide();
    $("#divf").show();
    showCelcius = false;
  }
}
