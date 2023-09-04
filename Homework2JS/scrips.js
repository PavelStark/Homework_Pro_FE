// ✓ 1.Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).

/* array = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
]; */

/* function countSheep() {
  let x = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == true) {
      x += 1;
    }
  }
  console.log(x);
}

countSheep(); */

/* function countSheep() {
  let x = 0;
  for (elem of array) {
    if (elem == true) {
      x += 1;
    }
  }
  console.log(x);
}

countSheep(); */

// -----------------------------------------------------------------------

// ✓ 2.Make a function that returns the value multiplied by 50 and increased by 6.
// If the value entered is a string it should return "Error".

/* let calc =  function(num){
  if (typeof num === 'string'){
    return "Error"
  }
  else{
       return num * 50 + 6
      }
}

console.log(calc(1)); */

// -----------------------------------------------------------------------

// ✓ 3.Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u) in a given string.

/* function shortcut(arrayWord) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = '';
  for (let elem of arrayWord) {
    if (!vowels.includes(elem)) {
      result += elem;
    }
  }
  return result;
}
console.log(shortcut("Pavel")); */

// -----------------------------------------------------------------------

/* ✓ 4.Write function bmi that calculates body mass index (bmi = weight / height**2 * 10000).

if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese" */

/* function bmi(weight, height) {
  result = (weight / height ** 2) * 10000;

  if (result <= 18.5) {
  return "Underweight"}
  if (result <= 25.0){
  return "Normal"}
  if (result <= 30.0){
  return "Overweight"}
  if (result > 30) {
    return "Obese"}
  
}
console.log(bmi(73, 177)); */

// -----------------------------------------------------------------------

// ✓ 5. This code does not execute properly. Try to figure out why.

/* function multiply(a, b){
  return result = a * b
}

console.log(multiply(3,4)) */

// -----------------------------------------------------------------------

// ✓ 6.Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

/* function boolToWord(bool) {
  if (bool == true) {
    return "yes";
  }
  if (bool == false) {
    return "no";
  }
}

console.log(boolToWord(false)); */

// -----------------------------------------------------------------------

// ✓ 7.Write a program that finds the summation of every number from 1 to num.
// The number will always be a positive integer greater than 0.

/* function summation(num){ 
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i
}
return sum
}

console.log(summation(2)) */

// -----------------------------------------------------------------------

// ✓ 8.I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

/* function arrayPlusArray(arr1, arr2) {
  let sumArr1 = 0;
  let sumArr2 = 0;

  for (let i = 0; i < arr1.length; i++) {
    sumArr1 += arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    sumArr2 += arr2[i];
  }
  return result = sumArr1 + sumArr2
}

console.log(arrayPlusArray([1, 2, 3], [1, 2, 3, 4])); */

// -----------------------------------------------------------------------

// ✓ 9.Our football team has finished the championship.

/* Our team's match results are recorded in a collection of strings. Each match is represented 
by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)

We need to write a function that takes this collection and returns the number of 
points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4 */

/* function teamScore(matchResults) {
  let points = 0;
  let sumPoints = 0;

  for (let i = 0; i < matchResults.length; i++) {
    if (matchResults[i][0] > matchResults[i][2]) {
      points = 3;
    }
    if (matchResults[i][0] == matchResults[i][2]) {
      points = 1;
    }
    if (matchResults[i][0] < matchResults[i][2]) {
      points = 0;
    }

    sumPoints += points;
  }
  return sumPoints;
}

console.log(
  teamScore([
    "3:1",
    "2:3",
    "2:2",
    "0:1",
    "3:1",
    "2:2",
    "0:1",
    "3:1",
    "2:2",
    "0:1",
    "2:2",
  ])
); */

// -----------------------------------------------------------------------

// ✓ 10.Nathan loves cycling.

/* Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink,
rounded to the smallest value.

For example:

time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5 */

/* function litres(time) {
  return Math.floor(time * 0.5);
}

console.log(litres(3)) */
