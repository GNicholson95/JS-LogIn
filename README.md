# JS-LogIn. 

NOTE: google flags this as a dangerous site but it is just a simple project example.

username:
George
Amy
Luka

password:
pass1
pass2
pass3

This is a JavaScript code that validates a user's username and password input against a pre-defined database of usernames and passwords. It then displays an appropriate welcome message or error message based on the validation result. 
The code first creates an array of objects containing the username and password pairs. It then gets the user input from the respective input fields on a form, and checks it against the database using a function named isUserValid(). 
The function loops through the database array, and returns true if it finds a match. If no match is found, it returns false. Finally, an event listener is added to the form that listens for a submit event. When the form is submitted, it calls the isUserValid() function, and displays a welcome message if the result is true, or an error message if the result is false.
