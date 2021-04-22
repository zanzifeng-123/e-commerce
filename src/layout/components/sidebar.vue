<template>
  <el-col :span="12">
    <el-menu
      :collapse="open"
      default-active="2"
      :class="['el-menu-vertical-demo', open ? '' : 'open']"
      background-color="#2D3A4B"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <keep-alive v-for="(item, index) in list" :key="index">
        <component v-bind:is="item.type" :item="item" :index="index"></component>
      </keep-alive>
    </el-menu>
  </el-col>
</template>

<script>
import { list } from "./sidebar";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      list,
    };
  },
  components: {
    noChild: require("./sidebar/elMenuItem.vue").default,
    child: require("./sidebar/elSubmenu.vue").default,
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
  },
  computed: {
    ...mapGetters({
      open: "getSidebar",
    }),
  },
};
</script>

<style lang="less" scoped>
.el-col{
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  border-right-color: #2d3a4b;
}

.icon-class {
  display: none;
}
a {
  text-decoration: none;
  text-decoration: none;
}
</style>