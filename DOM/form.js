const foodForm = document.getElementById('foodForm');
const ul = document.querySelector('ul');
foodForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const listItem = document.createElement('li');
  listItem.innerText = foodForm.favFood.value;
  ul.append(listItem);
  foodForm.reset();
});

foodForm.addEventListener('submit', () => {
  console.log('hii');
});
