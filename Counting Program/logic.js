const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const lbl = document.getElementById("lbl");
let count = 0;

increase.onclick = function () {
    count++;
    lbl.textContent = count;
}
decrease.onclick = function () {
    count--;
    lbl.textContent = count;
}
reset.onclick = function () {
    count = 0;
    lbl.textContent = count;
}
