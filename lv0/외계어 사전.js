// https://school.programmers.co.kr/learn/courses/30/lessons/120869

function solution(spell, dic) {
  for (let i = 0; i < dic.length; i++) {
    for (let j = 0; j < spell.length; j++) {
      dic[i] = dic[i].replace(spell[j], "*");
    }
  }

  for (let word of dic) {
    if (word.split("").every((item) => item === "*") && word.length === spell.length) return 1;
  }

  return 2;
}

// 다른 풀이 1: 더 간단하게 using Array.some()

function solution(spell, dic) {
  return dic.some((item) => spell.sort().toString() === item.split("").sort().toString()) ? 1 : 2;
}
