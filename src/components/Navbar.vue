<template>
<div>
  <section class="ftco-section">
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
      <div class="container">
        <a id="logo" class="navbar-brand" href="index.html">Shop</a>
        <!-- Search Bar -->
        <form action="#" class="searchform order-sm-start order-lg-last">
          <div class="form-group d-flex">
            <input type="text" class="form-control pl-3" placeholder="Search">
            <button type="submit" placeholder="" class="form-control search"><span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
            </button>
          </div>
        </form>
        <!-- Menu for smaller screens -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span> Menu
        </button>
        <!-- Main navigation for all screen sizes-->
        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav m-auto pl-5">
            <li class="nav-item">
              <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">Products</router-link>
            </li>
            <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
            <li class="nav-item"><a href="#" class="nav-link">About</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- END nav -->
  </section>

</div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
};
</script>
