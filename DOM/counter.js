const createElements = () => {
  const timerDown = document.createElement('button');
  timerDown.classList.add('timerDown');
  document.body.append(timerDown);
  timerDown.style.width = '50px';
  timerDown.style.height = '50px';
  timerDown.style.background = 'yellow';

  const decrement = document.createElement('button');
  decrement.classList.add('decrement');
  document.body.append(decrement);
  decrement.style.width = '50px';
  decrement.style.height = '50px';
  decrement.style.background = 'red';

  const counter = document.createElement('p');
  counter.classList.add('counter');
  document.body.append(counter);
  counter.innerText = 0;
  counter.style.fontSize = '2rem';

  const increment = document.createElement('button');
  increment.classList.add('increment');
  document.body.append(increment);
  increment.style.width = '50px';
  increment.style.height = '50px';
  increment.style.background = 'lime';

  const timer = document.createElement('button');
  timer.classList.add('timer');
  document.body.append(timer);
  timer.style.width = '50px';
  timer.style.height = '50px';
  timer.style.background = 'cyan';

  document.body.style.display = 'flex';
  document.body.style.gap = '50px';
  document.body.style.justifyContent = 'center';
  document.body.style.alignItems = 'center';
  document.body.style.height = '100vh';
};
createElements();

const timerDown = document.querySelector('.timerDown');
const timer = document.querySelector('.timer');
const counter = document.querySelector('.counter');
const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');

let timerDownActive = false;
let intervalDown;
timerDown.addEventListener('click', () => {
  if (!timerDownActive) {
    intervalDown = setInterval(() => counter.innerText--);
    timerDownActive = true;
  } else {
    clearInterval(intervalDown);
    timerDownActive = false;
  }
});

let timerActive = false;
let intervalUp;
timer.addEventListener('click', () => {
  if (!timerActive) {
    intervalUp = setInterval(() => counter.innerText++);
    timerActive = true;
  } else {
    clearInterval(intervalUp);
    timerActive = false;
  }
});

increment.addEventListener('click', () => counter.innerText++);
decrement.addEventListener('click', () => counter.innerText--);
