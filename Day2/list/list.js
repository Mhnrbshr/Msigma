const fruits = ['apple', 'banana', 'grapes'];
const fruitslist = document.getElementById('fruitsList')

fruits.forEach((i) => {
    const listItem = document.createElement('li');
    listItem.textContent=i;
    listItem.classList.add('i');
    fruitslist.appendChild(listItem);
})


const element = document.querySelector("#fruitList")
const alllistItems = element.querySelectorAll(".i");