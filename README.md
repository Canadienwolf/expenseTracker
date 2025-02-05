# ExpenseTracker

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

## Backend
To start the backend one has to do the following.

IMPORTANT The terminal has to be located in:
Backend/Signicat-Backend/Signicat-Backend

First one needs to trust the certificate for the backend to work.
dotnet dev-certs https --trust

Second, one has to accept that this site can run
https://localhost:44331/swagger/index.html

Then run:
dotnet run --launch-profile "https"

## Frontend
Open the project using IDE of your choice.

To start the frontend application, navigate to the following folder in the terminal:
(Signicat\expenseTracker)
npm run start

## Design choices
- Added pie chart on the Home menu as it becomes quick for the user to see what expenses one has had.
- On the pie chart one is able to remove expenses one does not want to see by clicking on the category on the bottom.
- Made the navigation menu a side-bar on the left side that is always visible for ease of access for the users. This will change into a expandable hamburger menu when one is on a smaller screen. If i had more time i would have changed the sidebar to be sticky, to make sure that it would follow as the user was scrolling vertically.
- To make it easier for the user to understand which line is being deleted or edited, I have added the buttons on the expense line. If given more time i would have tested the possibility of clicking on the line and then get a dlg which asks whether one wants to delete of update.
- I have added "Add expense" on top above the expense form. In the future i would have changed this to a round button with "+" on the right side of the "Expenses" with a tooltip that says "Add expense". I Would also have changed the "+" button to be either on the right side or middle of the screen on a phone.
- When clicking on the form tabs, one can sort the list depending on which header is clicked. Here i would also have added a sort icon to make it easier for the user to understand what they are for and try to make it easier to see that its a clickable button to make changes.

## Challenges faced
- There were issues with making Angular 19 working toghether with Bootstrap as it has not been updated to support the newest version of Angular yet. There was also an issue with finding good documentation when it came to using bootstrap for Angular.
- Had issues with getting the ng-bootstrap components to work in Angular out of the box without tweaking them, to varying degree.
-  There was issue with installing bootstrap using Angular CLI and Node.js both as i was using version 16 of Angular the first time and then had to delete the project and upgrade Angular to 19 and then creating the project again and importing the dependencies.
