<!-- Overview page that is only accessible to admin users-->
<template>
<div class="overview vh-100">
  <div class="container">
  <div class="intro h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-md-6">
        <h3>Overview Page</h3>
      </div>
      <div class=" col-md-6">
        <img src="/img/svg/workingImage.svg" class="img-fluid">
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: "Overview",
  props: {
    msg: String
  },
};
</script>
<!-- added for horizontal alignment-->
<style scoped lang="scss">
  .overview-image{
    vertical-align:middle;
  }
  .overview-right{
    float: right;
  }
  </style>
