
// https://open.kattis.com/problems/spavanac
function main(H, M) {
	
}

if (typeof process === 'object') { // running on node.js
	var tokens = [];
	require('readline').createInterface({input: process.stdin, output: process.stdout}).on('line', (line) => {
		tokens = tokens.concat(line.split(' ').filter((a) => !!a)).map((a) => parseInt(a));
		if (tokens.length > 1) main(tokens[0], tokens[1]);		
	});
} else {	// running on browser
	main(23, 40);
}
