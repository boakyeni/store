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
<h3>Products List</h3>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th>Modify</th>
    </tr>
  </thead>

  <tbody>
    <tr v-for="product in products">
      <td>{{product.data().name}}</td>
      <td>{{product.data().price}}</td>
      <td>
        <button @click="editProduct(product)" class="btn btn-primary">Edit</button>
        <button @click="deleteProduct(product)" class="btn btn-danger">Delete</button>
      </td>
    </tr>

  </tbody>
</table>
<div class="modal fade" id="edit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <input type="text" placeholder="Name" v-model="product.name" class="form-control">
        </div>
        <div>
          <input type="text" placeholder="Price" v-model="product.price" class="form-control">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button @click="updateProduct()" type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
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
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
  onSnapshot
} from "firebase/firestore";

export default {
  name: "Products",
  props: {
    msg: String
  },
  data() {
    return {
      products: [],
      product: {
        name: '',
        price: ''
      },
      /*
      this is needed for the save changes
      button from edit to have access to the product
      */
      activeItem: null
    }
  },
  methods: {

    watcher() {
      const q = query(collection(db, "products"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        this.products = [];
        querySnapshot.forEach((doc) => {
          this.products.push(doc);
        });
      });
    },
    async updateProduct() {
      const productRef = doc(db, "products", this.activeItem);

      // Set all fields of the product 'product.id'
      await updateDoc(productRef, this.product);
      $('#edit').modal('hide');
      //realtime database
      this.watcher();
    },
    editProduct(product) {
      $('#edit').modal('show');
      this.product = product.data();
      this.activeItem = product.id;
    },
    async deleteProduct(docu) {
      if (confirm('Are you sure?')) {
        await deleteDoc(doc(db, "products", docu.id));
        console.log("Delete");
      } else {

      }

    },
    async readData() {
      const querySnapshot = await getDocs(collection(db, "products"));
      //this.products = querySnapshot;
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.products.push(doc);
      });
    },
    /*
    Saves data to firestore database
    */
    async saveData() {
      try {
        const docRef = await addDoc(collection(db, "products"), this.product);
        console.log("Document written with ID: ", docRef.id);
        this.reset();
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    /*
    resets input fields to null i.e. input goes blank after saving in firestore
    */
    reset() {
      //Object.assign(this.$data, this.$options.data.apply(this))
    }
  },
  /*
  async tag need here to work
  */
  created() {

    this.readData();
  }
};
</script>
