const {
  addTodo,
  removeTask,
  editTodo,
  tasks,
  clearAllCompleted,
  updateTask,
} = require('../_mocks_/functions.js');

describe('Add tasks functions', () => {
  test('when the user adds task it should not be empty', () => {
    const item = addTodo({
      task: 'Add task',
      id: 1,
      status: false,
    });
    expect(item).not.toEqual([]);
  });

  test('Adds new tas', () => {
    expect(
      addTodo({
        task: 'hi',
        status: false,
        id: 2,
      }),
    ).not.toBe([]);
  });
  test('When the removes the task it should remove', () => {
    expect(
      removeTask({
        task: 'Delete item',
        id: 3,
        status: false,
      }),
    ).not.toStrictEqual([]);
  });

  test('Deletes the task when user deletes', () => {
    const deletedItem = removeTask({
      task: 'new todo',
      status: false,
      id: 4,
    });
    expect(deletedItem).not.toStrictEqual([]);
  });

  test('edit', () => {
    const editedTask = {
      id: 1,
      desc: 'task one',
      complete: false,
    };
    editTodo(editedTask);
    expect(tasks[0].desc).toBe('task one');
  });

  test('clearAll', () => {
    tasks[1].complete = true;

    const remainingTasks = clearAllCompleted();

    expect(remainingTasks.length).toBe(2);
    expect(remainingTasks[0].desc).toBe('task one');
    expect(remainingTasks[1].desc).toBe('task three');
  });

  test('update', () => {
    const taskId = 1;
    const task = updateTask(taskId);

    expect(task.complete).toBe(true);
  });
});
