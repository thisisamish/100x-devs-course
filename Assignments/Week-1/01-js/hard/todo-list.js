/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  isIndexValid(index) {
    if (index >= 0 && index < this.todos.length) return true;
    return false;
  }
  add(todo) {
    this.todos.push(todo);
  }
  remove(indexOfTodo) {
    if (this.isIndexValid(indexOfTodo)) this.todos.splice(indexOfTodo, 1);
    else throw new Error("Invalid index");
  }
  update(index, updatedTodo) {
    if (this.isIndexValid(index)) this.todos[index] = updatedTodo;
    else throw new Error("Invalid index");
  }
  getAll() {
    return this.todos;
  }
  get(indexOfTodo) {
    if (this.isIndexValid(indexOfTodo)) return this.todos[indexOfTodo];
    else throw new Error("Invalid index");
  }
  clear() {
    this.todos = [];
  }
}

const todo = new Todo();
console.log(todo.getAll());
console.log(todo.add("Do this"));
console.log(todo.add("Do that"));
console.log(todo.add("Do m"));
console.log(todo.add("Do n"));
console.log(todo.getAll());
console.log(todo.update(1, "Do whatever"));
console.log(todo.getAll());
console.log(todo.get(0));
console.log(todo.remove(1));
console.log(todo.getAll());
console.log(todo.clear());
console.log(todo.getAll());
