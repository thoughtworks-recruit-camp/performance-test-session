let timeCosts = [];
const ITERATIONS = 100000000;

function calcPi() {
  let result = 0;
  for (let n = 0; n < ITERATIONS; n++) {
    if (n % 2 === 1) {
      result += -1 / (2 * n + 1);
    } else {
      result += 1 / (2 * n + 1);
    }
  }
  return result * 4
}

for (let seq = 1; seq <= 5; seq++) {
  let timeBegin = new Date().getTime();
  let pi = calcPi();
  let timeEnd = new Date().getTime();
  let timePassed = timeEnd - timeBegin;
  timeCosts.push(timePassed);
  console.log(`pi = ${pi} calculated in ${timePassed}ms`)
}
