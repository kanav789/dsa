let arr = [1, 2, 3, 4];
let n = arr.length;
let ans = []; // Initialize as an empty array

for (let i = 0; i < n; i++) {
  let product = 1; // Temporary variable to store product except current element
  for (let j = 0; j < n; j++) {
    if (i !== j) {
      product *= arr[j];
    }
  }
  ans.push(product); // Push the calculated product into the ans array
}

return ans;
