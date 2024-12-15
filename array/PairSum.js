// Brute Force

let arr = [2, 7, 11, 15];
let target = 18;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] == target) {
      // console.log([arr[i], arr[j]]);  //i adding comment here so it cannot be make a mesh in terminal
    }
  }
}

// better solution with two pointer approach
let i = 0,
  j = arr.length - 1;

while (i < j) {
  ps = arr[i] + arr[j];
  if (ps > target) j--;
  else if (ps < target) i++;
  else {
    ans = [arr[i], arr[j]];
    console.log(ans);
    break;
  }
}
