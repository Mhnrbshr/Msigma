// setTimeout(function() { myfunction("hello world"); } ,3000);

 function myfunction(value){
    document.getElementById("demo").innerHTML = value;
 }


 setTimeout( () => { myfunction("hello world"); } ,3000); //frst line converted to arrw func
