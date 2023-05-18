const { addTodo, removeTask } = require('../_mocks_/functions.js');

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
});
