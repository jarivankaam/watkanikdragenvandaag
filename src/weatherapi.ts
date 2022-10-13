const api_url = "https://api.openweathermap.org/data/2.5/weather?q=amsterdam,&appid=a67d3f36cd740475df0923cbcb7f607c";

let Temprature: number;
function getTemp(): Promise <number> {

    return fetch(api_url)

    .then(res => res.json())

    .then(res => {
        return res.main.temp

    })
}

getTemp()
.then(temps => {
    const temp_celcius: number = temps - 273.15;
    const temp_str : string = temp_celcius.toFixed(0);
    let html = document.getElementById('temp');
    let clothes = document.getElementById('clothes');
    html.innerHTML = "Het is nu: " + "" + temp_str + "°C" + " buiten";
    if (temp_celcius < 10) {
        clothes.innerHTML = "Je hebt een jas nodig";
    } else if (temp_celcius < 20) {
        clothes.innerHTML = "Je hebt een vest nodig";
    }
    else if (temp_celcius < 30) {
        clothes.innerHTML = "Je hebt een t-shirt nodig";
    }
    else if (temp_celcius < 40) {
        clothes.innerHTML = "Je hebt een zwembroek nodig";
    }
    else {
        clothes.innerHTML = "Ga weg";
    }

})

