const input = document.querySelector('.btn');
const output = document.getElementById('output');
const reset = document.querySelector('.reset');
const playerResult = document.querySelector('.player');
const computerResult = document.querySelector('.computer');


input.addEventListener('click', function() {
  
    const player = Math.ceil(Math.random() * 6) + 1;
    const computer = Math.ceil(Math.random() * 6) + 1;

    playerResult.innerText = player;
    computerResult.innerText = computer;

    if (player > computer)
    {
    output.innerText = 'YOU WON!'
    }
    else if (player == computer) 
    {
    output.innerText = '-Tie-'
    }
    else
    {
    output.innerText = 'You lost... mabye better next time!'
    }

});

reset.addEventListener('click', function() {

    playerResult.innerText = '';
    computerResult.innerText = '';
    output.innerText = '';
});