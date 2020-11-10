
// https://open.kattis.com/problems/trik
function main(moves) {
	result = 1
	for (let i = 0; i < moves.length; i++) {
		switch (result) {
			case 1:
				if (result == 1) {

					if (moves[i] == 'A') {
						result = 2
					}
					if (moves[i] == 'C') {
						result = 3
					}
				}
				break;
			case 2:
				if (result == 2) {
					if (moves[i] == 'A') {
						result = 1
					}
					if (moves[i] == 'B') {
						result = 3
					}
				}
				break;
			case 3:
				if (result = 3) {
					if (moves[i] == 'B') {
						result = 2
					}
					if (moves[i] == 'C') {
						result = 1
					}
				}
				break;
		}


	}
	console.log(result)
}



if (typeof process === 'object') { // running on node.js
	var tokens = [];
	require('readline').createInterface({ input: process.stdin, output: process.stdout }).on('line', (line) => {
		main(line);
	});
} else {	// running on browser
	main("CBABCACCC");
}
