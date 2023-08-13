// https://school.programmers.co.kr/learn/courses/30/lessons/120849

function solution(my_string) {
  const vowels = ["a", "e", "i", "o", "u"];

  let altered = my_string;

  for (let vowel of vowels) {
    altered = altered.replaceAll(vowel, "");
  }

  return altered;
}
