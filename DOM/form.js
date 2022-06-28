const foodForm = document.getElementById('foodForm');
const ul = document.querySelector('ul');
console.log(foodForm.favFood.value);
foodForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const listItem = document.createElement('li');
  listItem.innerText = foodForm.favFood.value;
  ul.append(listItem);
  console.log(e);
  foodForm.reset();
});
