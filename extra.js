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


first: for (let counter = 1; counter <= 10; counter++) {


    document.write(counter);
    document.write("<br>");

    for (counter2 = 1; counter2 < 3; counter2++) {

        if (counter === 5) {
            break first;
        }

        document.write("Amit");
        document.write("<br>");
    }


}