/*
 * Objects, Interfaces, and APIs
 */

let dog = {
	name: "Steve",
	color: "brown",
	breed: "pug",
	size: "small",
	bark: function(typeOfBark) {
		console.log("Bark!");
	},
};

dog.bark();

function x(y) {
	y.num = y.num + 5;
	console.log(y);
}

let y = {
	name: "Tom",
	num: 10,
};

x(y);
console.log(y);

//Objects in JS are passed in by reference!

