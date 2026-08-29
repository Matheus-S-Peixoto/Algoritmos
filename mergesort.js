function mergesort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergesort(left), mergesort(right));
}

function merge(left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

let arr = []
for(let i = 0; i <= 1000000; i++) {
  arr[i] = Math.floor(Math.random() * 10501);
};

console.time('mergesort-random');
const ordered = mergesort(arr);
console.timeEnd('mergesort-random');

console.time('mergesort-sorted');
const sorted2 = mergesort(arr);
console.timeEnd('mergesort-sorted'); 