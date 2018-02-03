/*
 *  Conditionals, Functions, Scope, and Loops.
 */

//Equals
let equals = 1 === 1;

//Greater than
let greaterThan = 5 > 1;

//Less Than
let lessThan = 2 < 10;

//Greater Than or Equal to
let greaterThanEq = 5>= 5;

//Less Than  or Equal to
let lessThanEq = 4 <= 9;

// Not Equal
let notEqual = 5 !== 2;

let storeA = 3.10;
let storeB = 4.40;


function compareStorePrices(storeA, storeB) {
	let storeAIsLower = storeA < storeB;
	if (storeAIsLower) {
		console.log("Store A has a lower price. ")
	} else if ( storeB < storeA) {
		console.log("Store B has a lower price. ")
	} else {
		console.log("Their prices are equal. ")
	}
}

compareStorePrices(10, 5);

function squareNum(number) {
	return number * number;
}

let squaredNumber = squareNum(4);
console.log(squaredNumber);

let x = 10;
 function addNumbers(n, m, x) {
	 console.log(x);
	 let b;
	 if ( 1 === 1) {
	 	b = 8;
	 }
	 console.log(b);
	 return n + m;
 }

 addNumbers(1, 2, 10);

 //              0  1  2  3  4
 let ourArray = [1, 2, 3, 4, 5];
 console.log(ourArray[0]);


 arrLen = ourArray.length;
 // 3 elements of for loop are:
 //    (counter; comparison, incrementer)
 for (let i = 0; i<arrLen.length; i++) {
 	//console.log("i is equal to: " + i);
	 console.log(ourArray[i]);
 }

 let x=0;
 while (x < 10 ) {
 	console.log('Ran');
 	x = x + 1;
 }









