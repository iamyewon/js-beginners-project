const colors = ["green", "pink", "rgba(133,122,200)", "#c7c7c7"];
const button = document.querySelector('.btn');
const color = document.querySelector('.color');

button.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
})