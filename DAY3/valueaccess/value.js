const n1 = parseInt(document.getElementById('num1').value);
const n2 = parseInt(document.getElementById('num2').value);
const re = parseInt( document.getElementById('result'));
if(operation=='sum'){
    function handleinput(n1,n2,op) {
        let nn = n1+n2;
        re.textContent(nn);
      }
}else{
  function handleinput(n1,n2,op) {
    let mm = n1-n2;
    re.textContent(mm);
  }
}
find(n1,n2,)

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