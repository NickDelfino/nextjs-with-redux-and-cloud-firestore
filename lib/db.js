import firebase from '@firebase/app';
import '@firebase/firestore'

export function loadDB() {
  try {
    var config = {
      apiKey: "YOUR-DATA-HERE",
      authDomain: "YOUR-DATA-HERE",
      databaseURL: "YOUR-DATA-HERE",
      projectId: "YOUR-DATA-HERE",
      storageBucket: "YOUR-DATA-HERE",
      messagingSenderId: "YOUR-DATA-HERE"
    };
    firebase.initializeApp(config);
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
  }

  return firebase;
}