const todoInput = document.querySelector('.todo-input')
const todoBtn = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')


function addTodo() {
  event.preventDefault()
  const todoDiv = document.createElement("div")
  todoDiv.classList.add("todo")

  if (todoInput.value == "") {
    alert("Input can not be empty!")
    btn.disabled = true;
  }
  const newTodo = document.createElement("li")
  newTodo.innerText = todoInput.value
  newTodo.classList.add("todo-item")
  todoDiv.appendChild(newTodo)


  const completeBtn = document.createElement("button")
  completeBtn.innerHTML = "<i class = 'fas fa-check'></i>"
  completeBtn.classList.add("completeBtn")
  todoDiv.appendChild(completeBtn)


  const editBtn = document.createElement("button")
  editBtn.innerHTML = "<i class='fas fa-pencil-alt'></i>"
  editBtn.classList.add("editBtn")
  todoDiv.appendChild(editBtn)

 
  const trashBtn = document.createElement("button")
  trashBtn.innerHTML = "<i class = 'fas fa-trash'></i>"
  trashBtn.classList.add("trashBtn")
  todoDiv.appendChild(trashBtn)

  todoList.appendChild(todoDiv)

  
  todoInput.value = ""

  completeBtn.setAttribute("onclick", "completeItem(this)")
  trashBtn.setAttribute("onclick", "deleteItem(this)")
  editBtn.setAttribute("onclick", "editItem(this)")

}

function completeItem(e) {
  e.parentNode.classList.toggle("completed")
}
function deleteItem(e) {
  e.parentNode.remove();
}
function editItem(e) {
  var val = e.parentNode.firstChild.innerText;
  var editValue = prompt("Enter edit value", val)

  e.parentNode.firstChild.innerHTML = editValue
}

function deleteAll() {
  event.preventDefault()
  todoList.innerHTML = ""
}



