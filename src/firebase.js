

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBcOcF_jHRMoYmlJcZB9xp89vuJgqSpVuA",

  authDomain: "store-c5ea4.firebaseapp.com",

  projectId: "store-c5ea4",

  storageBucket: "store-c5ea4.appspot.com",

  messagingSenderId: "809542441243",

  appId: "1:809542441243:web:d58bbc9dd53983fab05bbe",

  measurementId: "G-2XE6MNZTZZ"

};
// Initialize Firebase

export const fb = initializeApp(firebaseConfig);

export const analytics = getAnalytics(fb);

export const db = getFirestore();
