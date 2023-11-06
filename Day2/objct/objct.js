let user = new Object(); // objct constuctr


let usr = { name:"john" , age:30 }; // objct key and value
console.log(usr.name);


let us1 = {};   // gettng values to objct
 us1.name = prompt("enter name");
 us1.age = prompt("enter age");
console.log(us1);

delete us1.age; //deltng a key
console.log(us1);

us1.isadmin = true; //addng a key
console.log(us1);


//destructuring
const person = { first :"a", last:"b",password:"abc"};  // a can be accesed using person.first orrr person["first"]

//or acccesed by
const {first,last} = person;
console.log(first);
console.log(last);


const person2 = { first :"a", last:"b",password:"abc"}; // ojct similr to person ojct
const {first:fn,last:ln} = person2; // so we cant use same varble name,hence here we use aliasing
console.log(fn);// now frst is called fn
console.log(ln); // now last is called ln

