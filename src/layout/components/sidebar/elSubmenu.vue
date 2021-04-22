<template>
  <el-submenu :index="item.index">
    <template slot="title">
      <div>
        <i :class="item.icon"></i>
        <span>{{ item.title }}</span>
      </div>
    </template>

    <router-link v-for="(ite, ind) in item.data" :key="ind" :to="ite.path">
      <el-menu-item :index="index + '-' + ind">{{ ite.label }}</el-menu-item>
    </router-link>
  </el-submenu>
</template>

<script>
export default {
  props: ["item", "index"],
  data() {
    return {
      Breadcrumb:{
        title:'',
        patch:'',
      }
    };
  },
  methods: {

  },
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}
</style>