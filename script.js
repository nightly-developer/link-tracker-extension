
//use let only if variable alue is updating in program otherwise use const 
let myLead = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {  
  if (inputEl.value != '') {
    myLead.push(inputEl.value);
    listItemRender();
    inputEl.value = '';
  }
})


function listItemRender() {
  let ListItem = '';
  for (let i = 0; i < myLead.length; i++) {
    ListItem += `<li><a target='_blank' href = '${myLead[i]}'> link${i}</li>`;
  }
  ulEl.innerHTML = ListItem;
} 
