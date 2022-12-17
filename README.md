## Table of Contents

- [App Description](#app-description)
- [Questions, Comments, Concerns](#questions-feedback)
- [Dependencies and Inspiration](#dependencies-and-inspiration)
- [Setting Up Cloud Firestore](#setting-up-cloud-firestore)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
  - [npm run dev](#npm-run-dev)
  - [npm run build](#npm-run-build)
  - [npm run start](#npm-run-start)
- [Setup and Running Example](#running-example)
- [Live Demo](#live-demo)

## App Description

This sample app demonstrates how to create a live list updated by user input in the provided status textbox using reactjs, next.js, redux, and cloud firestore (a firebase product).

## Questions, Comments, Concerns

Please direct any questions, comments, or concerns to the [issues](https://github.com/NickDelfino/nextjs-with-redux-and-cloud-firestore/issues) section of the repo. Thanks for your feedback.

## Dependencies and Inspirations

This project was seeded by [create-next-app](https://github.com/segmentio/create-next-app). For general questions about the setup of next.js and the structure visit the previously linked github.

This project is inspired by the [examples](https://github.com/zeit/next.js/tree/master/examples) made by the nextjs team. 
It combines ideas from both their [with-redux](https://github.com/zeit/next.js/tree/master/examples/with-redux) 
and [with-firebase-authentication](https://github.com/zeit/next.js/tree/master/examples/with-firebase-authentication) examples
to show how to create harmonization between redux and, in my case, cloud firestore. 

## Folder Structure

The project structure is made with going further in mind. Actions and reducers are moved
into their own directories since there should be multiple of them in a full web app. A lib
directory has been added for constant variable and to access the db.
 

```
my-app/
  README.md
  package.json
  next.config.js
  components/
    Head.js
    Nav.js
    AddPost.js
    Loading.js
    PostItem.js
    PostList.js
  pages/
    index.js
  lib/
    const.js
    db.js
  static/
    favicon.ico
  reducers/
    postReducer.js
  actions/
    index.js
    types.js
    postActions.js
  store.js
```

## Setting Up Cloud Firestore

Cloud firestore setup is similar to firebase realtime database setup. 

The main thing that is need are the initialization keys generated when making a database
on the site so the example app works. 

Go to [firebase.google.com](https://firebase.google.com/). Login or create an account if
you don't already have one. 

Then, go to console. Select the "Add Project" square. 

Name your project anything you like and then on the following page select the option
"Add Firebase to your web app". 

A model will appear with configuration information. Copy the entire config variable and 
paste it over the placeholder one in ../lib/db.js. 

Then you are good to go. Your app will start using your Cloud Firestore.

## Setup and Running Example

To run the project simply clone this repository and navigate into it. 

Run npm install to acquire dependencies. 

Then simply perform the command `npm run dev`.

## Scripts

### `npm run dev`

Runs the app in the development mode at [http://localhost:3000](http://localhost:3000).

### `npm run build`

Builds the app for production to the `.next` folder.<br>

### `npm run start`

Starts the application in production mode. 

This script is made with heroku in mind. There is a port variable that needs to be
specified for it to run. Heroku needs this for deployment.

