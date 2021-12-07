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
<h3>Basic CRUD in firebase and Vue</h3>
<div class="product-test">
  <div class="form-group">
    <input type="text" placeholder="Name" v-model="product.name" class="form-control">
  </div>
  <div>
    <input type="text" placeholder="Price" v-model="product.price" class="form-control">
  </div>
  <div>
    <button @click="saveData()" class="btn btn-primary">Save Data</button>
  </div>
</div>
</template>

<script>
import {
  fb,
  db
} from '../firebase';
import {
  collection,
  addDoc
} from "firebase/firestore";

export default {
  name: "Products",
  props: {
    msg: String
  },
  data() {
    return {
      product: {
        name: '',
        price: ''
      }
    }
  },
  methods: {
    saveData() {
        try {
          const docRef = addDoc(collection(db, "products"), this.product);
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    }
};
</script>
