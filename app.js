const add = document.querySelector(".add");
const list = document.querySelector(".todo-container");
const textInput = document.querySelector(".textinput");

document.addEventListener('DOMContentLoaded',gettodos);
list.addEventListener("click", deletetodo);
add.addEventListener("click", addtext);


textInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    add.click();
  }
});

function addtext(e) {
  if (textInput && textInput.value) {
    
    e.preventDefault();
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const newTodo = document.createElement("h2");
    newTodo.classList.add("item");
    newTodo.innerText = textInput.value;
    //added the todo to local storage
    savetodos(textInput.value);

    const deletebutton = document.createElement("button");
    deletebutton.classList.add("delete");
    deletebutton.classList.add("fas");
    deletebutton.classList.add("fa-trash");

    const checkbutton = document.createElement("button");
    checkbutton.classList.add("check");
    checkbutton.classList.add("fas");
    checkbutton.classList.add("fa-check");

    todo.appendChild(newTodo);
    todo.appendChild(deletebutton);
    todo.appendChild(checkbutton);
    list.appendChild(todo);
    textInput.value = "";
  } else {
    alert("PLEASE TYPE A TODO AND ADD");
  }
}

function deletetodo(e) {
  const item = e.target;

  if (item.classList[0] == "delete") {
    const del = item.parentElement;
    removetodos(del);
    del.classList.add("fall");
    del.addEventListener("transitionend", function () {
      del.remove();
    });
    
  }

  if (item.classList[0] == "check") {
    const done = item.parentElement;
    done.children[0].classList.toggle("completedtext");
    done.children[1].classList.toggle("completed");
    done.children[2].classList.toggle("completed");
    console.log(done.children[0]);
  }
}

function savetodos(todo1) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function gettodos() {
  console.log("hello")
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function(todo1){

    const todo = document.createElement("div");
    todo.classList.add("todo");

    const newTodo = document.createElement("h2");
    newTodo.classList.add("item");
    newTodo.innerText = todo1;
    //added the todo to local storage
    

    const deletebutton = document.createElement("button");
    deletebutton.classList.add("delete");
    deletebutton.classList.add("fas");
    deletebutton.classList.add("fa-trash");

    const checkbutton = document.createElement("button");
    checkbutton.classList.add("check");
    checkbutton.classList.add("fas");
    checkbutton.classList.add("fa-check");

    todo.appendChild(newTodo);
    todo.appendChild(deletebutton);
    todo.appendChild(checkbutton);
    list.appendChild(todo);
    textInput.value = "";
  
    })

  }

function removetodos(todo1){

    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoindex = todo1.children[0].innerText;
    todos.splice(todos.indexOf(todoindex),1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

