function Rotated(arr, tar) {
  let st = 0;
  let end = arr.length - 1;

  while (st <= end) {
    let mid = Math.floor((st + end) / 2);
    if (arr[mid] == tar) return mid;

    if (arr[st] <= arr[mid]) {
      if (arr[st] <= tar && tar <= arr[mid]) {
        end = mid - 1;
      } else {
        st = mid + 1;
      }
    } else {
      if (arr[mid] <= tar && tar <= arr[end]) {
        st = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}

console.log(Rotated([4, 5, 6, 7, 0, 1, 2], 5)); // 4
