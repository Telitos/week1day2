/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

var concepts = joinList(conceptList);

function joinList(list) {
  var joined_concepts = ""
  var i = 0
  while (i < list.length - 1) {
    joined_concepts += list[i] + ", "
    i = i + 1
  }
  if (i == list.length - 1 ) {
    joined_concepts += list[list.length - 1]
  }
  return joined_concepts
}

console.log("Today I learned about " + concepts + ".");

