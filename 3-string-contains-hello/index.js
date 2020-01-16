/*
The user should run this from the root of the project using `node 1-odd-even/index.js <integer> and should see the word odd or even depending on the integer.  If an integer is not provide, the user should see a usage statement reminding them of the how to run this code.
*/

// get input using getargs
let getargs = require("../modules/getargs/index.js")
let input = getargs.getStringArg()

/**** Do not modify anything above this line ****/

// Make sure that the user entered a string
if (!(typeof (input) === 'string')) {
  // let the user know that if a string contains a space it must be quoted
  console.log(`Please run this program with a string. If your string contains a space it must be quoted, like this "two  words"`)
}

// check to see if string contains hello
// if it does report back the position in the string where it begins

else {
  var lowerInput = input.toLowerCase();
  if (lowerInput.includes("hello")) {
    var helloPosition = lowerInput.indexOf("hello")
    console.log(`hello is at position ` + helloPosition)

  } else {

    console.log(`Input does not contain "hello" `);
  }
}
