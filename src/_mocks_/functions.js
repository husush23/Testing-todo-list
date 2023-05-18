let todos = [];

function addTodo(task) {
  todos.push(task);
  return todos;
}

function removeTask(task) {
  todos = todos.filter((todo) => todo.id !== task.id);
  todos.forEach((todo, i) => {
    todo.id = i;
  });
}

exports.addTodo = addTodo;
exports.removeTask = removeTask;
