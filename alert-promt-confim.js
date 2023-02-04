// these  functions are interacting with user. 
// when these functions are working or showing user can't interact with the rest of the web-page b/c they appeared in a pop-up.

// -------------------alert-------------------
// used to give alert on the webpage
// alert('this is the alert');

//----------------------prompt-----------------------

// prompt('what is your age');
// used to take input from the user.

// ------------------confirm-------------------------
//  it also take inputs  from the user in the form of ok or cancel here ok means true and cancel means false

// confirm('are you sure ');



// ---write some logic on these fuctions-------------
// in line 22 if we want default value then we write with ,(,18) and it show default and user can change it 
// let age = prompt('what is your age', 18);  
// if(age>=18)
// {
//     document.write('you are adult your age is', age);
// }
// else{
//     document.write('you are not a adult your age is', age);

// }

// write some logic on confirm---------------

let movie = confirm ('want to go to the movie');

if (movie) {
    document.write('ticket booked');
}
else {
    document.write('ticket not booked');
}
  