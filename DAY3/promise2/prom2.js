let countValue = new Promise((resole, ) =>
{
    resole("promise resolved"); //here no printing occur, this value passed to res in next v1
})
const v1 =(res) => {
    console.log(res); //if we append some value to res in v1(data) and if it is returned,it goes to v2
}
const v2 =(res) => {  //v1s data comes here
    console.log("you can call multple functns this way");
}
countValue
 .then (v1)
.then (v2);