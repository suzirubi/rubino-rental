# Javascript Week Four Independent Project: Angular Extended Rental Management Site
_*Epicodus Javascript Independent Project 1-27-17*_

_*Project Name: Angular2 Extended Independent Project *_

_*Project Author: Suzi Rubino*_

##Rental Property Manager (this project uses a rental manager model instead of club manager) Project Description:
Create a website that manages the listings for a number of properties managed by one family. User behaviors necessary:

- [x] As a user, I'd like to visit a page to see a list of rental properties.

- [ ] As a manager, I'd like to visit a page to see a list of all expenses for all properties (expenses).

- [x] As a user, I'd like to click a listing to visit its detail page, which includes details like rent, deposit and if pets are ok.

- [ ] As a manager, I'd like to click an expense to see more details about that specific expense.

- [x] As a user, I'd like the option to visit an "About" page that explains what the management firm is, and what it does.

- [x] As a user, I'd like all data persisted in a database, so it's always there when I need it.

- [x] As a user, I'd like to filter the list of users (properties) by their type (long-term, short-term, dates available).

- [ ] As a manager, I want to add new expenses.

- [ ] As a manager, I'd like to be able to filter the list of expenses by their type.

- [ ] As a manager, I want to edit user both the properties and expenses if they need to be updated.

- [x] As a manager I want to be able to delete a property if has been sold, or add a new one.

###Further Exploration

- [ ] Add functionality to keep track of expenses

- [ ] Add a message board area (repair/maintenance task list or possibly guest responses).

- [ ] Include an area called "announcements", "events", "games" (local things to do, or possibly guest responses).

- [ ] Deploy your application. Include a link to the live site in your project's README.

- [ ] Consider implementing AngularFire/Firebase user authentication (Note that this goes beyond the scope of our curriculum, and will require you to complete outside research. Begin with the AngularFire documentation on User Authentication.)

###Objectives

- [x] Components are used to create display and contain behavior for templates.

- [x] A router is used to navigate between different pages, including at least one dynamic route.

- [x] A service shares data between multiple components.

- [x] Application can create, edit, and delete instances of a model, persisting all changes in Firebase.

- [x] Data is retrieved from Firebase and displayed in the application.

- [x] Models can be filtered using a pipe.

- [x] Project demonstrates understanding of week's concepts. If prompted, you are able to discuss your code with an instructor using correct terminology.

- [x] Project is in a polished, portfolio-quality state.

- [x] Required functionality was in place by the Friday deadline.


# RubinoRentals



##SETUP INSTRUCTIONS

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

This following portion of this README outlines the details of reviewing this Angular2 application. Angular2 is a Model View Controller (MVC) framework built entirely on the client side. Angular2 uses components to control the data display and functionality, so it is also known as a Model View Component framework.


### Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [angular-cli](https://github.com/angular/angular-cli)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Typescript](https://www.typescriptlang.org/) (with NPM)
* [Atom and Atom Typescript Package](https://atom.io/packages/atom-typescript/)  (optional)
## API Key

This application uses a database tool called Firebase to store and manage its data. Firebase is a cloud services provider that offers real time databases. It constantly updates and syncs whenever the data changes.

To utilize this functionality (necessary for editing, creating or destroying a post) please create a file in the src/app folder and name it api-keys.ts. Then copy and paste the code below to access the database.

```````````````````

export var masterFirebaseConfig = {
  apiKey: "AIzaSyDsGIbA2EzLvPkEubzGyieYm3BAYQR3xoQ",
  authDomain: "rubino-rentals.firebaseapp.com",
  databaseURL: "https://rubino-rentals.firebaseio.com",
  storageBucket: "rubino-rentals.appspot.com",
  messagingSenderId: "368115892946"
};

```````````````````


Clone the repository (address below) and follow the steps below to view and edit the application:

### Installation

1. `git clone <repository-url>` this repository (address below)
2. `cd rubino-rentals`
3. `npm install typescript -g`
4. `apm install atom-typescript` (restart atom after this step)
5. `npm install`
6. `bower install`
7. `ng build`
8. `ng serve`

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#####This and previous project links
* [Repository for Javascript Week Four Independent Project - Angular2 Extended ](https://github.com/suzirubi/rubino-rentals.git)
* [Repository for Javascript Week Three Independent Project - Angular2](https://github.com/suzirubi/meals-test.git)
* [Repository for Javascript Week Two Independent Project - Ember](https://github.com/suzirubi/questions.git)
* [Repository for Javascript Week One Independent Project - Modern APIs](https://github.com/suzirubi/doctors.git)
* [Visit my gh-page for CSS Independent Project #4](https://rawgit.com/suzirubi/kerrWebCalendar/master/index.html)
* [Visit my gh-page for CSS Independent Project #3](https://rawgit.com/suzirubi/tarot/master/index.html)
* [Visit my gh-page for CSS Independent Project #2](https://rawgit.com/suzirubi/thinkGoogle/master/index.html)
* [Visit my gh-page for CSS Independent Project #1](https://rawgit.com/suzirubi/climbing/master/index.html)
* [Visit my gh page for Introduction to Programing Independent Project #4](https://rawgit.com/suzirubi/pizza/master/index.html)
* [Visit my gh page for Introduction to Programing Independent Project #3](https://rawgit.com/suzirubi/ping-pong/master/index.html)
* [Visit my gh page for Introduction to Programing Independent Project #2](https://rawgit.com/suzirubi/Independent-Project-Week-2/master/index.html)
* [Visit my gh page for Introduction to Programing Independent Project #1](https://rawgit.com/suzirubi/portfolioFix/master/index.html)
