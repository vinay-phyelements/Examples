const { initializeApp } = require('firebase/app');
const { getFirestore, collection } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDMKCaIly-kz4Pu5gRS4C11WyKhEY9Fc7A",
  authDomain: "employee-b6906.firebaseapp.com",
  projectId: "employee-b6906",
  storageBucket: "employee-b6906.appspot.com",
  messagingSenderId: "797089246846",
  appId: "1:797089246846:web:e2e2e190fe8e0214b9f22f",
  measurementId: "G-9D48GPBYVR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const User = collection(db, "Users");

module.exports = User;
