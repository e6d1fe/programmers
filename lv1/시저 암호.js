function solution(s, n) {
  const split = s.split("");

  for (let i = 0; i < split.length; i++) {
    if (split[i] !== " ") {
      if (split[i].toUpperCase() === split[i]) {
        split[i] =
          split[i].charCodeAt(0) + n > 90
            ? String.fromCharCode(split[i].charCodeAt(0) + n - 26)
            : String.fromCharCode(split[i].charCodeAt(0) + n);
      } else {
        split[i] =
          split[i].charCodeAt(0) + n > 122
            ? String.fromCharCode(split[i].charCodeAt(0) + n - 26)
            : String.fromCharCode(split[i].charCodeAt(0) + n);
      }
    }
  }

  return split.join("");
}
