const functions = require("firebase-functions");
const fetch = require("isomorphic-unfetch");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  fetch("https://qiita.com/api/v2/items/bb154a4bc198fb102ff3")
    .then(res => {
      return res.json();
    })
    .then(json => {
      response.send("res:" + JSON.stringify(json));
      return;
    })
    .catch(error => {
      response.send("error:" + error);
    });
});
