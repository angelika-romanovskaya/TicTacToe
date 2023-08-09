const result_x = document.querySelector('.main_x .result');
const result_draw = document.querySelector('.main_draw .result');
const result_o = document.querySelector('.main_o .result');

const turn = document.querySelector('.next');

const arrayItem = document.querySelectorAll('.game_item');

const btn = document.querySelector('.btn');

arrayItem.forEach((item) => {
    item.addEventListener('click', function(event){
        event.preventDefault();
        if(item.textContent === ''){
            if(turn.textContent === 'X') {
                item.textContent = 'X';
                item.classList.toggle('main_x')
                turn.textContent = 'O';
                turn.classList.toggle('main_x');
                turn.classList.toggle('main_o');
            } else{
                item.textContent = 'O';
                item.classList.toggle('main_o');
                turn.textContent = 'X';
                turn.classList.toggle('main_o');
                turn.classList.toggle('main_x');
            }
        }
    })
})

btn.addEventListener('click', function(event){
    event.preventDefault();
    arrayItem.forEach((item) =>{
        item.textContent = '';
    })
    result_x.textContent = '';
    result_draw.textContent = '';
    result_o.textContent = '';
    if(turn.textContent === 'O'){
        turn.classList.toggle('main_o');
        turn.classList.toggle('main_x');
    }
    turn.textContent = 'X';
})