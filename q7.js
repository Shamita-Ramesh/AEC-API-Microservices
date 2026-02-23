let todos = [];

function addTask(task) {
  todos.push(task);
}

function viewTasks() {
  console.log(todos);
}

function updateTask(index, newTask) {
  todos[index] = newTask;
}

function deleteTask(index) {
  todos.splice(index, 1);
}

// testing
addTask("Study JS");
addTask("Do assignment");
viewTasks();
updateTask(0, "Study JavaScript deeply");
deleteTask(1);
viewTasks();