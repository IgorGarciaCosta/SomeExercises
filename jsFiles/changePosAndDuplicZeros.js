// Duplica todos os 0's do array e 
// realoca todos os valores após eles

var arr = [0, 2, 0, 5, 6 ,0, 3, 0, 2]

var duplicateZeros = function(arr) {
    
    var indexesComZero=[]
    var aux=0
    var tamanhoInicial = arr.length
    
    //obter lista com os indexes de arr que tem 0
    for(i=0;i<arr.length;i++){
        if(arr[i]==0){
            indexesComZero[aux] = i
            aux++
        }
    }

    for(j=indexesComZero.length-1;j>=0;j--){
        for(k=arr.length;k>=indexesComZero[j];k--){
            if(k<arr.length-1)arr[k+1] = arr[k]
        }
    }
    
   
    console.log(arr)
};

duplicateZeros(arr)