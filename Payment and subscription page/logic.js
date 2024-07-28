const chekbox = document.getElementById("chekbox");
const visacard = document.getElementById("visacrd");
const mastercard = document.getElementById("mastercard");
const upi = document.getElementById("upi");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const button = document.getElementById("button");

button.onclick = function () {
    if(chekbox.checked) {
        p1.textContent = `congratulation on your subscription`;
    }
    else {
        p1.textContent = `please subscribe to move ahead`;
    

    }
    if(visacard||mastercard||upi.checked) {
        p2.textContent = `we wil redirect to your payment page`;
    }
    else {
        p2.textContent = `please select a mode of payment`;
    }
}
