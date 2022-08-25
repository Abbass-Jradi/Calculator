
var answer_sequence = "";
var result = "";

function pressButton(){
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => button.addEventListener('click',printToScreen));
}

function printToScreen(e){
    const answer = document.querySelector('.answer');
    if(answer_sequence.length < 16 && (e.target.textContent !== '='
                                      && e.target.textContent !== 'AC'
                                      && e.target.textContent !== '+/-'
                                      && e.target.textContent !== '%')){
    answer_sequence += e.target.textContent;
    }
    answer.textContent = answer_sequence;
}

pressButton();