const api_url = "https://api.openweathermap.org/data/2.5/weather?q=amsterdam,&appid=a67d3f36cd740475df0923cbcb7f607c";

let Temprature: number;
function getTemp(): Promise <number> {
    // For now, consider the data is stored on a static `users.json` file
    return fetch(api_url)
    // the JSON body is taken from the response
    .then(res => res.json())
    .then(res => {
        // The response has an `any` type, so we need to cast
        // it to the `User` type, and return it from the promise
        return res.main.temp

    })
}

getTemp()
.then(temps => {
    const temp_celcius: number = temps - 273.15;
    console.log(temp_celcius);
})