console.log("Hello World!\n==========\n");

// Exercise 1 Section

function printOdds(count) {
  for (i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
      console.log(i);
    } else {
      console.log("This number is even");
    }
  }
}

printOdds();

// Exercise 2 Section
function checkAge(userName, age) {
  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
  if (age >= 16) {
    console.log(aboveSixteen);
  } else {
    console.log(belowSixteen);
  }
}

checkAge("Graham", 14);

//Exercise 3 Section
function whichQuadrant(x, y) {
  if (x == 0 && y == 0) {
    console.log(`The point ${x},${y} is located on the origin`);
  } else if (x == 0) {
    console.log(`The point ${x},${y} is located on the Y-axis.`);
  } else if (y == 0) {
    console.log(`The point ${x},${y} is located on the X-axis.`);
  } else if (x > 0 && y > 0) {
    console.log(`The point ${x},${y} is located in quadrant 1.`);
  } else if (x < 0 && y > 0) {
    console.log(`The point ${x},${y} is located in quadrant 2.`);
  } else if (x < 0 && y < 0) {
    console.log(`The point ${x},${y} is located in quadrant 3.`);
  } else {
    console.log(`The point ${x},${y} is located in quadrant 4.`);
  }
}

whichQuadrant(0, 0);

//Exercise 4 Section
function typeOfTriangle(a, b, c) {
  if (a + b <= c || b + c <= a || c + a <= b) {
    console.log("This is an invalid triangle.");
  } else if (a == b && a == c && b == c) {
    console.log("This is an equilateral triangle.");
  } else if (a == b || a == c || b == c) {
    console.log("This is an isosceles Triangle.");
  } else if (a != b && a != c && b != c) {
    console.log("This is a scalene Triangle.");
  }
}

typeOfTriangle(3, 6, 8);
