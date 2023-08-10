const result_x = document.querySelector('.main_x .result');
const result_o = document.querySelector('.main_o .result');

const game = document.querySelector('.game');

const turn = document.querySelector('.next');

const arrayItem = document.querySelectorAll('.game_item');

const btn_again = document.querySelector('#btn-again');
const btn_restart= document.querySelector('#btn-restart');

const win = document.querySelector('.win');

const arr = [];
let x =0, o =0;

arrayItem.forEach((item, i) => {
    item.addEventListener('click', function(event){
        event.preventDefault();
        if(item.textContent === ''){
            if(turn.textContent === 'X') {
                item.textContent = 'X';
                arr[i] = 'X';
                item.classList.toggle('main_x')
                turn.textContent = 'O';
                turn.classList.toggle('main_x');
                turn.classList.toggle('main_o');
                if(((arr[0] === arr[1] && arr[0] === arr[2]) && (arr[0]!= undefined && arr[1] != undefined && arr[2] !=undefined)) ||
                    ((arr[3] === arr[4] && arr[3] === arr[5]) && (arr[3]!= undefined && arr[4] !=undefined && arr[5] !=undefined)) ||
                    ((arr[6] === arr[7] && arr[6] === arr[8]) && (arr[6]!= undefined && arr[7] !=undefined && arr[8] !=undefined)) ||
                    ((arr[0] === arr[3] && arr[0] === arr[6]) && (arr[0]!= undefined && arr[3] !=undefined && arr[6] !=undefined)) ||
                    ((arr[1] === arr[4] && arr[1] === arr[7]) && (arr[1]!= undefined && arr[4] !=undefined && arr[7] !=undefined)) ||
                    ((arr[2] === arr[5] && arr[2] === arr[8]) && (arr[2]!= undefined && arr[5] !=undefined && arr[8] !=undefined)) ||
                    ((arr[0] === arr[4] && arr[0] === arr[8]) && (arr[0]!= undefined && arr[4] !=undefined && arr[8] !=undefined)) ||
                    ((arr[2] === arr[4] && arr[2] === arr[6]) && (arr[2]!= undefined && arr[4] !=undefined && arr[6] !=undefined))
                ) {
                    game.style = 'pointer-events:none'
                    result_x.textContent = ++x;
                    win.textContent = 'X win';
                    win.style.display = 'block'
                    win.style.color = 'rgb(10, 187, 49)'
                }
            } else{
                item.textContent = 'O';
                arr[i] = 'O';
                item.classList.toggle('main_o');
                turn.textContent = 'X';
                turn.classList.toggle('main_o');
                turn.classList.toggle('main_x');
                if(((arr[0] === arr[1] && arr[0] === arr[2]) && (arr[0]!= undefined && arr[1] != undefined && arr[2] !=undefined)) ||
                    ((arr[3] === arr[4] && arr[3] === arr[5]) && (arr[3]!= undefined && arr[4] !=undefined && arr[5] !=undefined)) ||
                    ((arr[6] === arr[7] && arr[6] === arr[8]) && (arr[6]!= undefined && arr[7] !=undefined && arr[8] !=undefined)) ||
                    ((arr[0] === arr[3] && arr[0] === arr[6]) && (arr[0]!= undefined && arr[3] !=undefined && arr[6] !=undefined)) ||
                    ((arr[1] === arr[4] && arr[1] === arr[7]) && (arr[1]!= undefined && arr[4] !=undefined && arr[7] !=undefined)) ||
                    ((arr[2] === arr[5] && arr[2] === arr[8]) && (arr[2]!= undefined && arr[5] !=undefined && arr[8] !=undefined)) ||
                    ((arr[0] === arr[4] && arr[0] === arr[8]) && (arr[0]!= undefined && arr[4] !=undefined && arr[8] !=undefined)) ||
                    ((arr[2] === arr[4] && arr[2] === arr[6]) && (arr[2]!= undefined && arr[4] !=undefined && arr[6] !=undefined))
                ) {
                    game.style = 'pointer-events:none'
                    result_o.textContent = ++o;
                    win.textContent = 'O win';
                    win.style.display = 'block'
                    win.style.color = "rgb(203, 10, 10)"
                }
            }
        }
    })
})

btn_again.addEventListener('click', function(event){
    event.preventDefault();
    arrayItem.forEach((item) =>{
        item.textContent = '';
        item.classList.remove('main_o');
        item.classList.remove('main_x');
    })
    arr.length = 0;
    game.style = 'pointer-events:auto'
    win.style.display = 'none'
    if(turn.textContent === 'O'){
        turn.classList.toggle('main_o');
        turn.classList.toggle('main_x');
    }
    turn.textContent = 'X';
})

btn_restart.addEventListener('click', function(event){
    event.preventDefault();
    arrayItem.forEach((item) =>{
        item.textContent = '';
        item.classList.remove('main_o');
        item.classList.remove('main_x');
    })
    arr.length = 0;
    game.style = 'pointer-events:auto'
    win.style.display = 'none'
    result_x.textContent = '';
    result_o.textContent = '';
    x = o = 0;
    if(turn.textContent === 'O'){
        turn.classList.toggle('main_o');
        turn.classList.toggle('main_x');
    }
    turn.textContent = 'X';
})