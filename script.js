let input = document.getElementById('input');
let display = document.getElementById('display');
let mark = document.getElementById('mark');

function add(){
    display.textContent = input.value;
}
function check(){
    display.style.textDecoration = 'line-through';
}
function remove(){
    display.remove();
}