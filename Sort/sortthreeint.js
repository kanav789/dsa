// function SortColor(arr) {
//   let zerocount = 0;
//   let onecount = 0;
//   let twocount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       zerocount++;
//     } else if (arr[i] === 1) {
//       onecount++;
//     } else {
//       twocount++;
//     }
//   }
//   let idx = 0;
//   for (let i = 0; i < zerocount; i++) {
//     arr[idx++] = 0;
//   }
//   for (let i = 0; i < onecount; i++) {
//     arr[idx++] = 1;
//   }
//   for (let i = 0; i < twocount; i++) {
//     arr[idx++] = 2;
//   }

//   console.log(arr);
// }

// batter solution

function SortColor(arr) {
  let l = 0;
  let mid = 0;
  let h = arr.length - 1;

  while (mid <= h) {
    let temp = 0;
    if (arr[mid] === 0) {
      temp = arr[l];
      arr[l] = arr[mid];
      arr[mid] = temp;
      mid++;
      l++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      temp = arr[h];
      arr[h] = arr[mid];
      arr[mid] = temp;
      h--;
    }
  }
  console.log(arr);
}
SortColor([
  2, 0, 2, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
]);
