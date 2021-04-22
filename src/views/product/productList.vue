<template>
  <div class="list">
    <div class="btn">
      <addshop></addshop>
    </div>
    <div>
      <product-item
        v-for="(item, index) in product"
        :key="index"
        :item="item"
        :index="index"
      ></product-item>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
    productItem: require("./components/productItem.vue").default,
    addshop:require('../addshop/addshop.vue').default
  },
  computed: {
    product() {
      return this.$store.getters.getproduct1;
      // ...mapState(["product"]),
    },
  },
};
</script>

<style lang="less" scoped>
.el-button {
  margin: 0 10px 20px;
}
</style>