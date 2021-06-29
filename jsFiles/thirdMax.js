/**
 * @param {number[]} nums
 * @return {number}
 */


nums = [1, 1, 2]
var thirdMax = function(nums) {    
    nums = [...new Set(nums)] // or Array.from(new Set(nums))
    return nums.length < 3? nums.sort((a,b) => b-a)[0]:nums.sort((a,b) => b-a)[2]
};

console.log(thirdMax(nums))