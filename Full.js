// 01 variables and types of variables
{
  var a = 10; // global variable
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
  let = "10"; // string
  let = Symbol(); // symbol
  let = undefined; // undefined
}

//03  non primitive data types
{
  let = {
    Number: 10,
    EmptyValue: null,
    Boolean: true,
    bitInteger: BigInt(10),
    String: "10",
    Symbol: Symbol(),
    undefined: undefined,
  }; // object
  let = [10, null, true, BigInt(10), "10", Symbol(), undefined]; // array
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
  console.log(a++); // 10
  console.log(a); // 11
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
  console.log("a is now = ", a); // a is now = 6

  assignment -= 5; // same as assignment = assignment - 5
  console.log("a is now = ", a); // a is now = 1

  assignment *= 5; // same as assignment = assignment * 5
  console.log("a is now = ", a); // a is now = 5

  assignment /= 5; // same as assignment = assignment / 5
  console.log("a is now = ", a); // a is now = 1
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

// 08 Conditional Operators & statement
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
  // HomeWork - Explore switch statement and write a basic program in the comments
  console.log("You can", a < 18 ? "not drive" : "drive");
}
