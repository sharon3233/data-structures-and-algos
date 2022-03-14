function countdown(n){
	if(n <= 0){
		return 'Liftoff!'
	} else {
		return `${n}, ` + countdown(n-1)
	}


}

// function countdown(n){
// 	let str = '';
// 	for(let i = n; i > 0; i--){
// 		str += `${i}, `
// 	}
// 	str += 'Liftoff!'
// 	return str
// }

module.exports = countdown