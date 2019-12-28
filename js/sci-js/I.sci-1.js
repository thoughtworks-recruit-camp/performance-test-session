let timeCosts = [];

function calcSum(maxN) {
  let sum = 0;
  for (let n = 0; n < maxN; n++) {
    sum += n;
  }
  return sum
}

for (let seq = 1; seq <= 5; seq++) {
  let timeBegin = new Date().getTime();
  let sum = calcSum(100000000);
  let timeEnd = new Date().getTime();
  let timePassed = timeEnd - timeBegin;
  timeCosts.push(timePassed);
  console.log(`sum = ${sum} calculated in ${timePassed}ms`)
}