// Getting all needed elements
const allTasks = document.getElementById("all");
const pendingTasks = document.getElementById("pending");
const finishedTasks = document.getElementById("done");

// Creating the selection
function createSelection(newTask) {
    const select = document.createElement('select');
    select.classList.add('buttonStyle');

    // Array with objects that correspond to each option
    const options = [
        { value: 'A', text: 'All' },
        { value: 'P', text: 'Pending' },
        { value: 'F', text: 'Finished' },
        { value: 'X', text: 'Remove' }
    ];

    // Create all the options depending on the objects created in the array above
    options.forEach(option => {
        const optionEl = document.createElement('option');
        optionEl.value = option.value;
        optionEl.textContent = option.text;
        select.appendChild(optionEl);
    });

    // If new selection go to the move logic
    select.addEventListener('change', function() {
        moveTask(newTask, select.value);
    });

    return select;
}

// Move task do desired column
function moveTask(task, destination) {
    if (destination === 'X') {
        task.remove();
    } else {
        switch (destination) {
            case 'A':
                allTasks.appendChild(task);
                break;
            case 'P':
                pendingTasks.appendChild(task);
                break;
            case 'F':
                finishedTasks.appendChild(task);
                break;
        }
    }
}

// Create wanted task
const addTask = document.getElementById("addTask").addEventListener("click", function () {
    const task = document.getElementById("task").value;
    const newTask = document.createElement("p");
    newTask.className = "taskStyling";
    newTask.textContent = task;
    allTasks.appendChild(newTask);

    const selection = createSelection(newTask);
    newTask.appendChild(selection);
});
