function missingNumber(nums) {
    nums.sort((a, b) => a - b); // Sort the array

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) { 
            return i;  // If index doesn't match the value, return the missing number
        }
    }
    
    return nums.length; // If no missing number found, return n (edge case)
}

console.log(missingNumber([3, 0, 1])); // Output: 2
