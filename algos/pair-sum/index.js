function pairSum(array, sum){
	// Complete the function!
	
	let size = array.length;
	for(let i= 0; i < size; i++){
		for (let n = i; n < size; n++){
			//console.log(`Sum: ${array[i]}+${array[n]}:`, array[i] + array[n]);
			if(sum == (array[i] + array[n]) && array[i] != array[n]){ return true; }
		}
	}
	return false;
}

module.exports = pairSum




