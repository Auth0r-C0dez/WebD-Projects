const randI = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = randI;

let score = 20;
let highscore =0;

document.querySelector('.check').addEventListener('click',function () {
    const guessed = Number(document.querySelector('.guess').value);


    if(!guessed) {
        document.querySelector('.message').textContent = "Select number betwn 1 t 20 dumb fuck";

    } else if (guessed > randI) {
        document.querySelector('.message').textContent = "TO big";
        score--;
        document.querySelector('.score').textContent = score;
    } else if (guessed < randI) {
        document.querySelector('.message').textContent = "TO small";
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = "Right guess hoimmie";
        document.querySelector('body').style.backgroundColor = '#60b347';
        if(score>highscore) {
            document.querySelector('.highscore').textContent = score;
        }
    }
})

document.querySelector('.again').addEventListener('click',function() {
    location.reload();
});
