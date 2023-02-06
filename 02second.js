// now we study switch operator------
// first we can create a situation and solve it with the help of if -else than we solve it with switch---

// if input = 1, 'y' "yes" output is = continue....
// if input == 0, 'n', "no" output is = end.....

// let input;
// input = 1;

// if(input===1){
//     console.log('continue');
// }else if(input==='y'){
//     console.log('continue');
// }else if(input==='yes'){
//     console.log('continue');
// }else if(input===0){
//     console.log('end');
// }else if(input==='n'){
//     console.log('end');
// }else if(input==='no'){
//     console.log('end');
// }
// else{
//     console.log('wrong input');
// }

// we can do this with less code with the help of or operator  below is the code----

// if(input===1 || input==='y' || input==='yes'){console.log('continue');}
// else if (input===0 || input==='n' || input==='no'){console.log('end');}
// else {console.log('wrong input');}



// now we are doing this same problem with the help of switch operator----
// it compare ===  means it compare value as well as data type----
// let input;
// input = 'yes';

// switch (input) {
//     case 1:
//         document.write('continue');
//         break;
//     case 'y':
//         document.write('continue');
//         break;
//     case 'yes':
//         document.write('continue');
//         break;
//     case 0:
//         document.write('end');
//         break;
//     case 'n':
//         document.write('end');
//         break;
//     case 'no':
//         document.write('end');
//         break;
//     default:
//         document.write('wrong input');
// }

// here if we don't give break then it print all the next case output until it find break.

// we can write this above code with less number of lines---------------
let input='y';

switch(input){
    case 1:
    case 'y':
    case 'yes':
        document.write('continue');
    break;
    case 0:
    case 'n':
    case 'no':
        document.write('end');
    break;
    default:
        document.write('wrong input');
}