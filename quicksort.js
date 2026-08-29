const quicksort = (array) => {
  if(array.length < 2) return array;
  else {
    let pivot = array[Math.floor(array.length / 2)];
    pivotIndex = Math.floor(array.length / 2);
    let smaller = array.filter((num, index) => index != pivotIndex && num <= pivot);
    let bigger = array.filter((num, index) => index != pivotIndex && num > pivot);
    return [
      ...quicksort(smaller),
      pivot,
      ...quicksort(bigger)
    ];
  }
};

let arr = []
for(let i = 0; i <= 1000000; i++) {
  arr[i] = Math.floor(Math.random() * 10501);
};

console.time('quicksort-random');
const ordered = quicksort(arr);
console.timeEnd('quicksort-random');

console.time('quicksort-sorted');
const sorted2 = quicksort(arr);
console.timeEnd('quicksort-sorted'); 