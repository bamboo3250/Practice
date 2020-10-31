
// https://open.kattis.com/problems/quadrant
function main(x, y) {
	var z = x*y;
	if(z > 0){
		if(x > 0){
			console.log('1')
		}else{console.log('3')}
	}else{
		if(x > 0){
			console.log('4')
		}else{console.log('2')}
	}
}


if (typeof process === 'object') { // running on node.js
	var tokens = [];
	require('readline').createInterface({input: process.stdin, output: process.stdout}).on('line', (line) => {
		tokens = tokens.concat(line.split(' ').filter((a) => !!a)).map((a) => parseInt(a));
		if (tokens.length == 2) main(tokens[0], tokens[1]);
	});
} else {	// running on browser
	main(9, -13);
}
