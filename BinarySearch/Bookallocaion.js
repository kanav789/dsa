const isPossible = (arr, n, m, mid) => {
  let student = 1;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] > mid) {
      return false;
    }
    if (sum + arr[i] > mid) {
      student++;
      sum = arr[i];
      if (student > m) {
        return false;
      }
    } else {
      sum += arr[i];
    }
  }
  return true;
};

class Solution {
  // Function to find the minimum number of pages.
  findPages(arr, m) {
    let n = arr.length;

    // Edge case: If students are more than books
    if (m > n) {
      return -1;
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += arr[i];
    }

    let ans = -1;
    let start = 0;
    let end = sum;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (isPossible(arr, n, m, mid)) {
        ans = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return ans;
  }
}

// Example Usage
const solution = new Solution();
const arr = [12, 34, 67, 90];
const m = 2; // Number of students
console.log(solution.findPages(arr, m)); // Output: Minimum pages that can be allocated
