const changeBg = () => {
    document.body.style.backgroundColor = "red" ;
}
const changeStyle = (button) => {
    button.classList.toggle("active");
    button.classList.toggle("button-secondary");
}