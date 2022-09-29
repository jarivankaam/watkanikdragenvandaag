"use strict";
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        let jsonurl = "https://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=a67d3f36cd740475df0923cbcb7f607c";
        let response = fetch(jsonurl);
        console.log(response);
    });
}
