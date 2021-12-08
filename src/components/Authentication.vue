<template>
<div class="d-flex justify-content-end pr-5 mr-5">
  <a type="button" class="mr-3" data-bs-toggle="modal" data-bs-target="#loginModal">login</a>
  <a type="button" class="mr-5" data-bs-toggle="modal" data-bs-target="#signUpModal">sign up</a>

  <!-- Login Modal -->
  <section class="sign-in modal fade" id="loginModal" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="container modal-dialog modal-content">
      <div class="row signin-content align-items-center">

        <div class="col-md-4" style="padding: 0px;">
          <figure><img src="img/svg/workingImage.svg" class="img-fluid"></figure>
          <a href="#" class="signup-image-link">Create an account</a>
        </div>

        <div class="signin-form col-md-6">
          <h2 class="form-title modal-header">Login</h2>
          <form class="register-form" id="login-form">
            <div class="form-group">
              <label for="your_name">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </label>
              <input type="text" v-model="name" name="your_name" id="your_name" placeholder="Your Name" />
            </div>
            <div class="form-group">
              <label for="your_pass">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                </svg>
              </label>
              <input type="password" @keyup.enter="login" v-model="pass" name="your_pass" id="your_pass" placeholder="Password" />
            </div>
            <div class="form-group">
              <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
              <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
            </div>
            <div class="form-group form-button">
              <input type="submit" name="signin" id="signin" class="form-submit" @click="login" value="Log in" />
            </div>
          </form>
          <div class="social-login">
            <span class="social-label">Or login with</span>
            <ul class="socials">
              <li><a href="#"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
              <li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
              <li><a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Sign Up Modal-->
  <section class="modal fade signup" id="signUpModal" aria-labelledby="signUpModalLabel" aria-hidden="true">
    <div class="modal-dialog container">
      <div class="modal-content signup-content">
        <h2 class="form-title modal-header ml-3">Sign up</h2>
        <div class="row justify-content-center align-items-center">
          <form class="register-form col-6" id="register-form">
            <div class="form-group">
              <label for="name">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </label>
              <input type="text" v-model="name" name="name" id="name" placeholder="Your Name" />
            </div>
            <div class="form-group">
              <label for="email">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                  <path
                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
              </label>
              <input type="email" v-model="email" name="email" id="email" placeholder="Your Email" />
            </div>
            <div class="form-group">
              <label for="pass">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                </svg>
              </label>
              <input type="password" v-model="pass" name="pass" id="pass" placeholder="Password" />
            </div>
            <div class="form-group">
              <label for="re-pass">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                </svg>
              </label>
              <input type="password" v-model="re_pass" name="re_pass" id="re_pass" placeholder="Repeat your password" />
            </div>
            <div class="form-group">
              <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
              <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in <a href="#" class="term-service">Terms of service</a></label>
            </div>
            <div class="form-group form-button">
              <a name="signup" id="signup" @click="register" class="nav-link form-submit">Register</a>
              <!--<input name="signup" id="signup" class="form-submit" @click="register" value="Register" />-->
            </div>
          </form>
          <div class="signup-image col-4">
            <figure><img src="img/signup-image.svg" class="img-fluid" alt="sign up image"></figure>
            <a href="#" class="signup-image-link">I am already member</a>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>
</template>

<script>
import {
  ref
} from 'vue'
import {
  fb, db
} from '../firebase';
import {
  doc, setDoc
} from 'firebase/firestore';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

export default {
  name: "Authentication",
  props: {
    msg: String,
  },
  data() {
    return {
      name: '',
      email: '',
      pass: '',
      re_pass: ''
    }
  },
  methods: {
    login() {
      const email = this.name;
      const password = this.pass;
      const auth = getAuth(fb);
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Signed in
          $('#loginModal').modal('hide');
          const user = userCredential.user;
          // ...
          this.$router.replace('/admin');
          await setDoc(doc(db, "profiles", user.uid),{
            name: this.name
          } );
          window.location.reload();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    },
     register() {
      const email = this.email;
      const password = this.pass;
      const auth = getAuth(fb);
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          $('#signUpModal').modal('hide');
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        //  this.$router.replace('/admin');
        //  console.log("created");
          this.$router.push('/admin');
          await setDoc(doc(db, "profiles", user.uid),{
            name: this.name
          } );
          window.location.reload();

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(errorMessage);
        });

    }

  }
};
</script>

<style scoped src='../assets/authentication.css'></style>

<style scoped src='../assets/authentication.scss' lang="scss"></style>
