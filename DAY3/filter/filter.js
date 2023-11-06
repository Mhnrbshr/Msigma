
const a = [-1,22,3,-8]   // to remove negavtive nos and print postv nos
function greet(arr,callback){
    const result = arr.filter(callback)
    console.log(result)
}
function positive(a){
    return a>=0
}
greet(a,positive)

