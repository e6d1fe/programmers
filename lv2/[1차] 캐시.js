// https://school.programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize, cities) {
  let cache = [];
  let time = 0;

  cities = cities.map((item) => item.toLowerCase());

  for (let city of cities) {
    if (!cache.includes(city) && cache.length < cacheSize) {
      cache.unshift(city);
      time += 5;
    } else if (!cache.includes(city) && cache.length >= cacheSize) {
      cache.pop();
      cache.unshift(city);
      time += 5;
    } else if (cache.includes(city)) {
      cache.splice(cache.indexOf(city), 1);
      cache.unshift(city);
      time += 1;
    }
  }

  return cacheSize === 0 ? cities.length * 5 : time;
}
