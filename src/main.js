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



const app = createApp(App);
app.component('Navbar',Navbar);
app.use(router);
app.mount("#app");
