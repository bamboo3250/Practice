
// https://open.kattis.com/problems/oddities
function main(n, list) {
	for (let i = 0; i < list.length; i++) {
		if(list[i] % 2 == 0){
			console.log(list[i] + ' is even')
		}else{
			console.log(list[i] + ' is odd')
		}
		
	}

}

if (typeof process === 'object') { // running on node.js
	var tokens = [];
	require('readline').createInterface({input: process.stdin, output: process.stdout}).on('line', (line) => {
		tokens = tokens.concat(line.split(' ').filter((a) => !!a)).map((a) => parseInt(a));
		if (tokens.length >= tokens[0] + 1) main(tokens[0], tokens.slice(1));
	});
} else {	// running on browser
	main(3, [10, 9, -5]);
}
