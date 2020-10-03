@Edit
Feature: Edit todo

    As a user
    I want to edit my todo
    So that I can fix my schedule

    Scenario Outline: Edit todo
        Given I am on the app
        When I change the <text> todo with <new_text>
        Then the todo text should be replaced with <new_text>
        Examples:
            | text            | new_text             |
            | "Buy groceries" | "Buy vegan products" |