document.body.style =
  'height: 90vh; display: flex; flex-direction: column; align-items: center; justify-content: center;';
const h1 = document.createElement('h1');
h1.style.fontSize = '4rem';
h1.innerText = 1;
document.body.append(h1);
const interval = () => {
  const timer = setInterval(() => {
    h1.innerText--;
    if (h1.innerText == 0) {
      flash();
      clearInterval(timer);
    }
  }, 1000);
};
let flashInterval;
const flash = () => {
  flashInterval = setInterval(() => {
    h1.style.color = 'red';
    setTimeout(() => {
      h1.style.color = 'black';
    }, 250);
  }, 500);
};

interval();

const createResetBtn = () => {
  const btn = document.createElement('button');
  btn.style.fontSize = '2rem';
  btn.innerText = 'reset';
  document.body.append(btn);

  btn.addEventListener('click', () => {
    clearInterval(flashInterval);
    h1.innerText = 10;
    h1.style.color = 'black';
    interval();
  });
};

createResetBtn();
