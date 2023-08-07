function counter() {
	function helper() {
		setTimeout(() => {
			count += 1;
			console.log(count);
			helper();
		}, 1000);
	}

	let count = 0;
	helper();
}

counter();
