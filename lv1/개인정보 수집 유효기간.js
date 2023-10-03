// https://school.programmers.co.kr/learn/courses/30/lessons/150370

function solution(today, terms, privacies) {
  const termsObject = {};

  for (let term of terms) {
    const [type, period] = term.split(' ');

    termsObject[type] = period;
  }

  const result = [];

  privacies.map((item, idx) => {
    const [date, term] = item.split(' ');
    const dateSplit = date.split('.').map(Number);

    dateSplit[1] = dateSplit[1] + Number(termsObject[term]);
    dateSplit[2] = dateSplit[2] - 1;

    if (dateSplit[2] < 0) {
      dateSplit[1] -= 2;
      dateSplit[2] += 28;
    } else if (dateSplit[2] === 0) {
      dateSplit[1] -= 1;
      dateSplit[2] = 28;
    }

    if (dateSplit[1] > 12) {
      dateSplit[0] += Math.floor(dateSplit[1] / 12);
      dateSplit[1] = dateSplit[1] - Math.floor(dateSplit[1] / 12) * 12;

      if (dateSplit[1] === 0) {
        dateSplit[0] -= 1;
        dateSplit[1] = 12;
      }
    }

    if (dateSplit.map((item) => String(item).padStart(2, '0')).join('.') < today)
      result.push(idx + 1);
  });

  return result;
}

// 다른 풀이 1: a simpler approach

function solution(today, terms, privacies) {
  const answer = [];

  const [year, month, date] = today.split('.').map(Number);

  const todates = year * 12 * 28 + month * 28 + date;

  const termsObject = {};

  terms.forEach((item) => {
    let [type, period] = item.split(' ');

    termsObject[type] = Number(period);
  });

  privacies.forEach((item, index) => {
    let [day, term] = item.split(' ');

    day = day.split('.').map(Number);

    const dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + termsObject[term] * 28;

    if (dates <= todates) answer.push(index + 1);
  });

  return answer;
}
