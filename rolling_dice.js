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

//var num_rolls = process.argv[2]

function RandomNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + 1;
}

console.log(RandomNumber(1,6))