/*
This app will convert minutes to hours and minutes. 
 If no integer is supplied, a usage message will be logged.  
 If an integer is supplied, the hours are calculated using the division operator `/`
 and the minutes are calculated using the modulo `%` operator. 
In addition the pluarality of the units (hour/hours and minute/minutes) are calculated based on the value
 of the hours or minutes.
*/

// get an integer using getargs
let getargs = require("../modules/getargs/index.js");
let input = getargs.getIntegerArg();

/**** Do not modify anything above this line ****/

// test that input is a number

if (isNaN(input)) {

  console.log(`Please run this program with a number of minutes. It will convert the number into hours and minutes`)
} else {
  var hours = (input / 60).toFixed(0)
  var minutes = input % 60
  var hrs = hours > 1 ? `hours` : `hour`
  var mins = minutes > 1 ? `minutes` : `minute`

  console.log(`${input} minutes is ${hours} ${hrs} ${minutes} ${mins} `)
}
