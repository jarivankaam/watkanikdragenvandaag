navigator.geolocation.getCurrentPosition((position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    console.log('latitude:' + latitude + 'longitude:' + longitude)

    const api_url = "https://api.openweathermap.org/data/2.5/weather?lat="  + latitude + "&lon=" + longitude + "&appid=becb7265debe1d9f5176ce6e543deca5";
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
            let icon = document.getElementById('icon');
            html.innerHTML = "Het is nu: " + "" + temp_str + "°C" + " buiten";


            if (temp_celcius < 10) {
                clothes.innerHTML = "Je kan het beste een jas en warme kledigen dragen.";
                icon.innerHTML = '<img src="https://img.icons8.com/jacket"/>';
            } else if (temp_celcius < 15 && temp_celcius > 10) {
                clothes.innerHTML = "Je kan het beste een vest en wat dikkere kleren dragen.";
                icon.innerHTML = '<img src="https://img.icons8.com/vest"/>';
            }
            else if (temp_celcius < 20 && temp_celcius > 15) {
                clothes.innerHTML = "Je kant het beste lichte en dunnne kleding dragen maar je mag ook dikkere kleding dragen.";
                icon.innerHTML = '<img src="https://img.icons8.com/t-shirt"/>';

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

        })


});






