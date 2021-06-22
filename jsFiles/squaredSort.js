var squaredNumbers =[]
var nums = [34, 4, 2, 1]

var sortedSquares = function(nums) {
    for(i=0;i<nums.length;i++){
        squaredNumbers[i] = (nums[i])**2
    }
    console.log(squaredNumbers.sort((a, b) => a - b))
    return squaredNumbers.sort((a, b) => a - b)
};

sortedSquares(nums)