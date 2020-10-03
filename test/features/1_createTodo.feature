@Create @Pending
Feature: Create todo

    As a user
    I want to mark a todo as completed
    so that I keep track of completed items.

    Scenario: Create a todo
        Given I am on the app
        When I add a "Buy license" todo
        Then An item with the text "Buy license" is shown on the list
