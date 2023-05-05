navigator.geolocation.getCurrentPosition(function (position) {
    var _a = position.coords, latitude = _a.latitude, longitude = _a.longitude;
    console.log("latitude: ".concat(latitude, ", longitude: ").concat(longitude));
    var api_url = "https://api.openweathermap.org/data/2.5/weather?lat=".concat(latitude, "&lon=").concat(longitude, "&appid=becb7265debe1d9f5176ce6e543deca5");
    function getTemp() {
        return fetch(api_url)
            .then(function (res) { return res.json(); })
            .then(function (res) { return res.main.temp; });
    }
    getTemp().then(function (temp) {
        var temp_celcius = temp - 273.15;
        var temp_str = temp_celcius.toFixed(0);
        var html = document.querySelector('#temp');
        html.innerHTML = "Het is nu: ".concat(temp_str, "\u00B0C buiten");
        var clothes = document.querySelector('#clothes');
        var icon = document.querySelector('#icon');
        if (temp_celcius < 10) {
            clothes.innerHTML = "Je kan het beste een jas en warme kleding dragen.";
            icon.innerHTML = '<img src="https://img.icons8.com/jacket" alt="icon freezing "/>';
        }
        else if (temp_celcius < 15) {
            clothes.innerHTML = "Je kan het beste een vest en wat dikkere kleren dragen.";
            icon.innerHTML = '<img src="https://img.icons8.com/vest" alt="icon realy cold "/> ';
        }
        else if (temp_celcius < 20) {
            clothes.innerHTML = "Je kan het beste lichte en dunne kleding dragen maar je mag ook dikkere kleding dragen.";
            icon.innerHTML = '<img src="https://img.icons8.com/t-shirt" alt="icon cold"/>';
        }
        else if (temp_celcius < 30) {
            clothes.innerHTML = "Je kan het beste een t-shirt en korte broek dragen en laat de winterjas maar lekker thuis.";
            icon.innerHTML = '<img src="https://img.icons8.com/t-shirt" alt="icon hot "/>';
        }
        else if (temp_celcius < 40) {
            clothes.innerHTML = "Je kan het beste een zwembroek aantrekken want face it het is veel te warm";
            icon.innerHTML = '<img src="https://img.icons8.com/swimwear" alt="icon really hot"/>';
        }
        else {
            clothes.innerHTML = "Ga weg het is veel te koud of veel te warm";
        }
    })
        .catch(function (error) {
        console.error("Error fetching weather data: ", error);
        var html = document.querySelector('#temp');
        html.innerHTML = "Kon het weer niet ophalen, probeer het later opnieuw";
    });
}, function (error) {
    console.error("Error getting location data: ", error);
    var html = document.querySelector('#temp');
    html.innerHTML = "Kon uw locatie niet vinden, controleer of locatietoegang is ingeschakeld";
});
