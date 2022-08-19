# Welcome to OTIF Coding Challenge

The tasks are as follows:
1. Create a "Sign In" page with username and password input with a button to click
2. Create a "Check Parcel" page with a table and a search bar
3. Connect to endpoint(url) and send the username and password to check whether the sign-in passes or not
    3.1 The test username is "gyf"
    3.2 The test password is "123456789"
    3.3 If pass: Navigate to "Check Parcel" page
    3.4 If not: display a warning text "Sign In Failed!"
4. Retrieve data from endpoint(url) and display the name and rate of parcels
5. When user inputs text in search, filter the parcels and only display the ones matching the input(match from the start of the name)
6. When user clicks the table header, the table should change the sequence of data according to the ascending order or descending order
7. Add routes for "Sign In" and "Check Parcel" to the two buttons in "Intro" page(which is already provided):
    7.1 Before user successully login, click any button should navigate user to your "Sign In" page
    7.2 After user successfully login, Click the button should navigate user to the corresponding page