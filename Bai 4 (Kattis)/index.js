t
// htps://open.kattis.com/problems/timeloop
function main(N) {
	for (let i = 1 ; i <= N; i++) {
		console.log(i + ' Abracadabra');
		
	}
	
	
}

// running on node.js
if (typeof process === 'object') {
	require('readline').createInterface({input: process.stdin, output: process.stdout}).on('line', (line) => {
		main(parseInt(line));
	});
} else {	// running on browser
	main(10);
}
