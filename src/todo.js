import { format } from 'date-fns';

export class Todo {
  constructor(title, description, dueDate, priority, completed = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  getDueDate() {
    return this.dueDate;
  }

  getFormattedDueDate() {
    return format(this.dueDate, 'yyyy-MM-dd');
  }
}