// -------------break ------------------

// for ( let counter=1; counter<=10; counter++){
//     if(counter==5){
//         break;
//     }
//     document.write(counter);
//     document.write('<br>');
// }

// ----------------continue ---------------------

// for ( let counter=1; counter<=10; counter++){
//     if(counter==5){
//         continue;
//     }
//     document.write(counter);
//     document.write('<br>');
// }

// ---------------------nested loop--------------------

// for ( let counter=1; counter <=10; counter++){

//     document.write(counter);
//     document.write('<br>');
//     for (let counter2=1; counter2<3; counter2++) {
//         document.write("amit");
//         document.write('<br>');
//     }
// }

// ----------break and continue in nested loop --------------

// for (let counter=1; counter<=10; counter++){
//     document.write(counter);
//     document.write('<br>');
//     for (let counter2=1; counter2<3; counter2++){
//         if(counter==5){break;}
//         document.write("amit");
//         document.write("<br>");

//     }
// }

// for (let counter=1; counter<=10; counter++){
//     document.write(counter);
//     document.write('<br>');
//     for(let counter2=1; counter2<3; counter2++){
//         if(counter==5){continue;}
//         document.write('amit');
//         document.write('<br>');

//     }
// }

// ------------if we write if condition inside nested loop & want to target first loop then we have to give label to the first loop & use this label in the if condition, below is the example.-------------------------

outer: for (let counter = 1; counter <= 10; counter++) {
    document.write(counter);
    document.write("<br>");
    
    for (let counter2 = 1; counter2 <= 3; counter2++) {
        if (counter == 5)
        { break outer; }

        document.write('amit');
        document.write('<br>');

    }
}

//  in this above we want to stop counter at 5 so we done by this way.(mention above)
// we give label(name) to the for loop and we give it outer with a : and a space. 
// this will break the loop for first loop and after printing 5 it will stop.

