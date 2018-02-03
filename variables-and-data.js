/*
 *  Variables, Data Types, and Typing
 */

let wordData;

wordData = "Word list";

console.log(wordData);

let subTotal = 100;
let tax = subTotal * 0.07;
let totalWithTax = tax + subTotal;

let obj = {
	key1: "value",
	key2: 4,
	boolean: true,
	obj2: {
		obj2Key1: "value of inner object",
	}
};

console.log(obj.obj2.obj2Key1);


/*
 *  Statically typed JS declares the variable type then the value
 *  much like compiled languages such as C.
 *  *** JS in Unity 3D has to be typed this way ***
 */

/*let variable : string = "string";*/

/*
 *  Strong vs. Weak typing
 *  Strong = two values of different types are NOT converted to same type
 *  Weak = two values of different types are converted to same type by the lang
 *  JS is a weakly typed language
 */

let var1 = "2";
let var2 = 5;
let result = var1 + var2;

console.log(result);

/*
 * Operators
 */

/* Concatenation*/
let add = 1 + 2;

/* Subtraction */
let sub = 2 -1;

/* Multiplication */
let mult = 2*4;

/* Forward Slash */
let division = 4 / 2;

/* Modulo */
let mod = 5 % 2;

let string = "String 1  " + "String 2";

console.log(string);







