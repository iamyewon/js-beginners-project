const value = document.querySelector('#value');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
// 많을 때 반복문으로 / 배열 하나 만들어서.

// const changeColor = () => { // 하는 일 따라 함수 분리
//     if(value.textContent === '0'){
//         value.style.color = '#102A42';
//     }else if(value.textContent > 0){
//         value.style.color = 'green';
//     }else{
//         value.style.color = 'red';
//     }
// }

const updateValue = (amount) => {
    value.textContent = Number(value.textContent) + amount;

    if(value.textContent === '0'){
        value.style.color = '#102A42';
    }else if(value.textContent > 0){
        value.style.color = 'green';
    }else{
        value.style.color = 'red';
    }
};

// const handle = () => {
//     updateValue();
//     changeColor();
// }

document.addEventListener('DOMContentLoaded', () => {
    decrease.addEventListener('click', () => updateValue(-1));
    increase.addEventListener('click', () => updateValue(1));
    reset.addEventListener('click', () => updateValue(-Number(value.textContent)));
});