/**
 * @param {number[]} arr
 * @return {boolean}
 */

var arr = [0,1,2,3,4,5,6,7,8,9]

console.log(validMountainArray(arr))

function validMountainArray(arr) {

    var biggerIndex = 0
    if (arr.length > 1) {
        if (arr[1] < arr[0]) return false

        //obtém maior val do array
        for (i = 0; i < arr.length; i++) {
            if (arr[i] < arr[i + 1]) biggerIndex = i + 1
        }
        //confere se vai subindo até o index do maior valor
        for (i = 0; i <= biggerIndex; i++) {
            if (arr[i] <= arr[i - 1]) {
                return false
            }
        }
        
        //se o array só subir
        if(biggerIndex==arr.length-1) return false
        
        //confere se vai descendo ate o final
        for (i = biggerIndex; i < arr.length; i++) {
            if (arr[i] <= arr[i + 1]) {
                return false
            }
        }
        return true

    }
    return false
};