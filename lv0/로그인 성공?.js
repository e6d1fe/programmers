// https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw, db) {
  const [id, pw] = id_pw;

  const dbIDs = [];
  const dbPWs = [];

  for (let i = 0; i < db.length; i++) {
    dbIDs.push(db[i][0]);
    dbPWs.push(db[i][1]);
  }

  if (dbIDs.includes(id)) {
    if (pw === dbPWs[dbIDs.indexOf(id)]) {
      return "login";
    } else {
      return "wrong pw";
    }
  } else {
    return "fail";
  }
}

// 다른 풀이 1: 더 간단하게 표현

function solution(id_pw, db) {
  const [id, pw] = id_pw;

  for (const [dbID, dbPW] of db) {
    if (id === dbID && pw === dbPW) {
      return "login";
    } else if (id === dbID && pw !== dbPW) {
      return "wrong pw";
    }
  }

  return "fail";
}
