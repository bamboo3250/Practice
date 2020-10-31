
// https://open.kattis.com/problems/autori
function main(input) {
	var str1 = input.split("-");

	var str2 = ""
	var str4 = ""
	for (let i = 0; i < str1.length; i++) {
		var str2 = str1[i].split("")
		var str3 = str2[0]
		var result = ""
		str4 += str3
	}
	console.log(str4)
	


}

if (typeof process === 'object') { // running on node.js
	var tokens = [];
	require('readline').createInterface({ input: process.stdin, output: process.stdout }).on('line', (line) => {
		main(line);
	});
} else {	// running on browser
	main('Knuth-Morris-Pratt');
}
