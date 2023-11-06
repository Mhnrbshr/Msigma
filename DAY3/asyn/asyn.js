// async function myFunction( , ){
//     // async code here
// }
// const myFunction = async( , ) =>{
//  // asynchrs code
// ;}




// async function fn(){
//     console.log("async func");
//     return 1;
// }
// fn().then(v1).then(v2).catch(handleError);  //asy func call chaining







// let promise = new Promise(function (resolve,reject){    //promise
//     setTimeout(function(){
//         resolve('Promise resolved')
//     },4000);
// })
 
// async function asyncFunc() {                            //async func
//     let result = await promise;                         //wait untill 4secs 
//     console.log(result);
//     console.log("Hello");
// }
// asyncFunc();




// let promise = new Promise(function (resolve,reject){    //promise     try catch
//          setTimeout(function(){
//              resolve('Promise resolved')
//          },4000);
//     })
// async function asyncFunc() {
//     try {
//       let result = await promise;
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   }




// async function asyncFunc() {
//          try {
//            const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//            const data = await response.json()
//             console.log(data);
//           }
//           catch(error) {
//             console.error( error);
//           }
//        }
// asyncFunc();




export const myNumbers=[1,2,3,4];              //exporting
const animals=['Panda','Bear', 'Eagle'];
 
export function myLogger(){
    console.log(myNumbers, animals);
}
 
export default function petsLogger(pets){
    console.log(pets);
}
 
export{myNumbers,myLohgger as Logger};



import * as Utils from 'mod1.js';                //importing
Utils.myLogger();