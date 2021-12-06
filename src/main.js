import { createApp } from "vue";
import Vue from "vue"
import App from "./App.vue";
import router from "./router";
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import 'popper.js';
import 'bootstrap';
import './assets/app.scss';
import './assets/navbarstyle.css';
import './assets/navbarstyle.scss';
import Navbar from "./components/Navbar.vue";

import {fb} from './firebase';
import {getAuth, onAuthStateChanged} from 'firebase/auth';


// ...

let apper = '';
  const auth = getAuth(fb);
  onAuthStateChanged(auth, (user) => {
if(!apper){
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
    const app = createApp(App);
    app.component('Navbar',Navbar);
    app.use(router);
    app.mount("#app");
}


  });
