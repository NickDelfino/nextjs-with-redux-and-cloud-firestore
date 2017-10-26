## Table of Contents

- [Improvements](#questions-feedback)
- [Dependencies and Inspiration](#dependencies-and-inspiration)
- [Setting Up Cloud Firestore](#setting-up-cloud-firestore)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
  - [npm run dev](#npm-run-dev)
  - [npm run build](#npm-run-build)
  - [npm run start](#npm-run-start)
- [Running Example](#running-example)

## Questions? Feedback?

Please direct any questions, comments, or concerns to the [issues](https://github.com/NickDelfino/nextjs-with-redux-and-cloud-firestore/issues) section of the repo. Thanks for your feedback.

## Dependencies and Inspirations

This project was seeded by [create-next-app](https://github.com/segmentio/create-next-app). For general questions about the setup of next.js and the structure visit the previously linked github.

This project is inspired by the [examples](https://github.com/zeit/next.js/tree/master/examples) made by the nextjs team. 
It combines ideas from both their [with-redux](https://github.com/zeit/next.js/tree/master/examples/with-redux) 
and [with-firebase-authentication](https://github.com/zeit/next.js/tree/master/examples/with-firebase-authentication) examples
to show how to create harmonization between redux and, in my case, cloud firestore. 

##Setting Up Cloud Firestore

## Folder Structure

The project structure is made with going further in mind. Actions and reducers are moved
into their own directories since there should be multiple of them in a full web app. 
 

```
my-app/
  README.md
  package.json
  next.config.js
  components/
    Head.js
    Nav.js
  pages/
    index.js
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

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `.next` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start`

Starts the application in production mode. 

This script is made with heroku in mind. There is a port variable that needs to be
specified for it to run. Heroku needs this for deployment.

## Running Example

To see how these ideas work in practice check out [whatsyourprob.io](http://whatsyourprob.io). 
This sample project is its base.  

