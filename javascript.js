
var text_line = "";
function pressButton(){
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => button.addEventListener('click', screen));
}

function screen(e){
    const text = document.querySelector('.text');
    text_line += e.target.textContent;
    text.innerHTML = `${text_line}`;
}
function start(){
    pressButton();

}

start();
