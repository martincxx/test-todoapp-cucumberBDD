import { Given } from "cucumber";
import todoApp from "../pageobjects/todoApp";

import { TODO_ARRAY } from "../../utilities/constants";

Given(/^I am on the app$/, function () {
  todoApp.open("react");
  todoApp.createMultipleTodo(TODO_ARRAY);
});
