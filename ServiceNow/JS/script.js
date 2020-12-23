/* 
1) First get json object data by ref url and annon func, pass data into annon
2) Then create variable referncing JSON data (dot walk)
3) Use jquery to update HTML element with JSON data
*/
var city = "Hartford";

function getWeather(city) {

if (city == null) {
  city = "Hartford";
}

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=3d5842fb9c63a6a717116e37f325fd14", function(data){

var cityName = data.name;
var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp = Math.floor(data.main.temp);
var weather = data.weather[0].description;


$(".icon").attr('src', icon) // This is jquery, select html element with class icon, selects its attribute named src and changes it to variable icon

$(".temp").empty();
$(".temp").append(temp);

$(".weather").empty();
$(".weather").append(weather);

$(".city").empty();
$(".city").append(cityName);
});
}

function myFunction() {
 city = document.getElementById("citySearch").value;
 getWeather(city);
}