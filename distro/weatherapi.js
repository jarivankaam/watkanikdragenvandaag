const api_url = "https://api.openweathermap.org/data/2.5/weather?q=amsterdam,&appid=a67d3f36cd740475df0923cbcb7f607c";
let Temprature;
function getTemp() {
    return fetch(api_url)
        .then(res => res.json())
        .then(res => {
        return res.main.temp;
    });
}
getTemp()
    .then(temps => {
    const temp_celcius = temps - 273.15;
    const temp_str = temp_celcius.toFixed(0);
    let html = document.getElementById('temp');
    let clothes = document.getElementById('clothes');
    let icon = document.getElementById('icon');
    html.innerHTML = "Het is nu: " + "" + temp_str + "°C" + " buiten";
    if (temp_celcius < 10) {
        clothes.innerHTML = "Je kan het beste een jas en warme kledigen dragen.";
        icon.innerHTML = '<img src="https://img.icons8.com/jacket"/>';
    }
    else if (temp_celcius < 20) {
        clothes.innerHTML = "Je kan het beste een vest en wat dikkere kleren dragen.";
        icon.innerHTML = '<img src="https://img.icons8.com/vest"/>';
    }
    else if (temp_celcius < 30) {
        clothes.innerHTML = "Je kan het beste een t-shirt en korte broek dragen en laat de winterjas maar lekker thuis.";
        icon.innerHTML = '<img src="https://img.icons8.com/t-shirt"/>';
    }
    else if (temp_celcius < 40) {
        clothes.innerHTML = "Je kan het beste een zwembroek aantrekken want face it het is veelste warm";
        icon.innerHTML = '<img src="https://img.icons8.com/swimwear"/>';
    }
    else {
        clothes.innerHTML = "Ga weg het is veelste koud of veelste warm";
    }
});
