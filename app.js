const add = document.querySelector(".add");
const list = document.querySelector(".todo-container");
const textInput = document.querySelector(".textinput");


add.addEventListener("click", addtext);

var i = 0

function addtext(e) {
    i  = i+1
    e.preventDefault();
    console.log("add")
    const newTodo = document.createElement("h2");
    newTodo.classList.add('item'+i);
    newTodo.innerText = textInput.value;
    list.appendChild(newTodo);

}


