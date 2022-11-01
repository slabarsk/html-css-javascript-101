const button = document.getElementsByClassName("js-like-button");

const counter = document.getElementsByClassName('js-counter')[0];

let counterValue = parseInt(counter.textContent);

const counterEngine = () => {
  counter.innerText = counterValue++;
}

button[0].addEventListener('click', (event) => {
  counterEngine()
  counter.style.color = "blue";
});