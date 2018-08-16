const functions = require("firebase-functions");
const unfetch = require("isomorphic-unfetch");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  let fetch = async function() {
    return 1;
  };

  fetch();
  response.send("Hello from Firebase!");
});
