const f = "hari";
const l = "main";
const full = f + " " + l;

console.log(full);
console.log(`name is ${full}`);
console.log(`${f} ${l}`);

const age1 =20;
console.log(full+ age1); // age1 becomes string. bcz full is string

//string to no(here age2 is string)
const age2 = "25";
console.log(+age2); // unary opertr used to convrt to int ( or we can use Number(age2))
console.log(Number(age2)); 

const age3 = 'a';
console.log(+age3);// 111 aftr convrtng to no, if shows a is not a no

console.log("11"+1); // 10 consdr + as unry oprtr(convrt to int)
console.log("11"-1);

console.log(2+2+'1'); //41
console.log('1'+2+2); //122(2convrtd to no)

console.log(6-'1'); //5
console.log("6"/"1"); //6 

console.log("UPPERCASE".toLowerCase());

console.log("10" == 10);
console.log("10" === 10);

console.log("null vs 0");



