!async function(){const t=await fetch("https://api.weatherapi.com/v1/current.json?key=d32e343e2cba408f898102759232108&q=tirana"),a=await t.json();console.log(a.current.temp_c)}();