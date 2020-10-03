@Allcompleted @Pending
Feature: Mark all todos as completed

    As a user
    I want to mark all my todos as completed
    So that I avoid marking them one by one

    Scenario: Mark a todo as completed
        Given I am on the app
        When I mark all todos as completed
        Then there are no items let to complete
