/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.

Examples:

arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/
/* 
utlizing reduce method to declare three and 'sum' two variables within the func. once summed it returns the value of all indexs summed
we return sum / array length to obtain average (see MDN array reduce)
see MDN reduce for directions on using the method
*/
// Your code here
let arrowAvgValue = (array) => {
  if(array.length === 0) {
    return 0;
  }
  const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue)
  return sum / array.length;
}


console.log(arrowAvgValue([2, 3, 7])) // => 4
console.log(arrowAvgValue([2, 5, 7])) // => 4.666666667
console.log(arrowAvgValue([21, 52, 72])) // => 48.3333






/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowAvgValue;
} catch (e) {
  module.exports = null;
}