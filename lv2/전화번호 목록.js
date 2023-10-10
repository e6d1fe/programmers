// https://school.programmers.co.kr/learn/courses/30/lessons/42577

function solution(phone_book) {
  phone_book.sort();

  const isPrefix = phone_book.some((number, idx) => phone_book[idx + 1]?.indexOf(number) === 0);

  return !isPrefix;
}
