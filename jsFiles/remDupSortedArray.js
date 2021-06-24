/**
 * @param {number[]} nums
 * @return {number}
 */


var removeDuplicates = function (nums) {
    var n = nums.length
    if (n == 0 || n == 1) {
        console.log(nums.length)
        return n;
    }

    var tem = []

    var j = 0;
    for (i = 0; i < n - 1; i++) {
        if (nums[i]!= nums[i + 1]) {
            tem[j++] = nums[i];
        }

    }
    tem[j++] = nums[n - 1]
    nums = tem
    console.log(nums)
    return nums
};

var nums = [1, 1, 2];

removeDuplicates(nums);