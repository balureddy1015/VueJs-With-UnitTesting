<template>
  <div class="container">
    <div class="row" v-if="getAllProducts">
      <div
              class="col-lg-4 mb-3"
              v-for="(item, ind) in getAllProducts"
              :key="ind"
      >
        <div class="card h-100">
          <img
                  :src="
              item.hero ? item.hero.href : require('../assets/img/default.png')
            "
                  class="card-img-top"
                  :alt="item.hero ? item.hero.alt : ''"
          />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text" v-if="item.price">
              Regular: <span class="strike">${{ item.price.regular }}</span>
              <br />
              Selling: <strong>${{ item.price.selling }}</strong>
            </p>
            <button href="#" class="btn btn-primary" @click="goToDetail(item)">
              Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    getAllProducts() {
      return this.$store.state.products ? this.$store.state.products.groups : null;
    }
  },
  mounted() {
    if (!this.$store.state.products) {
      this.$store.dispatch("getJsonData");
    }
  },
  methods: {
    goToDetail(item) {
      localStorage.setItem("productDetail", JSON.stringify(item));
      this.$store.commit("setProductDetail", item);
      const name = item.name.replaceAll(" ", "-");
      console.log(name);
      this.$router.push("/detail/" + name);
    }
  }
};
</script>
