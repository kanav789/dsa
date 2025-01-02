// brute Force
// function MaxSubarray(arr) {
//   let n = arr.length;
//   let maxsum = 0;

//   for (let st = 0; st < n; st++) {
//     let currSum = 0;
//     for (let ed = st; ed < n; ed++) {
//       currSum += arr[ed];
//       console.log((maxsum = Math.max(currSum, maxsum)));
//     }
//   }

//   console.log("max sub array", maxsum);
// }

// Better Solution

function MaxSubarray(arr) {
  let n = arr.length;
  let maxsum = -Infinity;
  let currsum = 0;
  for (let i = 0; i < n; i++) {
    currsum += arr[i];
    maxsum = Math.max(currsum, maxsum);
    if (currsum < 0) currsum = 0;
  }
  console.log(maxsum);
}

MaxSubarray([-1]);
