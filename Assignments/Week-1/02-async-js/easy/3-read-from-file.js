const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
	if (err) {
		console.error('Error reading file:', err.message);
		return;
	}
	console.log('File contents:', data);
});

// Expensive operation
// Synchronous, so it will be completed before the contents of the
// file could be printed even though those contents were ready before
// this synchronous operation was completed.
console.log(sum(10000000000));

function sum(num) {
	let sum = 0;
	for (let i = 1; i <= num; i++) {
		sum += i;
	}
	return sum;
}
