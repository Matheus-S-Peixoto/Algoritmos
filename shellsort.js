function shellsort(arr) {
    let n = arr.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j;

            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
        }
    }
    return arr;
}

let arr = []
for(let i = 0; i <= 1000000; i++) {
  arr[i] = Math.floor(Math.random() * 10501);
};

console.time('shellsort-random');
const ordered = shellsort(arr);
console.timeEnd('shellsort-random');

console.time('shellsort-sorted');
const sorted2 = shellsort(arr);
console.timeEnd('shellsort-sorted'); 