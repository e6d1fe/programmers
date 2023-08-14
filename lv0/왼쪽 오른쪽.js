// https://school.programmers.co.kr/learn/courses/30/lessons/181890

function solution(str_list) {
  const indexOfL = str_list.indexOf("l");
  const indexOfR = str_list.indexOf("r");

  if (indexOfL !== -1 && indexOfR !== -1) {
    return indexOfL < indexOfR ? str_list.slice(0, indexOfL) : str_list.slice(indexOfR + 1);
  } else if (indexOfL === -1 && indexOfR !== -1) {
    return str_list.slice(indexOfR + 1);
  } else if (indexOfL !== -1 && indexOfR === -1) {
    return str_list.slice(0, indexOfL);
  } else {
    return [];
  }
}
