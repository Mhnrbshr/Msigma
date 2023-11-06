// let i = 0;
// while( i < 10){
//     console.log(i);
//     i++;
// }


// let count = 0;
//  let current = Math.random();
// while( current != 6){
//     current = Math.floor(Math.random()*6) +1;
//     count++;
// }
// console.log(count);


let rand = Math.floor(Math.random()*100)+1;
do{
    if(rand%2==0){
        rand= rand/2;
    }else{
        rand=(rand*3)+1;
    }
    console.log(rand);
}while(rand != 1);



let i = 1;
for(i=1;i<21;i++){
    if(i%2==0){
        continue;
    }
    if(i%3==0){
        console.log(`${i} no is divisible by 3`);
    }
    if(i%5==0){
        console.log(`${i} is divisible by 5`);
    }
    if(i%3==0 && i%5==0){
        exit;
    }
}