import { Given } from "cucumber";
import todoApp from "../pageobjects/todoApp";

import { TODO_ARRAY, MARK_COMPLETED } from "../../utilities/constants";

Given(/^I am on the app$/, function () {
  todoApp.open("react");
  todoApp.createMultipleTodo(TODO_ARRAY);
});

Given(/^there are several completed todos$/, function () {
  todoApp.markManyAsCompleted(MARK_COMPLETED);
});
