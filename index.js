// Countdown
const startTimer = 10;
let time = startTimer * 60
const countdown = document.querySelector('[data-timer]');
setInterval(updateTimer, 1000)
function updateTimer() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdown.innerHTML = `${minutes}: ${seconds}`;
    time--;
}

//  Form
const form = document.querySelector('[data-form]')

console.log(form);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let nome = document.querySelector('[data-name').value
    let email = document.querySelector('[data-email').value


    let data = {
        nome,
        email
    }

    let convert = JSON.stringify(data)

    localStorage.setItem('lead', convert)
})

// Shelf Card

const cards = document.querySelectorAll('.card');
const shelf = document.querySelector('[data-shelf]');

let idx = 0;

function shelft() {
    idx++;

    if (idx > shelf.length - 1) {
        idx = 0;
    }

    cards.forEach(card => {
        card.style.transform = `translateX(${idx * 10}px)`
    });
}

// setInterval(shelft, 1800)




