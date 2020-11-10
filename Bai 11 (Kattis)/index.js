
// https://open.kattis.com/problems/spavanac
function main(H, M) {

	var M1 = M - 45
	
	if (M1 < 0) {
		var M2 = 45 - M
		H -= 1
		M1 = 60 - M2
		if(H < 0){
			var H1 = 24
			H1 += H
			console.log(H1, M1)
		}else{console.log(H, M1)}
		
	} else {
		console.log(H, M1)
	}
}


if (typeof process === 'object') { // running on node.js
	var tokens = [];
	require('readline').createInterface({ input: process.stdin, output: process.stdout }).on('line', (line) => {
		tokens = tokens.concat(line.split(' ').filter((a) => !!a)).map((a) => parseInt(a));
		if (tokens.length > 1) main(tokens[0], tokens[1]);
	});
} else {	// running on browser
	main(10, 10);
}
