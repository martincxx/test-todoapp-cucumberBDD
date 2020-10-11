import { Then } from "cucumber";
import todoApp from "../pageobjects/todoApp";
import { TODO_ARRAY } from  "../../utilities/constants"

Then(/^An item with the text "([^"]*)?" is shown on the list$/, (text) => {
  todoApp.readTodo().should.equal(text);
});

Then(/^"([^"]*)?" is shown on the list as "([^"]*)?"$/, (todo, status) => {
  todoApp.getTodoStatus(todo).should.equal(status);
});

Then(/^there are no items let to complete$/, () => {
  todoApp.getItemsLeft().should.equal(0);
});

Then(/^the todo "([^"]*)?" is no longer existing$/, (text) => {
  todoApp.findTodo(text).should.be.false;
});

Then(/^the todo text should be replaced with "([^"]*)?"$/, (text) => {
  todoApp.getTodoByText(text).getText().trim().should.equal(text);
});

Then(/^no "([^"]*)?" todos are shown$/, (filter) => {
  todoApp.checkFilteredItems(filter).should.be.false;
});

Then(/^the number of items is increased by 1$/, () => {
  const todoNumber = TODO_ARRAY.length + 1
  todoApp.getItemsLeft().should.equal(todoNumber);
});

Then(/^the number of items is decreased by 1$/, () => {
  const todoNumber = TODO_ARRAY.length - 1
  todoApp.getItemsLeft().should.equal(todoNumber);
});