
// https://open.kattis.com/problems/trik
function main(moves) {
	
}

if (typeof process === 'object') { // running on node.js
	var tokens = [];
	require('readline').createInterface({input: process.stdin, output: process.stdout}).on('line', (line) => {
		main(line);
	});
} else {	// running on browser
	main("AB");
}