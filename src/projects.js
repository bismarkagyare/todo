
export class Projects {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  editTodoById(id, updatedProperties) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return Object.assign({}, todo, updatedProperties);
      } else {
        return todo;
      }
    });
  }

  deleteTodoById(id) {
    const updatedTodos = this.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.todos = updatedTodos;
  }

  filterCompletedTodos() {
    return this.todos.filter(todo => {
      todo.completed === true;
    });
  }

}