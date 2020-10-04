import { When } from "cucumber";
import todoApp from "../pageobjects/todoApp";

When(/^I add a "([^"]*)?" todo$/, (todo) => {
  todoApp.createTodo(todo);
});

When(/^I mark the "([^"]*)?" todo as completed$/, (todo) => {
  todoApp.markAsCompleted(todo);
});

When(/^I mark all todos as completed$/, () => {
  todoApp.markAllAsCompleted();
});

When(/^I delete the "([^"]*)?" todo$/, (todo) => {
  todoApp.deleteTodo(todo);
});

When(/^I change the "([^"]*)?" todo with "([^"]*)?"$/, (text, newText) => {
  todoApp.editTodo(text, newText);
});

When(/^I select the completed filter$/, () => {
  todoApp.filterCompletedTodos();
});
