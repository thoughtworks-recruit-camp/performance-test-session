let timeCosts = [];

function makeRandomArray(n) {
  let array = [];
  for (let index = 0; index < n; index++) {
    array.push(String.fromCharCode(Math.floor(Math.random() * 26)+97));
  }
  return array;
}

function countLetters(letters) {
  var keys = [];
  return letters.reduce(
    function (acc, cur) {
      var curIndex = keys.indexOf(cur);
      if (curIndex === -1) {
        keys.push(cur);
        curIndex = keys.indexOf(cur);
        acc[curIndex] = {key: cur, count: 0};
      }
      acc[curIndex].count += 1;
      return acc;
    },
    []);
}

const N = 1000000;
randomArrayOriginal = makeRandomArray(N);
for (let seq = 1; seq <= 5; seq++) {
  let randomArray = randomArrayOriginal.concat();
  let timeBegin = new Date().getTime();
  let result=countLetters(randomArray);
  let timeEnd = new Date().getTime();
  let timePassed = timeEnd - timeBegin;
  timeCosts.push(timePassed);
  console.log(`calculated in ${timePassed}ms`)
}