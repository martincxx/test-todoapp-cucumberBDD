@DeleteTodo
Feature: Delete todo

    As a user
    I want to delete a wrong todo
    so that I know my list is consistent.

    Scenario: Delete todo
        Given I am on the app
        When I delete the "Go running" todo
        Then the todo "Go running" is no longer existing
        And the number of items is decreased by 1