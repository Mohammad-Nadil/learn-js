// 01 variables and types of variables
{
  // there are 3 types of variables in javascript
  var a = 10; // function-scoped
  let b = 20; // local variable
  const c = 30; // constant variable
}

// 02 primitive data types
{
  // nn bb ss u ( its used for quick memorize and remember)
  let a = 10; // number
  let e = null; // null
  let c = true; // boolean
  let d = BigInt(10); // Bigint
  let f = "10"; // string
  let g = Symbol(); // symbol
  let h = undefined; // undefined
}

//03  non primitive data types
{
  let obj = {
    Number: 10,
    EmptyValue: null,
    Boolean: true,
    bitInteger: BigInt(10),
    String: "10",
    Symbol: Symbol(),
    undefined: undefined,
  }; // object
  let arr = [10, null, true, BigInt(10), "10", Symbol(), undefined]; // array
}

//04  Arithmetic Operators
{
  // + (addition operator)
  // - (subtraction operator)
  // * (multiplication operator)
  // / (division operator)
  // % (modulus operator) { remainder of the division }
  // ** (exponentiation operator){ short for power of }
  // ++ (increment operator)
  // -- (decrement operator)

  let a = 10;
  let b = 20;
  console.log(a + b); // 30
  console.log(a - b); // -10
  console.log(a * b); // 200
  console.log(a / b); // 0.5
  console.log(a % b); // 10
  console.log(a ** b); // 100000000000000000000
  console.log(a++); // 10 (this shows the value before increment)
  console.log(++a); // 11 (this shows the value after increment)
  console.log(a); // 12
}

//05 Assignment Operators
{
  // = (assignment operator)
  // += (addition assignment operator)
  // -= (subtraction assignment operator)
  // *= (multiplication assignment operator)
  // /= (division assignment operator)
  let assignment = 1;

  assignment += 5; // same as assignment = assignment + 5
  console.log("a is now = ", assignment); // a is now = 6

  assignment -= 5; // same as assignment = assignment - 5
  console.log("a is now = ", assignment); // a is now = 1

  assignment *= 5; // same as assignment = assignment * 5
  console.log("a is now = ", assignment); // a is now = 5

  assignment /= 5; // same as assignment = assignment / 5
  console.log("a is now = ", assignment); // a is now = 1
}

// 06 Comparison Operators
{
  // == (equality operator)
  // != (inequality operator)
  // === (strict equality operator)
  // !== (strict inequality operator)
  // > (greater than operator)
  // < (less than operator)
  // >= (greater than or equal to operator)
  // <= (less than or equal to operator)
  let a = 10;
  let b = 20;
  console.log(a == b); // false
  console.log(a != b); // true
  console.log(a === b); // false
  console.log(a !== b); // true
  console.log(a > b); // false
  console.log(a < b); // true
  console.log(a >= b); // false
  console.log(a <= b); // true
}

// 07 Logical Operators
{
  // && (and operator)
  // || (or operator)
  // ! (not operator)
  let a = true;
  let b = false;
  console.log(a && b); // false
  console.log(a || b); // true
  console.log(!a); // false
}

// 08 Conditional Operators & statement & ternary operator
{
  // ? (conditional operator)
  let a = true;
  let b = false;
  console.log(a ? "true" : "false"); // true
  console.log(b ? "true" : "false"); // false

  // conditional statement
  if (a) {
    console.log("true");
  } else if (b) {
    console.log("false");
  } else {
    console.log("false");
  }

  // ternary operator
  let age = 10;
  console.log("You can", age < 18 ? "not drive" : "drive");
}

// 09 prompts and alerts
{
  // prompt("enter a number");
  // alert("hello world");
  prompt("enter a number");
  alert("hello world");

  let a = prompt("Hey whats you age?");
  a = Number.parseInt(a); // Converting the string to a number
  if (a < 0) {
    alert("This is an invalid age");
  } else if (a < 9) {
    alert("You are a kid and you cannot even think of driving");
  } else if (a < 18 && a >= 9) {
    alert("You are a kid and you can think of driving after 18");
  } else {
    alert("You can now drive as you are above 18");
  }
  console.log("Done");
}

// 10 switch statement
{
  let a = 10;
  switch (a) {
    case 10:
      console.log("a is 10");
      break;
    case 20:
      console.log("a is 20");
      break;
    default:
      console.log("a is not 10 or 20");
  }

  const expr = "Papayas";
  switch (expr) {
    case "Oranges":
      console.log("Oranges are $0.59 a pound.");
      break;
    case "Mangoes":
    case "Papayas":
      console.log("Mangoes and papayas are $2.79 a pound.");
      // Expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }
}

// 11 loops
{
  // there are 5 types of loops in javascript
  // 1. for loop (commonly used when the number of iterations is known)
  // 2. for in loop (commonly used with objects to iterate over keys)
  // 3. for of loop (commonly used with arrays or iterable objects to iterate over values)
  // 4. while loop (commonly used when the number of iterations is unknown, but a condition is checked before each iteration)
  // 5. do while loop (variation of while loop, guarantees at least one iteration)

  // 1. for loop
  for (let i = 0; i < 10; i++) {
    console.log(i); // Prints 0 to 9
  }

  // 2. while loop
  let a = 5;
  while (a > 0) {
    console.log(a); // Prints 5 to 1
    a--;
  }

  // 3. do while loop
  let b = 5;
  do {
    console.log(b); // Prints 5 to 1
    b--;
  } while (b > 0);

  // 4. for in loop (used to iterate over object properties)
  let obj = {
    name: "John",
    age: 30,
    city: "New York",
  };
  for (let key in obj) {
    console.log(obj[key]); // Prints "John", 30, "New York"
  }

  // 5. for of loop (used to iterate over iterable objects like arrays)
  let arr = [1, 2, 3, 4, 5];
  for (let value of arr) {
    console.log(value); // Prints 1, 2, 3, 4, 5
  }
}

// 12 Functions
{
  // Functions in JavaScript can be categorized into the following types:
  // 1. Function Declaration
  // 2. Function Expression
  // 3. Arrow Function
  // 4. Anonymous Function

  // 1. Function Declaration
  function add(a, b) {
    return a + b;
  }
  console.log(add(10, 20)); // Output: 30

  // 2. Function Expression
  const plus = function (a, b) {
    return a + b;
  };
  console.log(plus(10, 20)); // Output: 30

  // 3. Arrow Function
  const ad = (a, b) => a + b; // Simplified return for single-line arrow function
  console.log(ad(10, 20)); // Output: 30

  // 4. Anonymous Function
  const anonymousFunc = function (x) {
    return x * 2;
  };
  console.log(anonymousFunc(10)); // Output: 20

  // Note: The term "anonymous function" refers to functions that do not have a name.
  // These are typically used as arguments to higher-order functions or assigned to variables.
}

//13 string
{
  // Strings in JavaScript can be represented using three different delimiters:
  // 1. Single quotes
  // 2. Double quotes
  // 3. Backticks (Template Literals)

  // 1. Single quotes
  let name = "John";
  let age = 30;
  let message =
    "Hello, my name is " + name + " and I am " + age + " years old.";
  console.log(message); // Hello, my name is John and I am 30 years old.

  // 2. Double quotes
  let name2 = "John";
  let age2 = 30;
  let message2 =
    "Hello, my name is " + name2 + " and I am " + age2 + " years old.";
  console.log(message2); // Hello, my name is John and I am 30 years old.

  // 3. Backticks (Template Literals)
  // Backticks allow multiline strings and interpolation.
  let name3 = `John`;
  let age3 = 30;
  let message3 = `Hello, my name is ${name3} and I am ${age3} years old.`;
  console.log(message3); // Hello, my name is John and I am 30 years old.

  // Note: String interpolation is a feature of template literals (backticks), not a separate type of string.
}

// 14 string methods
{
  let str = "Hello, World!";
  console.log(str.length); // 13
  console.log(str.toUpperCase()); // HELLO, WORLD!
  console.log(str.toLowerCase()); // hello, world!
  console.log(str.indexOf("World")); // 6
  console.log(str.lastIndexOf("World")); // 6
  console.log(str.charAt(0)); // H
  console.log(str.slice(0, 5)); // Hello
  console.log(str.slice(6)); // World!
  console.log(str.replace("World", "Universe")); // Hello, Universe!
  console.log(str.split(",")); // ["Hello", " World!"]
  console.log(str.trim()); // Hello, World!
  console.log(str.includes("World")); // true
  console.log(str.startsWith("Hello")); // true
  console.log(str.endsWith("!")); // true
  console.log(typeof str); // string
}

// 15 arrays and methods
{
  let arr = [1, 2, 3, 4, 5];
  console.log(arr.length); // 5
  console.log(arr[0]); // 1
  console.log(arr[2]); // 3 (shows the element at the specified index)

  // difference between slice and splice
  // slice returns a new array, splice modifies the original array
  // slice starts from the beginning and ends at the end
  // splice starts from the beginning and removes the specified number of elements
  console.log(arr.slice(1, 4)); // [2, 3, 4] (start index, end index)
  console.log(arr.splice(1, 3)); // [2, 3, 4] (start index, number of elements to remove)
  console.log(arr.splice(1)); // [2, 3, 4, 5] (removes elements from index 1 to the end)

  // splice removes and also adds elements
  console.log(arr.splice(1, 3, 6, 7)); // [2, 3, 4] (start index, number of elements to remove, elements to add)
  console.log(arr); // [1, 6, 7, 5]

  console.log((arr[7] = 7)); // (not recommended)
  console.log(arr.push(6)); // 6 (adds the element to the end)
  console.log(arr.pop()); // 6 (removes the last element)

  console.log(arr.unshift(0)); // 0 (adds the element to the beginning)
  console.log(arr.shift()); // 0 (removes the first element)

  // concat returns a new array
  console.log(arr.concat([7, 8, 9])); // [1, 6, 7, 5, 7, 8, 9]
  console.log(arr.includes(3)); // false (3 was removed by splice earlier)
  console.log(arr.indexOf(3)); // -1 (3 is no longer in the array)

  // sort sorts elements as strings by default, which may not work correctly for numbers
  console.log(arr.sort()); // [1, 5, 6, 7] (sorted as strings)

  let compare = (a, b) => {
    return a - b; // numerical sort
  };
  console.log(arr.sort(compare)); // [1, 5, 6, 7] (sorted numerically)
  console.log(arr.reverse()); // [7, 6, 5, 1]

  console.log(arr.join("-")); // "7-6-5-1"
  console.log(arr.toString()); // "7,6,5,1"
  console.log(typeof arr); // object
}

// 16 using loops with arrays
{
  let num = [1, 2, 3, 4, 5, 7, 8, 9];
  let obj = { name: "John", age: 30, city: "New York" };

  // 1. for loop (iterates over arrays using indexes)
  for (let i = 0; i < num.length; i++) {
    console.log(num[i] * 2); // 2, 4, 6, 8, 10, 14, 16, 18
  }

  // 2. forEach loop (executes a function for each array element)
  num.forEach((element) => {
    console.log(element * 2); // 2, 4, 6, 8, 10, 14, 16, 18
  });

  // 3. Array.from (creates a new array from an iterable)
  let str = "Hello World!";
  let arr = Array.from(str);
  console.log(arr); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", "!"]

  // 4. Array.of (creates a new array from a list of values)
  let arr2 = Array.of(1, 2, 3, 4, 5);
  console.log(arr2); // [1, 2, 3, 4, 5]

  // 5. for of loop (iterates over values of an iterable object)
  for (let value of num) {
    console.log(value); // 1, 2, 3, 4, 5, 7, 8, 9
  }

  // 6. for in loop (iterates over keys of an object)
  for (let key in obj) {
    console.log(obj[key]); // John, 30, New York
  }

  // Difference between forIn and forOf loop:
  // forIn iterates over the keys of an object (or indices in an array)
  // forOf iterates over the values of an iterable object (like arrays or strings)
}

// 17 map, filter and reduce
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let obj = {
    name: "John",
    age: 30,
    city: "New York",
    salary: 5000,
    occupation: "Engineer",
  };

  // 1. map (creates a new array by applying a function to each element)
  // Using Object.values to iterate over values of the object
  Object.values(obj).map((element, index) => console.log(element, index)); // John 0, 30 1, New York 2, etc.

  // 2. filter (creates a new array with elements that pass a test)
  let filteredArr = arr.filter((element) => element >= 5 && element <= 8);
  console.log(filteredArr); // [5, 6, 7, 8]

  // 3. filter + map (creates a new array by applying a function to each element that passes a test)
  let filteredMappedArr = arr
    .filter((element) => element >= 5 && element <= 8)
    .map((element) => element * 2);
  console.log(filteredMappedArr); // [10, 12, 14, 16]

  // 4. reduce (reduces an array to a single value)
  // reduce iterates over the array and combines all elements into a single value (e.g., sum, product)
  let sum = arr.reduce((a, b) => {
    return a + b; // Add each element (b) to the accumulator (a)
  }, 0); // 0 is the initial value of the accumulator
  console.log(sum); // 45
}



