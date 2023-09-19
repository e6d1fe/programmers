// https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
  let hamburgers = 0;

  const stack = [];

  ingredient.forEach((item) => {
    stack.push(item);
    if (
      stack[stack.length - 4] === 1 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 1] === 1
    ) {
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();

      hamburgers += 1;
    }
  });

  return hamburgers;
}
