async function getCurrentWeather(city) {
  try {
    const response = await
      fetch(`https://api.weatherapi.com/v1/current.json?key=d32e343e2cba408f898102759232108&q=${city}`);
    if (!response.ok) throw new Error('Cannot find');
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return false;
  }
}

async function getFutureWeather(city) {
  try {
    const response = await
      fetch(`https://api.weatherapi.com/v1/forecast.json?key=d32e343e2cba408f898102759232108&q=${city}&days=7`);
    if (!response.ok) throw new Error('Cannot find');
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return false;
  }
}

export default getCurrentWeather;
export { getFutureWeather };
