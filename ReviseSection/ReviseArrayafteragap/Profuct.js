// Brute solution
// function product(arr) {
//   let n = arr.length;

//   let ans = [];

//   for (let i = 0; i < n; i++) {
//     let product = 1;
//     for (let j = 0; j < n; j++) {
//       if (arr[i] != arr[j]) {
//         product *= arr[j];
//       }
//     }
//     ans.push(product);
//   }
//   return ans;
// }

// Optimal solution

function product(arr) {
  let n = arr.length;

  // Edge case: if the array has less than two elements, return an empty array
  if (n < 2) return [];

  let ans = new Array(n).fill(1); // Initialize the answer array with 1
  console.log(ans, "center");
  let prefix = 1; // Prefix product accumulator
  let suffix = 1; // Suffix product accumulator

  // Calculate prefix products and store directly in ans
  for (let i = 0; i < n; i++) {
    ans[i] = prefix; // Assign the prefix product to ans[i]
    prefix *= arr[i]; // Update the prefix product
  }

  // Calculate suffix products and multiply with current values in ans
  for (let i = n - 1; i >= 0; i--) {
    ans[i] *= suffix; // Multiply the suffix product with ans[i]
    suffix *= arr[i]; // Update the suffix product
  }

  return ans;
}

// Example usage
console.log(product([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
