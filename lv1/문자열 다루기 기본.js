// https://school.programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
  return (s.length === 4 || s.length === 6) && parseInt(s) == s ? true : false;
}

// parseInt는 문자열의 첫글자가 숫자가 아니면 NaN을 반환한다.
parseInt("10"); // 10
parseInt("10abcd3"); // 10 (숫자가 아닌 문자 전까지의 값만 정수로 변환)
parseInt("k10"); // NaN
