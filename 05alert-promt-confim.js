// these  functions are interacting with user. 
// when these functions are working or showing user can't interact with the rest of the web-page b/c they appeared in a pop-up.

// -------------------alert-------------------
// used to give alert on the webpage
// alert('this is the alert');

//----------------------prompt-----------------------

// prompt('what is your age');
// used to take input from the user.
// if user click on cancel button or press esc button then it will give null.

// ------------------confirm-------------------------
//  it also take inputs  from the user in the form of ok or cancel here ok means true and cancel means false

// confirm('are you sure ');



// ---write some logic on these fuctions-------------

// in prompt  if we want default value then we write 
// let age = prompt ("enter your age", 22) --- this 22 will show to the user as a default value user can change it or processed with it.
 
// let age = prompt('what is your age', 18);  
// if(age>=18)
// {
//     document.write('you are adult your age is', age);
// }
// else{
//     document.write('you are not a adult your age is', age);

// }

// write some logic on confirm---------------

// let movie = confirm ('want to go to the movie');

// if (movie) {
//     document.write('ticket booked');
// }
// else {
//     document.write('ticket not booked');
// }
  

// data type converstions -----****
// data type converstions of

// A. inbuild in js ---
// case -1

// let age = 4 + "4";
// let age = "4" + 4;

// case -2
// let age = 4 * "4";
// let age = 4 - "4";
// let age = 4 / "4";
// let age = 4 % "4";

// case -3 
// let age = "4" * 'yes';
// output -- NaN 
// type - number
// console.log(typeof age);

// B. from manually ---
// first ---  String()
// second --- Number()
// third ---- Boolean()

// example ---
// let age = 0;
// age= Boolean(age);
// console.log(age);
// console.log(typeof age);

// let age = 5;
// age= Boolean(age);
// console.log(age);
// console.log(typeof age);

// let name = "amit\"s"
// let name = "amit\'s"
// console.log(name);


// let name = "amit kumar"
// console.log(name[4]);

// manupulation of string----****

// substracing  substring from a string ----

// method-1

// let name1 = "this is a javaScript tutorial."
// let new1 = name1.substr(5,15);
// console.log(new1);


// method -2
// let name1 = "this is a javaScript tutorial."
// let new1 = name1.substring(10,20);
// console.log(new1);

