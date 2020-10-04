import { Then } from "cucumber";
import todoApp from "../pageobjects/todoApp";

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
