@ClearCompleted
Feature: Clear completed todos

    As a user
    I want to clear my list of completed todos
    So that I can only focus on the active ones.

    Background: Several completed todos
        Given I am on the app
        And there are several completed todos

    Scenario: Clear completed todos

        When I clear completed todos
        Then no "completed" todos are shown