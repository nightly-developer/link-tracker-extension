
//use let only if variable alue is updating in program otherwise use const 
let myLeads = ["dsf"];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const delBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn")

//myLeads = JSON.parse(myLeads)

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
  myLeads = [...myLeads, ...leadsFromLocalStorage]
  render(myLeads)
}

function render(leads) {
  let ListItem = '';
  for (let i = 0; i < leads.length; i++) {
    ListItem += `<li><a target='_blank' href = '${leads[i]}'> ${leads[i]}</li>`;
  }
  ulEl.innerHTML = ListItem;
} 

inputBtn.addEventListener("click", () => {  
  if (inputEl.value != '') {
    myLeads.push(inputEl.value);
    render(myLeads);
    inputEl.value = '';
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
  }
})

delBtn.addEventListener("dblclick", () => {
  myLeads = []
  render(myLeads)
})

tabBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true},function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })
})

function storeLeads() {
  let myLeadsString = JSON.stringify(myLeads);
  localStorage.setItem("myLeads", myLeadsString);
  console.log(localStorage.getItem("myLeads"));
}
