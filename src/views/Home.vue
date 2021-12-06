<!-- This is the homepage view -->
<template>
  <div class="home">
    <Authentication/>

    <Navbar class="sticky-top"></Navbar>
    <!-- Landing page splash with svg image and buttons-->
    <Hero/>

  </div>
</template>

<script>

// @ is an alias to /src
import Authentication from "@/components/Authentication.vue";
import Hero from "@/components/Hero.vue";



export default {
  name: "Home",
  components: {
    Hero, Authentication
  },
};
</script>
