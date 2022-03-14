function countdown(num) {
    let countdownStart = '';
    if (num <= 0){
        return countdownStart + 'Jumpoff!';
    } else {
        countdownStart += `${num}, `;
    }
    return countdownStart += countdown(num - 1);
}

// countdown(10);

module.exports = countdown
function countdown(n){
	if(n <= 0){
		return 'Liftoff!'
	} else {
		return `${n}, ` + countdown(n-1)
	}


}



module.exports = countdown
