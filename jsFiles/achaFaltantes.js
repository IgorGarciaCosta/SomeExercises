nums = [1, 1];

var findDisappearedNumbers = function (nums) {
    nums = [...new Set(nums)]
    nums.sort((a, b) => a - b);
    var bigger = nums[nums.length - 1]

    var set = []
    for (i = 0; i < bigger; i++) {
        set[i] = i + 1;
    }
    var faltantes = []
    var counter = 0
    for (i = 0; i < set.length; i++) {
        var indexOfSet = nums.indexOf(set[i])//confere se val está em nums
        if (indexOfSet == -1) {//val não esta em nums
            faltantes[counter] = set[i]
            counter++
        }
    }
    return faltantes
};
console.log(findDisappearedNumbers(nums));