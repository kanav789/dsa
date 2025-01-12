function SingleEle(arr) {
  let n = arr.length;
  let st = 0;
  let end = n - 1;
  if (n == 1) return arr[0];
  while (st <= end) {
    let mid = Math.floor((st + end) / 2);
    if (mid === 0 && arr[0] != arr[1]) return arr[0];
    if (mid === n - 1 && arr[n - 1] != arr[n - 2]) return arr[mid];

    if (arr[mid] != arr[mid - 1] && arr[mid] != arr[mid + 1]) return arr[mid];
    if (mid % 2 == 0) {
      if (arr[mid] === arr[mid + 1]) st = mid + 1;
      else end = mid - 1;
    } else {
      if (arr[mid] === arr[mid - 1]) st = mid + 1;
      else end = mid - 1;
    }
  }
}
console.log(SingleEle([1, 1, 2, 3, 3, 4, 4, 8, 8]));
