<template>
  <div class="layout">
  
    <div class="sidebar">
      <!-- <sidebar :open="is_open"></sidebar> -->
      <sidebar></sidebar>
    </div>
    <div class="nav-bar-content">
      <nav-bar @to_open="is_open = !is_open"></nav-bar>
      <shoplabel></shoplabel>
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // is_open:false
    };
  },
  components: {
    sidebar: require("./components/sidebar.vue").default,
    navBar: require("./components/navBar.vue").default,
    shoplabel: require("./components/shoplabel.vue").default,
  },
};
</script>

<style lang="less" scoped>
.layout {
  display: flex;
   background-color: #f6f8f9;
  .sidebar {
    background-color: #2d3a4b;
    height: 100vh;
    overflow-y: auto;
  }
  .nav-bar-content {
    flex: 1;
  }
}
</style>