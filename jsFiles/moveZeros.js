/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var left = 0, right = 0;
    var temp;
    var n = nums.length
    
    while (right < n) {
        if (nums[right] == 0)
            ++right;
        else {
            temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            ++left;
            ++right;
        }
    } 
    console.log(nums)
};
var nums = [0, 1, 0, 0, 4, 0, 0]
moveZeroes(nums)