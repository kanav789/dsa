let num = [1, 2, 2, 2, 1, 3, 3, 3, 3];
let n = num.length;
// Brute Solution
// for (let i = 0; i < n; i++) {
//   let freq = 0;
//   for (let j = 0; j < n; j++) {
//     if (arr[i] == arr[j]) {
//       freq++;
//     }
//   }
//   if (freq > n / 2) {
//     // console.log(arr[i]);
//   }
// }

// Better Solution
let freq = 0,
  ans = 0;
for (let i = 0; i < n; i++) {
  if (freq == 0) {
    ans = num[i];
  }
  if (ans == num[i]) freq++;
  else freq--;
}
console.log(ans);
