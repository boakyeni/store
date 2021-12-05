<template>
<div class="d-flex justify-content-end pr-5 mr-5">
  <a type="button" class="mr-3" data-bs-toggle="modal" data-bs-target="#loginModal">login</a>
  <a type="button" class="mr-5" data-bs-toggle="modal" data-bs-target="#signUpModal">sign up</a>

  <!-- Login Modal -->
  <section class="sign-in modal fade" id="loginModal" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="container modal-dialog ">
      <div class="signin-content modal-content ">
        <div class="signin-image modal header">
          <figure><img src="images/signin-image.jpg" alt="sing up image"></figure>
          <a href="#" class="signup-image-link">Create an account</a>
        </div>

        <div class="signin-form">
          <h2 class="form-title">Login</h2>
          <form method="POST" class="register-form" id="login-form">
            <div class="form-group">
              <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
              <input type="text" name="your_name" id="your_name" placeholder="Your Name" />
            </div>
            <div class="form-group">
              <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
              <input type="password" name="your_pass" id="your_pass" placeholder="Password" />
            </div>
            <div class="form-group">
              <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
              <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
            </div>
            <div class="form-group form-button">
              <input type="submit" name="signin" id="signin" class="form-submit" value="Log in" />
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
        <div class="modal-header signup-form">
          <h2 class="form-title">Sign up</h2>
          <form method="POST" class="register-form" id="register-form">
            <div class="form-group">
              <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
              <input type="text" name="name" id="name" placeholder="Your Name" />
            </div>
            <div class="form-group">
              <label for="email"><i class="zmdi zmdi-email"></i></label>
              <input type="email" name="email" id="email" placeholder="Your Email" />
            </div>
            <div class="form-group">
              <label for="pass"><i class="zmdi zmdi-lock"></i></label>
              <input type="password" name="pass" id="pass" placeholder="Password" />
            </div>
            <div class="form-group">
              <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
              <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
            </div>
            <div class="form-group">
              <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
              <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in <a href="#" class="term-service">Terms of service</a></label>
            </div>
            <div class="form-group form-button">
              <input type="submit" name="signup" id="signup" class="form-submit" value="Register" />
            </div>
          </form>
        </div>
        <div class="signup-image">
          <figure><img src="images/signup-image.jpg" alt="sing up image"></figure>
          <a href="#" class="signup-image-link">I am already member</a>
        </div>
      </div>
    </div>
  </section>

</div>
</template>

<script>
export default {
  name: "Authentication",
  props: {
    msg: String,
  },
};
</script>
