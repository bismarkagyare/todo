import { format } from 'date-fns';
import { Todo } from './todo';

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

  getAllTodos() {
    return this.todos;
  }

  addTodoToProject(todo) {
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

  filterTodosByToday() {
    const today = new Date();
    const formattedToday = format(today, 'yyyy-MM-dd');

    return this.todos.filter((todo) => {
      const formattedDueDate = format(todo.dueDate, 'yyyy-MM-dd');
      return formattedToday === formattedDueDate;
    });
  }

  filterTodosByWeek() {
    const today = new Date();
    const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDay() + 7);
    const formattedNextWeek = format(nextWeek, 'yyyy-MM-dd');
    
    return this.todos.filter((todo) => {
      const formattedDueDate = todo.dueDate;
      return formattedDueDate >= today && formattedDueDate <= formattedNextWeek;
    });
  }

}