function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    
    arr[j + 1] = current;
  }
  return arr;
}

let arr = []
for(let i = 0; i <= 1000000; i++) {
  arr[i] = Math.floor(Math.random() * 10501);
};

console.time('insertion-random');
const ordered = insertionSort(arr);
console.timeEnd('insertion-random');

console.time('insertion-sorted');
const sorted2 = insertionSort(arr);
console.timeEnd('insertion-sorted'); 