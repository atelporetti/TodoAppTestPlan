@taskboard 
Feature: Create Task

    @createTask @run
    Scenario: Task create succesfull when required input is completed
        Given user in login page
        When email field is completed with "aaxelporetti@gmail.com"
        And password field is completed with "atel12345"
        And press the 'Login' button
        Then user enters the application
        Given Task Board is displayed
        When press the 'Create' button
        And opens create task window
        And task title field is completed with "Schedule next interview :)"
        And press the 'Create' button
        Then task is displayed in 'To DO' column