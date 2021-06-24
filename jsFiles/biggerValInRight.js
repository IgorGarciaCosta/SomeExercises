var arr = [17, 18, 5, 4, 6, 1]


var replaceElements = function (arr) {
    var biggerValue = arr[arr.length - 1];
    arr[arr.length - 1] = -1

    for (i = arr.length - 2; i >= 0; i--) {
        var exPosValue = arr[i]
        arr[i] = biggerValue

        if(biggerValue<exPosValue) biggerValue = exPosValue
    }
    console.log(arr)
};
replaceElements(arr);