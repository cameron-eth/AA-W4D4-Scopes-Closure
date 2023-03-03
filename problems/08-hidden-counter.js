/***********************************************************************
Write a function named `hiddenCounter()`. This function will do two things - first
it will define a count variable, then it will return a function.
When invoked the function returned by hiddenCounter will increment the counter by 1.

Look below to see how this function is invoked:

let hidden1 = hiddenCounter(); //returns a function
hidden1(); // returns 1
hidden1(); // returns 2

let hidden2 = hiddenCounter(); // returns a function
hidden2(); // returns 1


***********************************************************************/
/* 
we set count to 0
return a func that increments and returns the count
(see console log for rest)
*/

let hiddenCounter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  }
}

/* we invoke the function in this way to assure we are counting each itteration. In order to do so we declare a var that will console.log our func multiple times
each console log should increment the count */

let hidden1 = hiddenCounter(); //returns a function
console.log(hidden1()); // outputs 1
console.log(hidden1()); // outputs 2
console.log(hidden1()); // outputs 3
console.log(hidden1()); // outputs 4
console.log(hidden1()); // outputs 5





/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = hiddenCounter;
} catch (e) {
  // catch the ref err
  module.exports = null;
}