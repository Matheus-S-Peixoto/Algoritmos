function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

let arr = []
for(let i = 0; i <= 1000000; i++) {
  arr[i] = Math.floor(Math.random() * 10501);
};

console.time('selection-random');
const ordered = selectionSort(arr);
console.timeEnd('selection-random');

console.time('selection-sorted');
const sorted2 = selectionSort(arr);
console.timeEnd('selection-sorted');