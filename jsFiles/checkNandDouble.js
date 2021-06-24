//confere se há algum valor e seu dobro dentro do array
var arr=[7,1,14,11]

var checkIfExist = function(arr) {
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i] << 1) || set.has(arr[i] / 2)) return true;
        set.add(arr[i]);
    }
    return false;
};

console.log(checkIfExist(arr))