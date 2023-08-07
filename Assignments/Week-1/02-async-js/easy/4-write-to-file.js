const fs = require('fs');

// overwrite the file.txt with content
const content = 'Writing this to the file...';
fs.writeFile('file.txt', content, (err) => {
	if (err) {
		console.error('Error writing file:', err.message);
		return;
	}
	console.log('File has been writeen successfully.');
});

// append content to the end of file.txt
appendToFile('file.txt');

function appendToFile(filename) {
	fs.readFile(filename, 'utf8', (err, data) => {
		if (err) {
			console.error('Error reading file:', err.message);
			return;
		}

		const newContent = data + ' Hello, World!';
		fs.writeFile(filename, newContent, (err) => {
			if (err) {
				console.error('Error writing to the file:', err.message);
				return;
			}
			console.log('File written successfully.');
		});
	});
}
