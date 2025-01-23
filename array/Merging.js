// merging of two sorted arrays

function Merge(arr1, arr2) {
  let idx = m + n - 1; // Start from the end of arr1
  let i = m - 1; // Last element of the first `m` elements in arr1
  let j = n - 1; // Last element of arr2

  // Merge both arrays starting from the back
  while (i >= 0 && j >= 0) {
    if (arr1[i] >= arr2[j]) {
      arr1[idx--] = arr1[i--];
    } else {
      arr1[idx--] = arr2[j--];
    }
  }

  // If any elements remain in arr2, merge them
  while (j >= 0) {
    arr1[idx--] = arr2[j--];
  }
  console.log(arr1);
}

Merge([1, 2, 3, 0, 0, 0], [2, 5, 6]);
