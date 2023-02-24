// do while loop --

// let counter = 1;

// do {
//     console.log( counter);
//     counter++;
// }while(counter<=10)


// nested loop ---

// what is nested loop -- if i want to print 1 to 10 and i also want to print amit after every digit then we use nested loop ----



// for (let counter =1; counter<=10; counter++){

//     document.write(counter);
//     document.write("<br>");

//     for(counter2 =1; counter2 < 3; counter2++){
//         if(counter ===5){
//             break;
//         }
//         document.write("Amit");
//         document.write("<br>");
//     }

// }



// for (let counter = 1; counter <= 10; counter++) {

//     if (counter === 5) {
//         break;
//     }
//     document.write(counter);
//     document.write("<br>");

//     for (counter2 = 1; counter2 < 3; counter2++) {

//         document.write("Amit");
//         document.write("<br>");
//     }

// }


// first: for (let counter = 1; counter <= 10; counter++) {


//     document.write(counter);
//     document.write("<br>");

//     for (counter2 = 1; counter2 < 3; counter2++) {

//         if (counter === 5) {
//             break first;
//         }

//         document.write("Amit");
//         document.write("<br>");
//     }


// }


// let age = [4,6,2,66,7,76];


// function myfun(age){
//     console.log(age);
// }
 
// function add(){
//      console.log( arguments.length);
// }

// add(2,2,2)
// add(4,5)
// add(3);

// let a= 10;
// // ++a;
// a++;
// console.log(a);

// let x = Math.round(4.49);
// console.log(x);
// fdds

// let x = new Date(2018,0,1,20,10);
// let y = new Date();
//  y.setDate(x.getDate()+ 50); 
// console.log(y);


// let x = new Date(2018,0,1,20,10);
// let y = new Date(2018,0,1,20,10);
// y.setDate(x.getDate()+50);
// console.log(y);

// let x = new Date();
// let y = new Date();
// y.setDate(x.getDate()+10);
// console.log(y);

let person = {
    name : "amit",
    age : 33,

    getName : function(){
        return this.name.toUpperCase();
    }
}
