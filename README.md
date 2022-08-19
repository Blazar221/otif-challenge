# Welcome to OTIF Coding Challenge

The tasks are as follows:<br/>
1. The "Intro" page is provided as follows:<br/>
![Intro Page](https://github.com/Blazar221/otif-challenge/blob/master/instruction/intro.png?raw=true)
2. Create a "Sign In" page with username and password input and a button to click<br/>
Here is an example:
![Sign In Page](https://github.com/Blazar221/otif-challenge/blob/master/instruction/signIn.png?raw=true)
3. Create a "Check Parcel" page with a table and a search bar<br/>
Here is an example:
![Check Parcel Page](https://github.com/Blazar221/otif-challenge/blob/master/instruction/checkParcel.png?raw=true)
4. Connect to endpoint(url) and send the username and password to check whether the sign-in passes or not<br/>
    4.1 The test username is "gyf"<br/>
    4.2 The test password is "123456789"<br/>
    4.3 If pass: navigate to "Check Parcel" page<br/>
    4.4 If not: display a warning text "Sign In Failed!"<br/>
![Sign In Failed Page](https://github.com/Blazar221/otif-challenge/blob/master/instruction/signInFailed.png?raw=true)
5. Retrieve data from endpoint(url) and display the name and rate of parcels in your "Check Parcel" page
6. When user inputs text in search, filter the parcels and only display the ones matching the input(match from the start of the name)
![Check Parcel Page](https://github.com/Blazar221/otif-challenge/blob/master/instruction/filter.png?raw=true)
7. When user clicks the table header, the table should change the sequence of data according to the ascending order or descending order<br/>
Here is an example when clicking "Parcel" header make the data sort by the name
![Sort By Name](https://github.com/Blazar221/otif-challenge/blob/master/instruction/sortByName.png?raw=true)
8. Add routes for "Sign In" and "Check Parcel" to the two buttons in "Intro" page:<br/>
    8.1 Before user successully login, click any button should navigate user to your "Sign In" page<br/>
    8.2 After user successfully login, Click the button should navigate user to the corresponding page<br/>
9. Add routes for the "Back" link of the header of your two pages, and when user click it, navigate to the "Intro" Page