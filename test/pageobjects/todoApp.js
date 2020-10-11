import Page from "./page";

class TodoApp extends Page {
  get newTodo() {
    return $("input.new-todo");
  }
  get createdTodo() {
    return $(
      "body > section > div > section > ul > li:nth-child(9) > div > label"
    );
  }
  get toggleCompleted() {
    return $(
      "body > section > div > section > ul > li:nth-child(2) > div > input"
    );
  }

  get toggleAllAsCompleted() {
    return $("body > section > div > section > label");
  }
  get itemstLeft() {
    return $("body > section > div > footer > span > strong");
  }
  get allFilter() {
    return $("body > section > div > footer > ul > li:nth-child(1) > a");
  }
  get activeFilter() {
    return $("body > section > div > footer > ul > li:nth-child(3) > a");
  }
  get completedFilter() {
    return $("body > section > div > footer > ul > li:nth-child(5) > a");
  }
  get clearCompleted() {
    return $("body > section > div > footer > button");
  }

  getTodos() {
    return $$("body > section > div > section > ul > li");
  }

  open(url) {
    super.open(url);
  }

  createTodo(todo) {
    this.newTodo.setValue(todo);
    browser.keys(["Enter"]);
  }

  createMultipleTodo(tasks) {
    tasks.forEach((task) => this.createTodo(task));
  }

  readTodo() {
    return this.createdTodo.getText().trim();
  }

  markAsCompleted(text) {
    const completedTodo = this.getTodoByText(text);
    completedTodo.$("input").click();
  }

  markManyAsCompleted(todos) {
    todos.forEach((todo) => this.markAsCompleted(todo));
  }

  markAllAsCompleted() {
    this.toggleAllAsCompleted.click();
  }

  filterActiveTodos(){
    this.activeFilter.click();
  }
  filterCompletedTodos() {
    this.completedFilter.click();
  }

  clearCompletedTodos() {
    this.clearCompleted.click();
  }

  getItemsLeft() {
    return parseInt(this.itemstLeft.getText().trim());
  }

  getTodoStatus(todo) {
    const completedTodo = this.getTodoByText(todo);
    return completedTodo.getAttribute("class");
  }

  checkFilteredItems(filter) {
    const todoArray = this.getTodoArray().flatMap((todo) =>
      this.getTodoStatus(todo)
    );
    const status = (a) => [...new Set(a)];
    return status(todoArray).includes(filter);
  }

  getTodosNumber() {
    return this.getTodos().length;
  }

  getTodoArray() {
    return this.getTodos().flatMap((ele) => ele.$("label").getText());
  }

  getTodoIndex(todo) {
    const array = this.getTodoArray();
    let found = -1;
    for (let i = 0; i < array.length; i++) {
      if (array[i] == todo) {
        found = i + 1;
        break;
      }
    }
    return found;
  }

  getTodoByText(todo) {
    const todoIndex = this.getTodoIndex(todo);
    return $(
      "body > section > div > section > ul > li:nth-child(" + todoIndex + ")"
    );
  }

  selectTodoEntry(todo) {
    const todoIndex = this.getTodoIndex(todo);
    return $(
      "body > section > div > section > ul > li:nth-child(" + todoIndex + ")"
    );
  }

  destroyTodoButton(index) {
    return $(
      "body > section > div > section > ul > li:nth-child(" +
        index +
        ") > div > button.destroy"
    );
  }

  deleteTodo(todo) {
    const todoIndex = this.getTodoIndex(todo);
    const todoItemToDestroy = this.getTodoByText(todo);
    todoItemToDestroy.moveTo();
    const destroyTodo = this.destroyTodoButton(todoIndex);
    destroyTodo.waitForClickable({ timeout: 5000 });
    destroyTodo.click();
  }

  findTodo(todo) {
    return this.getTodoArray().includes(todo);
  }

  editTodo(text, newText) {
    const todo = this.selectTodoEntry(text);
    todo.doubleClick();
    browser.keys(["Control", "a"]);
    browser.keys(["Delete"]);
    browser.keys(newText);
    browser.keys(["Enter"]);
  }
}

export default new TodoApp();
