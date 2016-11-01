// function str --> str
// create a variable password_obfuscated on which to concatenate
// each index of the given string.
// loop through each of the elements of the given string.
// for each element four cases:
// if index[i] is a "a" then add "4" to password_obfuscare
// and so on for each cases
//else concatenate the string index as is.

function obfuscate (password) {
  var password_obfuscated = ""
  for (var i = 0; i < password.length; i ++) {
    if (password[i] == "a") {
      password_obfuscated = password_obfuscated + "4"
    } else if (password[i] == "e") {
      password_obfuscated = password_obfuscated + "3"
    } else if (password[i] == "o") {
      password_obfuscated = password_obfuscated + "0"
    } else if (password[i] == "l") {
      password_obfuscated = password_obfuscated + "1"
    } else {
      password_obfuscated = password_obfuscated + password[i]
    }
  }
  return password_obfuscated
}

//console.log(obfuscate(passwordo))