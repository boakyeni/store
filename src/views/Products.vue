<!-- Overview page that is only accessible to admin users-->
<template>
<div class="products vh-100">
  <div class="container">
    <div class="intro h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-md-6">
        <h3>Product Page</h3>
      </div>
      <div class="col-md-6">
        <img src="/img/svg/blackManGreen.svg" class="img-fluid">
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: "Products",
  components: {

  },
  props: {
    msg: String
  },
};
</script>
