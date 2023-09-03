async function getWeather() {
  const response = await
    fetch('https://api.weatherapi.com/v1/current.json?key=d32e343e2cba408f898102759232108&q=tirana');
  const responseJson = await response.json();
  console.log(responseJson.current.temp_c);
}

getWeather();
