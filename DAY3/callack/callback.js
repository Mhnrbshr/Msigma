function greet(name,callback){
    console.log('hi'+" "+name);
    callback();
}
function alpha(){
    console.log("im alpha");
}
function beta(){
    console.log("im beta");
}
greet('peter',alpha);
greet('tom',beta)