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
