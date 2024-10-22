let input = document.getElementById("todoInput")
let btn = document.getElementById('addTaskBtn')


function add() {
    var todoTask = document.getElementById('todoList')
    let value = input.value
    if (value =="") {
        alert("Enter the todo!")
    }else{
    let todoElem = document.createElement("li")
    todoElem.innerText = value
    todoTask.appendChild(todoElem)
    input.value = ""
}
}