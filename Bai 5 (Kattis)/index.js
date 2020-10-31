
// https://open.kattis.com/problems/r2
function main(R1, S) {
	var R2 = (S * 2) - R1
	console.log(R2)
}

if (typeof process === 'object') { // running on node.js
	var tokens = [];
	require('readline').createInterface({input: process.stdin, output: process.stdout}).on('line', (line) => {
		tokens = tokens.concat(line.split(' ').filter((a) => !!a));
		main(parseInt(tokens[0]), parseInt(tokens[1]));
	});
} else {	// running on browser
	main(4, 3);
}
