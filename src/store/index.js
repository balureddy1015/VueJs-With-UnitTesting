import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    products: null,
    productDetail: null,
  },
  mutations: {
    setProductDetail(state, payload) {
      state.productDetail = payload;
    },
    setProductData(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    getJsonData(context) {
      const url = "services/catalog/v4/category/shop/new/all-new/index.json";
      fetch("api/" + url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          context.commit("setProductData", data);
        });
    },
  },
  modules: {},
});
