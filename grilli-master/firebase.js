// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmh-nOmDkzV6ThHl-k1w7vAx03G1JA65w",
  authDomain: "emailsender-fc5fe.firebaseapp.com",
  databaseURL: "https://emailsender-fc5fe-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "emailsender-fc5fe",
  storageBucket: "emailsender-fc5fe.appspot.com",
  messagingSenderId: "799464183937",
  appId: "1:799464183937:web:2dc76f6e0358879441d580",
  measurementId: "G-4613QBBXJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export database reference for use in app.js
export const database = getDatabase();
