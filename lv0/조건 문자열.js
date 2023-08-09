// https://school.programmers.co.kr/learn/courses/30/lessons/181934

function solution(ineq, eq, n, m) {
  if (ineq === ">" && eq === "=") {
    return n >= m ? 1 : 0;
  } else if (ineq === "<" && eq === "=") {
    return n <= m ? 1 : 0;
  } else if (ineq === ">" && eq === "!") {
    return n > m ? 1 : 0;
  } else {
    return n < m ? 1 : 0;
  }
}

// 다른 풀이 1

const operations = {
  ">=": (n, m) => n >= m,
  "<=": (n, m) => n <= m,
  ">!": (n, m) => n > m,
  "<!": (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
  const operation = operations[ineq + eq];

  return Number(operation(n, m));
}
