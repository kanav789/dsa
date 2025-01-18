function MajorityElem(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let freq = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] == arr[j]) {
        freq++;
      }
    }
    if (freq > n / 2) {
      return arr[i];
    }
  }
}

console.log(MajorityElem([1, 2, 2, 1, 1]));
