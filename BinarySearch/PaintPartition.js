function PainterPartition(arr, m) {
  function isPossible(arr, n, m, mid) {
    let painter = 1;
    let time = 0;
    for (let i = 0; i < n; i++) {
      if (time + arr[i] <= mid) {
        time += arr[i];
      } else {
        painter++;
        time = arr[i];
      }
    }
    if (painter > m) {
      return false;
    } else {
      return true;
    }
  }

  let n = arr.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  let maxVal = Math.max(...arr);
  let st = maxVal;
  let end = sum;
  let ans = -1;
  while (st <= end) {
    let mid = st + Math.floor((end - st) / 2);
    let painter = -1;

    if (isPossible(arr, n, m, mid)) {
      ans = mid;
      end = mid - 1;
    } else {
      st = mid + 1;
    }
  }
  return ans;
}
console.log(PainterPartition([10, 10, 10, 10], 2));
