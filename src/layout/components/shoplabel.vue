<template>
  <div class="shoplabel">
    <div class="search" style="margin-top: 15px">
      <el-input
        v-model="searchtxt"
        placeholder="请输入内容"
        class="input-with-select"
      >
        <el-button slot="append" icon="el-icon-search" @click="chang_search">
        </el-button>
      </el-input>
      <!-- <addlebel></addlebel> -->
    </div>
    <div class="labelbox">
      <transition name="fade-transform" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    // uselabel:require('./label.vue').default,
    // addlebel:require('./add.vue').default,
  },
  data() {
    return {
      searchtxt: "",
    };
  },
  methods: {
    chang_search() {
      this.$store.dispatch("search/chang_search", this.searchtxt);
    },
  },
};
</script>
  
<style lang="less" scoped>
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

.shoplabel {
  width: 1520px;
  padding-left: 30px;

  .search {
    margin-bottom: 50px;
    // padding-left: 30px;
  }
  .labelbox {
    height: 80vh;
    overflow: auto;
  }
}
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>