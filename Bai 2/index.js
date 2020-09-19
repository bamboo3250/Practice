{
	// Cho 2 số a và b. In ra số lớn hơn 
	let a = 10;
	let b = 10;

	var result = "";
	if (a > b) {
		result = a
	}
	if (b > a) {
		result = b
	} if (a == b) {
		result = a
	}
	// gán số lớn hơn vào result


	console.log(`số lớn hơn giữa ${a} và ${b} là ${result}`);	// in ra số lớn hơn
}

{
	// Cho dãy số nguyên. In ra số lớn nhất trong dãy số.
	let list = [3, 2, 4, 5];

	var result = 0;
	for (let i = 0; i < list.length; i++) {
		if (result < list[i]) {
			result = list[i]
		}
		console.log(result)
		console.log(list[i])

	}
	// gán số lớn nhất vào result

	console.log(`số lớn hơn trong dãy số ${list} là ${result}`);	// in ra số nhỏ nhất
}

{
	// Cho 2 số a và b. In ra số nhỏ hơn 
	let a = 3;
	let b = 3;

	var result = 0;

	if (a < b) {
		result = a
	} else {
		result = b
	}

	// gán số nhỏ hơn vào result

	console.log(`số nhỏ hơn giữa ${a} và ${b} là ${result}`);	// in ra số nhỏ hơn
}

{
	// Cho dãy số nguyên. In ra số nhỏ nhất trong dãy số.
	let list = [3, 2, 4, 5];

	var result = "";
	// gán số nhỏ nhất vào result
	for (let i = 0; i < list.length; i++) {
		if (result < list[i]) {
			result = list[i]
			
		}


	}

	console.log(`số nhỏ hơn trong dãy số ${list} là ${result}`);	// in ra số nhỏ nhất
}


