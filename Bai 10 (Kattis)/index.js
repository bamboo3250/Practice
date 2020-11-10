
// https://open.kattis.com/problems/tarifa
function main(X, N, P) {
	var a = 0
	for (let i = 0; i < P.length; i++) {
		var result = X - P[i]
		a += result
		
	}
	X += a
	console.log(X)
}

if (typeof process === 'object') { // running on node.js
	var tokens = [];
	require('readline').createInterface({input: process.stdin, output: process.stdout}).on('line', (line) => {
		tokens = tokens.concat(line.split(' ').filter((a) => !!a)).map((a) => parseInt(a));
		if (tokens.length > 1 && tokens.length >= tokens[1] + 2) main(tokens[0], tokens[1], tokens.slice(2));		
	});
} else {	// running on browser
	main(10, 3, [4, 6, 2]);
}
