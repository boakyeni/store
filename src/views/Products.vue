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


<h3 class="d-inline-block">Products List</h3>
<button class="btn btn-primary float-right">Add Product</button>
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

<!-- Modal -->
<div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editLabel">Edit Product</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

          <div class="row">
            <!-- main product -->
            <div class="col-md-8">
              <div class="form-group">
                <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
              </div>

              <div class="form-group">
                <input v-model="product.description">
              </div>
            </div>
            <!-- product sidebar -->
            <div class="col-md-4">
              <h4 class="display-6">Product Details</h4>
              <hr>

              <div class="form-group">
                <input type="text" placeholder="Product price" v-model="product.price" class="form-control">
              </div>

              <div class="form-group">
                <input type="text" @keyup.188="addTag" placeholder="Product tags" v-model="tag" class="form-control">

                <div  class="d-flex">
                  <p v-for="tag in product.tags">
                      <span class="p-1">{{tag}}</span>
                  </p>

                </div>
              </div>


              <div class="form-group">
                <label for="product_image">Product Images</label>
                <input type="file" @change="uploadImage" class="form-control">
              </div>

              <div class="form-group d-flex">
                <div class="p-1" v-for="(image, index) in product.images">
                    <div class="img-wrapp">
                        <img :src="image" alt="" width="80px">
                        <span class="delete-img" @click="deleteImage(image,index)">X</span>
                    </div>
                </div>
              </div>

            </div>
          </div>




      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button @click="addProduct()" type="button" class="btn btn-primary" v-if="modal == 'new'">Save changes</button>
        <button @click="updateProduct()" type="button" class="btn btn-primary" v-if="modal == 'edit'">Apply changes</button>
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
        price: '',
        tags: []
      },
      /*
      this is needed for the save changes
      button from edit to have access to the product
      */
      activeItem: null,
      modal: null,
      tag: null
    }
  },
  methods: {
    addTag(){
      this.products.tags.push(this.tag);
      this.tag = '';
    },
    addNew(){
      this.modal ='new';
      the.reset();
      $('#edit').modal('show');
    },
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
      //this is so that conditionals can be placed on the modal
      this.modal = 'edit';
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
      this.products = {
        
      }
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
