let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let welcomeEl = document.getElementById("welcome-el");

let myName = "Hey there! ";
let greeting = "Welcome.";

welcomeEl.innerText = myName + greeting;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  let countFinal = count + " - ";
  saveEl.textContent += countFinal;
  countEl.innerText = 0;
  count = 0;
}
