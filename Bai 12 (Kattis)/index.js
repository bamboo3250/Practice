
// https://open.kattis.com/problems/sibice
function main(N, W, H, matches) {
	
	var D = Math.sqrt((W * W) + (H * H))
	for (let i = 0; i < matches.length; i++) {
			if(matches[i] <= D){
				console.log('DA')
			}else{ 
				console.log('NE')
			}
		
	}

}

if (typeof process === 'object') { // running on node.js
	var tokens = [];
	require('readline').createInterface({input: process.stdin, output: process.stdout}).on('line', (line) => {
		tokens = tokens.concat(line.split(' ').filter((a) => !!a)).map((a) => parseInt(a));
		if (tokens.length > 0 && tokens.length >= tokens[0] + 3) main(tokens[0], tokens[1], tokens[2], tokens.slice(3));
	});
} else {	// running on browser
	main(5, 3, 4, [3, 4, 5, 6, 7]);
}
