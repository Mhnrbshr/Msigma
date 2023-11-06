// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,2));



// const greet = name =>`helloo ${name}`; // greet func name
// console.log(greet("mathew"));



// let a= 10;
// console.log(a);
// const fun = () => {
//     let a= 11;
//     if(true){
//         let a =12;
//         console.log(a);
//     }
//     console.log(a); // prints 11, bcz a=12 scope only inside previous if
// }
// fun();


// var a= 10;
// console.log(a);
// const fun = () => {
//     var a= 11;
//     if(true){
//         var a =12;
//         console.log(a);
//     }
//     console.log(a); // since var is used, scope is not an issue.
// }
// fun();


// const add = (...args) => {    //rest
//     let sum = 0 ;
// }
// add(1,2,3);


function calc(operand,num1,num2){
switch(operand){
    case '+':
        console.log(parseFloat(num1)+parseFloat(num2));
        break;
    case '-':
        console.log(parseFloat(num1)-parseFloat(num2));
        break;
    case '*':
        console.log(parseFloat(num1)*parseFloat(num2));
        break;
    case '/':
        console.log(parseFloat(num1)/parseFloat(num2));
        break;
    default:
        console.log("Invalid operand.");
}
}
let num1 = prompt("enter frst no");
let num2 = prompt("enter second no");
let operand = prompt("enter operand");
calc(operand,num1,num2)