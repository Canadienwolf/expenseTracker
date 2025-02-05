# ExpenseTracker

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

## Backend
To start the backend one has to do the following.

!important The terminal has to be located in:
Backend/Signicat-Backend/Signicat-Backend

Then run:
dotnet run --launch-profile "https"

## Frontend

To start the frontend application one can run the following in the project folder:
(Signicat\expenseTracker)
npm run start

## Design choices
- Added pie char on the Home menu as it becomes quick for the user to see what expenses on has had.
- On the pie chart one i able to remove expenses one does not want to see by clicking on the category on the bottom.
- Mad the navigation menu a bar on the left side that is always visible for ease of access for the users. This will change into a expandable hamburger menu when one is on a smaller screen. If i had more time i would have changed the sidebar to be stickiet to make sure that it would follow as the user was scrolling vertically.
- To make it easier for the user to understand which line is being deleted or edited, i have added the buttons on the expense line. If given more time i would have tested the possibility of clicking on the line and then get a dlg which asks whether one wants to delete of Update.
- Have added "Add expense" on top above the expense tab. In the future i would have changed tihs to a round button with "+" on the right side of the "Expenses" with a tooltip that says "Add expense". I Would also have changed the "+" button to be either on the right side of middle of the screen on a phone.
- When clicking on the form tabs, one can sort depend on which one is chosen. Here i would also have added a sort icon to make it easier for the user to understand what they are for and try to make it easier to see that its a clickable button to make changes.

## Challenges faced
- There was issues with making Angular 19 workin toghether with Bootstrap as bootstrap has been updated to support the newest version of Angular yet. There was also an issue with finding good documentation when it came to using bootstrap for angular.
- Had issues with getting the ng-bootstrap components to work in Angular out of the box without tweaking them, some more and some less.
-  There was issue with installing bootstrap using Angular CLI and Node.js both as i was using version 16 of angular the first time and then had to delete the project and upgrade angular to 19 and then creating the project again and importing the dependencies again.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
