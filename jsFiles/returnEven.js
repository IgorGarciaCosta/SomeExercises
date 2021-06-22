// Retorna quantos números com quantidade pares de dígitos há no array
nums = [555,901,482,1771]

var currentNumber=0
var evenCounter=0
var numOfDigits=0
var findNumbers = function(nums) {
    for(i=0;i<nums.length;i++){
        currentNumber = nums[i]
        numOfDigits=countDigitsOfNumber(currentNumber)
        if(numOfDigits%2==0)evenCounter++
    }
    return evenCounter;
};

var countDigitsOfNumber=function(x){
    return ((Math.log10((x ^ (x >> 31)) - (x >> 31)) | 0) + 1);
}

console.log(findNumbers(nums))