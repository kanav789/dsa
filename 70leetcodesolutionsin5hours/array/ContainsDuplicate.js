var containsDuplicate = function(nums) {
    if (nums.length <= 1) return false;  //edge cases
    
    nums.sort((a, b) => a - b); // Sort the array in ascending order

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {  // Check consecutive elements
            return true;
        }
    }
    return false;
};

console.log(containsDuplicate([3,3]) )