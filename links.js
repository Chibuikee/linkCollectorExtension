const inputEl = document.getElementById("input-el");
const links = document.getElementById("linkss");
const saveBtn = document.getElementById("save-btn");
const home = document.getElementById("chibs");
const saveTabBtn = document.getElementById("tab-btn");
const deleteAllBtn = document.getElementById("deleteall-btn");
let myLinks = [];

function render(linksCtn) {
  let listItems = "";
  for (let i = 0; i < linksCtn.length; i++) {
    listItems += `
        <li>
            <a target='_blank' href='${linksCtn[i]}'>
                ${linksCtn[i]}
            </a>
        </li>`;
  }
  links.innerHTML = listItems;
}

saveBtn.addEventListener("click", saveLink);
function saveLink() {
  myLinks.push(inputEl.value);
  render(myLinks);
  inputEl.value = "";
  savelocal();
}

function savelocal() {
  localStorage.setItem("myLinks", JSON.stringify(myLinks));
}

let linksFromLocalStorage = JSON.parse(localStorage.getItem("myLinks"));
if (linksFromLocalStorage) {
  myLinks = linksFromLocalStorage;
  render(myLinks);
}
home.addEventListener("click", function () {
  links.textContent = "Bravo!!!";
});

deleteAllBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLinks = [];
  render(myLinks);
});

saveTabBtn.addEventListener("click", function tabsLinks() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLinks.push(tabs[0].url);
    localStorage.setItem("myLinks", JSON.stringify(myLinks));
    render(myLinks);
  });
});

// function dropLinks() {
//     for (let i = 0; i < myLinks.length; i++) {
//     links.innerHTML +="<ul>" + "<li>" + myLinks[i] + "</li>" +"</ul>"
//     }
// }
// dropLinks()

// To create a list directly from Java without html
// for (let i = 0; i < myLinks.length; i++) {
//      const li = document.createElement("li")
// li.textContent = myLinks[i]
// links.append(li)
// }
// outputting a list in a more efficient way

// localStorage.setItem("chibs", "hello")
// console.log(localStorage.getItem("chibs"))

// let myLeads = `["www.myleads.com"]`
// myLeads = JSON.parse(myLeads)
// myLeads.push("awesome")
// myLeads = JSON.stringify(myLeads)
// console.log( myLeads)
// const li = document.createElement("li")
// // li.textContent = "It's working"
// links.append("waohh!!") /*you can display to a user directly*/
// const tabs = [
//   {url: "www.figma.com"}
// ]
