function Pairsum(arr) {
  let n = arr.length;
  let target = 26;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
}
