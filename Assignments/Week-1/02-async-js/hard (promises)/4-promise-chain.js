/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
	return new Promise((resolve) => {
		setTimeout(resolve, 1000);
	});
}

function waitTwoSecond() {
	return new Promise((resolve) => {
		setTimeout(resolve, 2000);
	});
}

function waitThreeSecond() {
	return new Promise((resolve) => {
		setTimeout(resolve, 3000);
	});
}

async function calculateTime() {
	const startTime = Date.now();
	// waitOneSecond()
	// 	.then(() => {
	// 		waitTwoSecond()
	// 			.then(() => {
	// 				waitThreeSecond()
	// 					.then(() => {
	// 						const endTime = Date.now();
	// 						const secondsTaken = (endTime - startTime) / 1000;
	// 						console.log('Total time taken:', secondsTaken);
	// 					})
	// 					.catch((err) => {
	// 						console.error('Error occured:', err.message);
	// 					});
	// 			})
	// 			.catch((err) => {
	// 				console.error('Error occured:', err.message);
	// 			});
	// 	})
	// 	.catch((err) => {
	// 		console.error('Error occured:', err.message);
	// 	});

	// A better way to do the above thing
	try {
		await waitOneSecond();
		await waitTwoSecond();
		await waitThreeSecond();

		const endTime = Date.now();
		const secondsTaken = (endTime - startTime) / 1000;
		console.log('Total time taken:', secondsTaken);
	} catch (error) {
		console.error('Error occured:', error.message);
	}
}

calculateTime();
