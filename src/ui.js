/* eslint-disable no-plusplus */
/* eslint-disable keyword-spacing */
/* eslint-disable max-len */
const cityCountryText = document.querySelector('.city-country');
const conditionText = document.querySelector('.condition-text');
const icon = document.querySelector('.icon');
const currentDegree = document.querySelector('.degree');
const currentWind = document.querySelector('.wind');
const currentHumidity = document.querySelector('.humidity');
const currentFeelsLike = document.querySelector('.feelslike');
const degreeCelsius = '\u2103';

const table = document.querySelector('table');

function changeCurrentWeather(object) {
  cityCountryText.innerText = `${object.location.name}, ${object.location.country}`;
  conditionText.innerText = `${object.current.condition.text}`;
  icon.src = object.current.condition.icon;
  currentDegree.innerText = `${object.current.temp_c}${degreeCelsius}`;
  currentWind.innerText = `Wind: ${object.current.wind_kph}kph`;
  currentHumidity.innerText = `Humidity: ${object.current.humidity}%`;
  currentFeelsLike.innerText = `Feels like: ${object.current.feelslike_c}${degreeCelsius}`;
}

function createTableRow() {
  const row = document.createElement('tr');
  row.classList.add('forecast-date');
  return row;
}

function createTableHead(content) {
  const tableHead = document.createElement('th');
  tableHead.innerText = content;
  return tableHead;
}

function createTableData(content) {
  const data = document.createElement('td');
  data.innerText = content;
  return data;
}

function createImage(src) {
  const img = document.createElement('img');
  img.classList.add('small-icon');
  img.src = src;
  return img;
}

function createTableDataImage(src) {
  const data = document.createElement('td');
  const img = createImage(src);
  data.appendChild(img);
  return data;
}

function createFullTableRow(date, src, wind, humidity, high, low) {
  const tableRow = createTableRow();
  const tableDate = createTableData(date.slice(-2));
  const tableIcon = createTableDataImage(src);
  const tableWind = createTableData(`${wind}kph`);
  const tableHumidity = createTableData(`${humidity}%`);
  const tableHigh = createTableData(`${high}${degreeCelsius}`);
  const tableLow = createTableData(`${low}${degreeCelsius}`);

  tableRow.appendChild(tableDate);
  tableRow.appendChild(tableIcon);
  tableRow.appendChild(tableWind);
  tableRow.appendChild(tableHumidity);
  tableRow.appendChild(tableHigh);
  tableRow.appendChild(tableLow);

  return tableRow;
}

function createTableHeading() {
  const tableRow = document.createElement('tr');
  tableRow.setAttribute('id', 'heading');
  const date = createTableHead('Date');
  const condition = createTableHead('Condition');
  const wind = createTableHead('Wind');
  const humidity = createTableHead('Humidity');
  const high = createTableHead('High');
  const low = createTableHead('Low');

  tableRow.appendChild(date);
  tableRow.appendChild(condition);
  tableRow.appendChild(wind);
  tableRow.appendChild(humidity);
  tableRow.appendChild(high);
  tableRow.appendChild(low);

  table.appendChild(tableRow);
}

function changeFutureWeather(object) {
  const fc = object.forecast.forecastday;
  table.innerHTML = '';
  createTableHeading();
  for (let i = 0; i < fc.length; i++) {
    const forecastDay = fc[i].day;
    const row = createFullTableRow(fc[i].date, forecastDay.condition.icon, forecastDay.avgvis_km, forecastDay.avghumidity, forecastDay.maxtemp_c, forecastDay.mintemp_c);
    table.appendChild(row);
  }
}

export default changeCurrentWeather;
export { changeFutureWeather };
