@CompleteTodo
Feature: Mark todo as completed

    As a user
    I want to mark a todo as completed
    so that I keep track of completed items.

    Scenario: Mark a todo as completed
        Given I am on the app
        When I mark the "Play the guitar" todo as completed
        Then "Play the guitar" is shown on the list as "completed"
