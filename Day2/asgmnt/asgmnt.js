const nrow =5;
const ncol = 5;

const container = document.getElementById('id1');


for(let i=0; i<nrow;i++) {
    const row = document.createElement('div');
    row.classList.add('row') //create row class, so that give css to give circle features
    container.appendChild(row);
    
    for(j=0;j<ncol;j++){
        const circle = document.createElement('div');
        circle.classList.add('circle')
        row.appendChild(circle);
    }
}



// let colorRow = -1;
// const color=() => {
//         colorRow++; //each row selecting
//         const rows = document.querySelectorAll('.row');
//         if (colorRow >= 0 && colorRow < 5) {
//                 const circlesInRow = rows[colorRow].querySelectorAll('.circle'); //each rowle full circle
//                 circlesInRow.forEach(circle => { ///ini ororo circle idkum
//                     circle.style.backgroundColor = "red";
//                 });
                
//             }
// }

let colorRow = -1;
const color=() => {
        colorRow++; //each row selecting
        const rows = document.querySelectorAll('.row');
        if (colorRow >= 0 && colorRow < 5) {
            let colorText=""
                if(colorRow == 0)
                {
                    colorText = "red"
                }
                if(colorRow == 1)
                {
                    colorText = "orange"
                }
                if(colorRow == 2)
                {
                    colorText = "yellow"
                }
                if(colorRow == 3)
                {
                    colorText = "yellowgreen"
                }
                if(colorRow == 4)
                {
                    colorText = "green"
                }
                const circlesInRow = rows[colorRow].querySelectorAll('.circle'); //each rowle full circle
                
                circlesInRow.forEach(circle => { ///ini ororo circle idkum
                    circle.style.backgroundColor = colorText;
                });
                
            }
}
 
const nocolor=() => {   
        const rows = document.querySelectorAll('.row');
        if (colorRow >= 0 && colorRow < 5) {
                const circlesInRow = rows[colorRow].querySelectorAll('.circle');
                circlesInRow.forEach(circle => {
                    circle.style.backgroundColor = "white";
                });
            }
        colorRow--;
}


