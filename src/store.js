import { createStore } from 'vuex'


const store = createStore({
  state () {
    return {
      cart: []
    }
  },
  mutations: {
    addToCart(state, item){
        state.cart.push(item);

        this.commit('saveData');

    },
    saveData(state){
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    //@click="$store.commit('removeFromCart', item)"
    removeFromCart(state, item){
      let index = state.cart.indexof(item);
      state.cart.splice(index, 1);
      this.commit('saveData');
    }
  }
})

export default store;
