import { Projects } from "./projects";
import { Todo } from "./todo";

const myProject = new Projects('cook');
const newTodo = new Todo('rice', 'cook rice', '05/04/2023', 'high', true);

myProject.addTodoToProject(newTodo);
console.log(myProject.getAllTodos());