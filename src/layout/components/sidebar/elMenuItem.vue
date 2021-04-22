<template>
  <router-link to="normalItem">
    <el-menu-item :index="item.index">
      <i class="el-icon-document"></i>
      <span slot="title">{{ item.title }}</span>
    </el-menu-item>
  </router-link>
</template>

<script>
export default {
  props: ["item", "index"],
};
</script>

<style>
</style>