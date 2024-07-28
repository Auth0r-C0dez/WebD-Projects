

const btn = document.getElementById("btn");
const lbl = document.getElementById("lbl");
let max = 6;
let min = 1;
let random;

btn.onclick = function () {
    random = Math.floor(Math.random() *max)+min;
    lbl.textContent = random;
}
