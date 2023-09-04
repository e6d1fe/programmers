// https://school.programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];

        let divisors = 0;

        for (let l = 1; l <= sum; l++) {
          if (sum % l === 0) divisors += 1;
        }

        if (divisors === 2) answer += 1;
      }
    }
  }

  return answer;
}
