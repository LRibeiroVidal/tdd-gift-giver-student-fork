const { BadRequestError } = require("../utils/errors.js");

function getRandomInt(top) {
	return Math.floor(Math.random() * (top + 1));
}
function shuffle(array) {
	//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}
class GiftExchange {
	static pairs(names) {
		if (names.length % 2 == 1)
			throw new BadRequestError("Number of names cannot be odd");
		var tuples = [];
		var originalSize = names.length;
		for (let i = 0; i < originalSize / 2; i++) {
			let idxOne = getRandomInt(names.length - 1);
			let nameOne = names[idxOne];
			names.splice(idxOne, 1);

			let idxTwo = getRandomInt(names.length - 1);
			let nameTwo = names[idxTwo];
			names.splice(idxTwo, 1);

			tuples.push([nameOne, nameTwo]);
		}

		return tuples;
	}

	static traditional(names) {
		let shuffledNames = shuffle(names);
		console.log("out");

		let response = [];

		for (let i = 0; i < names.length; i++) {
			if (i == names.length - 1) {
				response.push(
					`${shuffledNames[i]} is giving a gift to ${shuffledNames[0]}`
				);
				break;
			}

			response.push(
				`${shuffledNames[i]} is giving a gift to ${shuffledNames[i + 1]}`
			);
		}

		return response;
	}
}

module.exports = GiftExchange;
