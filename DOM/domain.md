```
const list = [li,li,li]

createForm() => createElements form(add submit event), input, btn
createList() => createElements ul
createListItem() => createElements li
createPriotityCheckBox() => createElements input(type checkbox)
createArchivedCheckBox() => createElements input(type checkbox)

{
  li: <li>input.value</li>
  priority: bool
  archived: bool
}

[<li>input.value</li>, bool, archived]

renderList() => {
  append list.forEach to ul
  if list item priority == true make red
  if list item archived == true render in archived list
}

checkInputValid() => input value is not empty
checkListLength() => list length <= 3

form.addEventLisdtener('submit',e => {
  e.preventDefault;
})
```
