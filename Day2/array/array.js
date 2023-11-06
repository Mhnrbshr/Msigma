let fruits = new Array();
fruits =  ["apple", "orange"];
console.log(fruits[1]);


let arr3 = ['apple', {name:'john'},true,function(){console.log('hello');}];
arr3[3]();


const num = [1,2,3]; //objct
const sum = (args) => {
    console.log(args); // prints [1 2 3]
}
sum(num);
console.log(typeof(num));


const num1 = [1,2,3]; // finding sum using for loop
const sum1 = (args) => {
    let sum = 0;
    for(let i=0;i<args.length;i++){
        sum += args[i];
    }
    console.log(sum);
}
sum1(num1);


//finding sum using map
const num2 = [1,2,3];
const sum2 = (args) => {
    let sum = 0;
    args.map((item) => sum+=item);
    console.log(sum);
}
sum2(num2);


//finding sum using foreach
const n = [1,2,3];
const summ = (args) => {
    let sum = 0;
    args.forEach((item) => sum+=item);
    console.log(sum);
}
summ(n);


//sort
console.log(["b","a","d"].sort());
console.log([15,5,2].sort());
console.log([10,3,1,5].sort((a,b) => a-b)); // sorting for numbers





