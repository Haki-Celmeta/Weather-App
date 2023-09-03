/* eslint-disable no-unused-expressions */
/* eslint-disable spaced-comment */
import getCurrentWeather, { getFutureWeather } from './getWeather';
import changeCurrentWeather, { changeFutureWeather } from './ui';

const input = document.querySelector('input');
const error = document.querySelector('.error-display');

async function weather(city) {
  const currentWeather = await getCurrentWeather(city);
  const futureWeather = await getFutureWeather(city);
  !currentWeather ? error.innerText = 'Cannot find' : error.innerText = '';
  changeCurrentWeather(currentWeather);
  changeFutureWeather(futureWeather);
  console.log(currentWeather);
  console.log(futureWeather);
}

input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    weather(input.value);
    input.value = '';
  }
});
