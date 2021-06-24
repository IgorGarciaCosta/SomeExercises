
var nums = [3,2,2,3]
var val = 3
var length = nums.length
var removeElement = function (nums, val) {
    //percorre o array de trás pra frente
    for (i = length - 1; i >= 0; i--) {
        if (nums[i] == val) {
            //move valores pra esquerda onde houver o número a ser deletado
            for (j = i; j < length; j++)nums[j] = nums[j + 1]
        }
    }
    //substitui undefigneds por '_'
    for (k = length; k > 0; k--) {
        if (nums[k] == undefined) {
            nums[k] = '_'
        }
    }
    //retira os valores extras
    for(i=nums.length;i>length;i--){
        if(i>length) nums.pop()
    }

    var size=0
    for(i=0;i<nums.length;i++){
        if(nums[i]!='_'){
            size++;
        }
    }
    console.log(nums+ " "+ size)
};
removeElement(nums, val)