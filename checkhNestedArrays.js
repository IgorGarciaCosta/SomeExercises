//checa se o array 1 está inserido no array 2

function canNest(arr1, arr2) {
	//pego os máx e min
	var minArr1 = Math.min(...arr1);
	var maxArr1 = Math.max(...arr1);
	
	var minArr2 = Math.min(...arr2);
	var maxArr2 = Math.max(...arr2);
	
	if(minArr2<minArr1){
		if(maxArr2>maxArr1) return true;
		return false;
	}
	return false;
	
	
}