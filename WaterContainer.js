/**
 * @param {number[]} height
 * @return {number}
 */
// Brute solution
var maxArea = function (height) {
  let maxWater = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      // Fix loop condition
      let area = Math.min(height[i], height[j]) * (j - i); // Correct area formula
      if (area > maxWater) {
        maxWater = area;
      }
    }
  }
  console.log(maxWater);
};

// Optimal Solution

var maxArea = function (height) {
  let maxWater = 0;
  let n = height.length;
  let left = 0,
    right = n - 1;

  while (left < right) {
    // Correct calculation of width
    let w = right - left;
    let h = Math.min(height[left], height[right]);
    let area = w * h;
    maxWater = Math.max(maxWater, area);

    // Move the pointer with the smaller height
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
};
