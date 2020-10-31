
// https://open.kattis.com/problems/cold
function main(n, list) {
	var result= 0
	for (let i = 0; i < n; i++) {
		if(list[i] < 0){
			result += 1
			
		}
		
	}
console.log(result)
	
}

if (typeof process === 'object') { // running on node.js
	var tokens = [];
	require('readline').createInterface({input: process.stdin, output: process.stdout}).on('line', (line) => {
		tokens = tokens.concat(line.split(' ').filter((a) => !!a)).map((a) => parseInt(a));
		if (tokens.length >= tokens[0] + 1) main(tokens[0], tokens.slice(1));
	});
} else {	// running on browser
	main(5, [-14, -5, -39, -5, -7]);
}
