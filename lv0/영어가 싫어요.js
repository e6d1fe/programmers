// https://school.programmers.co.kr/learn/courses/30/lessons/120894

function solution(numbers) {
  const englishNumbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < englishNumbers.length; i++) {
    numbers = numbers.replaceAll(englishNumbers[i], i);
  }

  return Number(numbers);
}
