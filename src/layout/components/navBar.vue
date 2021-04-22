<template>
  <div class="nav-bar">
    <i class="el-icon-s-fold" @click="to_open"></i>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item, index) in first"
        :key="index"
        :to="item.patch"
        >{{ item.name }}</el-breadcrumb-item
      >
    </el-breadcrumb>
    <el-button type="info" @click="out">退出</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first: "",
    };
  },
  mounted() {
    this.breadc();
  },
  computed: {},
  methods: {
    to_open() {
      // this.$emit('to_open')
      this.$store.dispatch("app/openSidebar");
    },
    breadc() {
      let matched = this.$route.matched.filter((item) => item);
      //   console.log(matched);
      this.first = matched;
    },
    out() {
      this.$router.push("/login");
    },
  },
  watch: {
    $route() {
      this.breadc();
    },
  },
};
</script>

<style lang='less' scoped>
.nav-bar {
  height: 50px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  .el-icon-s-fold {
    font-size: 25px;
  }
  .el-breadcrumb {
    position: absolute;
    left: 70px;
  }
}
</style>