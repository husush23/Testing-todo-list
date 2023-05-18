let todos = [];

function addTodo(task) {
  todos.push(task);
  return todos;
}

function removeTask(task) {
  todos = todos.filter(todo => todo.id !== task.id);
  todos.forEach((todo, i) => {
    todo.id = i;
  });
}

const tasks = [
  {
    id: 1,
    desc: 'task one',
    complete: false,
  },
  {
    id: 2,
    desc: 'task two',
    complete: false,
  },
  {
    id: 3,
    desc: 'task three',
    complete: false,
  },
];

function editTodo(task) {
  const { id, desc } = task;
  const editedTask = tasks.find((task) => task.id === id);
  editedTask.desc = desc;
}

function clearAllCompleted() {
  const newTasks = tasks.filter((task) => !task.complete);
  return newTasks;
}

function updateTask(taskId) {
  const task = tasks.find((task) => task.id === taskId);
  if (task) task.complete = true;
  return task;
}

exports.addTodo = addTodo;
exports.removeTask = removeTask;
// exports.editTodo = editTodo;
// exports.tasks = tasks;
// exports.clearAllCompleted = clearAllCompleted;
// exports.updateTask = updateTask;
