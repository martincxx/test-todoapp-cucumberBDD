@UseFilters
Feature: Use filters

    As a user
    I want to filter my todo list
    So that I have a clearer view of my completed/active todos.

    Background: User is in the app
        Given I am on the app
        When I mark the "Do the dishes" todo as completed

    @OnlyCompleted
    Scenario: 1 Show only completed todos

        When I select the completed filter
        Then no "active" todos are shown

    @OnlyActive
    Scenario: 2 Show only active todos

        When I select the active filter
        Then no "completed" todos are shown