let timeCosts = [];

function makeRandomArray(n) {
  let array = [];
  for (let index = 0; index < n; index++) {
    array.push(Math.random() * n);
  }
  return array;
}

function rankAsc(a, b) {
  return a - b;
}

const N = 1000000;
randomArrayOriginal = makeRandomArray(N);
for (let seq = 1; seq <= 5; seq++) {
  let randomArray = randomArrayOriginal.concat();
  let timeBegin = new Date().getTime();
  let sortedArray = randomArray.sort(rankAsc);
  let timeEnd = new Date().getTime();
  let timePassed = timeEnd - timeBegin;
  timeCosts.push(timePassed);
  console.log(`med = ${sortedArray[N / 2]} calculated in ${timePassed}ms`)
}