
// setTimeout(() =>                                             //Timer
// {
//     console.log("after 2 seconds")
// },2000);


let promise = new Promise(function(resolve,reject){            //resolve data kiti.ok
    setTimeout(() => resolve("done"),1000);                    //here 1000<2000, so print done
    setTimeout(() => reject(new Error("some error!")),2000);   // if error tym is less,it prints some error
})
promise.then((result) => console.log(result))                  //done comes in result
       .catch((error) => console.log(error.message));          //error objct of Error
console.log(promise)                                           // details show


