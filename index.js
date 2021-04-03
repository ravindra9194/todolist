let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let todoItemsContainer2 = document.getElementById("todoItemsContainer2");


let todoList = [{
        text: "Head to work on time",
        uniqueNo: 1
    },
    {
        text: "Go for a run",
        uniqueNo: 2
    },
    {
        text: "Read a Book",
        uniqueNo: 3
    }
];

let todosCount = todoList.length;



function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);

    todoItemsContainer.removeChild(todoElement);
}

function onDeleteTodo2(todoId) {
    let todoElement = document.getElementById(todoId);
    todoItemsContainer2.removeChild(todoElement)
}


function createAndAppendTodo(todo) {
    let todoId = 'todo' + todo.uniqueNo;
    let labelId = 'label' + todo.uniqueNo;

    let todoElement = document.createElement("label");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);



    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");

    labelElement.id = labelId;
    labelElement.classList.add("label-text");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);





    let checkIconContainer = document.createElement("div");
    checkIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(checkIconContainer);

    let checkIcon = document.createElement("i");
    checkIcon.classList.add("far", "fa-check-circle", "check-icon");

    let checkIcon2 = document.createElement("i");
    checkIcon2.classList.add("fas", "fa-check-circle", "check-icon");


    checkIcon.onclick = function() {

        let todoElement = document.getElementById(todoId);

        todoItemsContainer.removeChild(todoElement);
        todoItemsContainer2.classList.add("blur");


        todoItemsContainer2.appendChild(todoElement);
        checkIconContainer.appendChild(checkIcon2)
        checkIconContainer.removeChild(checkIcon)

        deleteIcon.onclick = function() {
            onDeleteTodo2(todoId);
        };

    }
    checkIconContainer.appendChild(checkIcon)


    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

    deleteIcon.onclick = function() {
        onDeleteTodo(todoId);
    };

    deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}

function onAddTodo() {
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;

    if (userInputValue === "") {
        alert("Enter Valid Text");
        return;
    }

    todosCount = todosCount + 1;

    let newTodo = {
        text: userInputValue,
        uniqueNo: todosCount
    };

    createAndAppendTodo(newTodo);
    userInputElement.value = "";
}

addTodoButton.onclick = function() {
    onAddTodo();
};