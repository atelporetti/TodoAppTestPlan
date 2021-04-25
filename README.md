# TodoAppTestPlan
Test Plan &amp; Automation of one Test Case

## Table of contents

* Test Plan

    *   Functional

        *   Login
            * Login succesful with Valid Credentials
            * Login failed with an invalid Username and invalid Password
            * Login failed with a Valid Username and invalid Password
            * Login failed with an invalid Username and Valid Password
            * Login failed with blank Username or Password
            * Verify validation message is displayed when Invalid Credentials are entered
            * Forgot password functionality
            * Limit on the total number of unsuccessful login attempts
            * Verify password is in encrypted form (masked format) when entered
            * Verify that cursor is focused on the 'Email Address' text box on the page load
            * Verify that Login screen contains Username, Password, Login button & Forgot password link elements
            * Verify that the logout link is redirected to login/home page
            * Verify that Enter key works as a substitute for the Login button
            * Login succesfull with new password after changing the password
            * Login failed with old password after changing the password
            * Login succesfull in diferent browsers

        *   Task Board

            * Verify Task Board contains TO DO, IN PROGRESS and DONE columns
            * Verify Task Board contains Create and Refresh buttoms
            * Verify Task Board contains Title, User, Notification, Task Board and All Tasks links
            * Verify count of total tasks in TO DO column is correct
            * Verify count of total tasks in IN PROGRESS column is correct
            * Verify count of total tasks in DONE column is correct
            * Verify it is possible to scroll on TO DO column when tasks cannot be displayed all on the same screen
            * Verify it is possible to scroll on IN PROGRESS column when tasks cannot be displayed all on the same screen
            * Verify it is possible to scroll on DONE column when tasks cannot be displayed all on the same screen
            * Verify task number increases by one for every tasks created
            
            * Create
                * Verify modal tasks opens on click Create buttom
                * Verify Cancel, Create buttoms elements are present
                * Verify Drag and Drop funtionality
                * Verify Number input is bloked
                * Task create failed when requiered input are blank
                * Verify validation message is displayed when Invalid Credentials are entered
                * Verify Status field is set to 'To Do' by default
                * Verify that cursor is focused on the 'Title' text box on create task modal
                * 
                * 
                
            
        *   Profile
        *   All Tasks


    *   Non Funtional

        *  Timeout Login session
        *  Simultaneous Logins
        *  Vulnerability to SQL inyection
        *  Verify whether all the text boxes have a minimum and maximum length.
        * Verify that password stores in a database in an encrypted format
        * Verify Automatic Login succesful when cookies are present
        * Verify User is able to Login when cookies are cleared
        * Login succesful with same credentials at different browsers at the same time
        * Login failed with diferent credentials at same browser at the same time
