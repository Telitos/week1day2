/*Write a program that takes a single parameter from
 the command line, a number, and rolls that many six-sided
  dice. For example, the following is a sample output of
   the program.

   First get the number of times you need to roll the dice from
   the command line.
    process.argv[2] (assuming there's only one argument)

    2) Make a function, Rolldice, that makes an array of length
    of the argument given, and each of the indexes is a random number
    between 1 - 6.

    3) make a function, RandomNumber, that makes a random number
    between 1-6, which will be called within main Rolldice fucntion.

    4) Print "Rolled" + x times + "dice": index0 of array from Rolldice
    + index1 of Rolldice, and so on.

    4) bis) since we don't know the length of the array, we need
    to make a function that prints the sentence we want.
    either a while or a for loop. Maybe could be incorporttaed into
    Main Rolldice later.

*/

// var num_rolls = process.argv[2]

// function RandomNumber (min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + 1;
// }

// console.log(RandomNumber(1,6))

// function Rolldice (num){
//   var random_numbers = []
//   for (var i = 0; i < num; i ++){
//     random_numbers[i] = RandomNumber(1,6)
//   }
//   return random_numbers
// }

// console.log(Rolldice(3))

// function Print_result(){
//   var final_sentence = ""
//   var part1 : "Rolled: "
//   var part2 : " dice: "
//   var part3 : concatenate()

function turn_array_to_string(numbers) {
  var rolls = ""
  var i = 0
  while (i < numbers.length - 1) {
  rolls += numbers[i] + ", "
  i += 1
  } if (i == numbers.length - 1) {
    rolls += (numbers[i])
  }
  return rolls
  console.log(rolls)
  }
console.log(turn_array_to_string([1,2,3]))