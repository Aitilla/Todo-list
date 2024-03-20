//Database
const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database',
    connectionLimit: 10 
});



const allTasks = document.getElementById("all");
const pendingTasks = document.getElementById("pending");
const finishedTasks = document.getElementById("done");

function moveLogic(newTask) {
    if (newTask.parentElement === allTasks) {
        pendingTasks.appendChild(newTask);
    } else if (newTask.parentElement === pendingTasks) {
        finishedTasks.appendChild(newTask);
    } else if (newTask.parentElement === finishedTasks) {
        allTasks.appendChild(newTask);
    }
}

// Create wanted task and buttons to either move or remove the task
const addTask = document.getElementById("addTask").addEventListener("click", function () {
    const task = document.getElementById("task").value;
    const newTask = document.createElement("p");
    newTask.id = "taskStyling";
    newTask.textContent = task;
    allTasks.appendChild(newTask);
    
    // Creating the remove button
    const removeBtn = document.createElement('button')
    removeBtn.id = 'buttonStyle'
    removeBtn.innerText = 'X'
    newTask.appendChild(removeBtn)
    removeBtn.addEventListener('click', function(){
        newTask.remove()
        removeBtn.remove()
    })

    // Creating the move button
    const moveBtn = document.createElement('button')
    moveBtn.id = 'buttonStyle'
    moveBtn.innerText = '-'
    newTask.appendChild(moveBtn)
    moveBtn.addEventListener('click', function(){
        moveLogic(newTask);
    });

    return newTask;
});
