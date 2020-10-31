function findOppositeNumber(n, inputNumber) {
	var result = 0;
	var i = inputNumber
	
	if (i < n / 2) {
			result = i + n / 2
			console.log(result)
	} else {	
			result = i - n / 2
			console.log(result)
	}
	return result;
}

console.log(`findOppositeNumber(6, 2) = ${findOppositeNumber(6, 2)}`);
console.log(`findOppositeNumber(6, 4) = ${findOppositeNumber(6, 4)}`);