const value = document.querySelector('#value');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

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

document.addEventListener('DOMContentLoaded', function() {
    decrease.addEventListener('click', () => updateValue(-1));
    increase.addEventListener('click', () => updateValue(1));
    reset.addEventListener('click', () => updateValue(-Number(value.textContent)));
});