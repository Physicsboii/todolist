const add = document.querySelector(".add");
const list = document.querySelector(".todo-container");
const textInput = document.querySelector(".textinput");


add.addEventListener("click", addtext);

var i = 0


textInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    add.click();
  }
});

function addtext(e) {
    
    if (textInput && textInput.value) {
        i  = i+1
        e.preventDefault();
        console.log("add")
        const newTodo = document.createElement("h2");
        newTodo.classList.add('item'+i);
        newTodo.innerText = textInput.value;
        list.appendChild(newTodo);
        textInput.value = "";
    }
    else{
        alert("PLEASE TYPE A TODO AND ADD")
    }
}
