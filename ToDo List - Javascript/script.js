var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var div = document.createElement("div");
  var li = document.createElement("li");
  var delButton = document.createElement("button");
  li.appendChild(document.createTextNode(input.value));
  div.append(li, delButton);
  ul.appendChild(div);
  li.classList.add("taskClass");
  delButton.classList.add("delClass");
  delButton.innerHTML = "Del";
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function handleUlClick(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
  if (event.target.className === "delClass") {
    event.target.parentElement.remove();
  }
}

ul.addEventListener("click", handleUlClick);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
