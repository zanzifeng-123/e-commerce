<template>
  <div id="app">
    <!-- <router-link to='/login'>login</router-link> -->
    <!-- <div id="nav">
      <router-link to="/">{{ $t("hello") }}</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <button @click="change_lange">修改语言</button>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select> -->
    <router-view />
  </div>
</template>

<script>
export default {
  // data(){
  //   return{
  //     value:'',
  //     options:[
  //       {
  //         label:'中文',
  //         value:'ch'
  //       },
  //       {
  //         label:'英文',
  //         value:'eg'
  //       }
  //     ]
  //   }
  // },
  // methods: {
  //   change_lange() {
      
  //   },
  // },
  // watch:{
  //   value(val){
  //     this._i18n.locale = this.value;
  //     this.$store.dispatch("chagneLange", this._i18n.locale);
  //   }
  // }
};
</script>

<style lang="less">
@import url(./css/index.less);
</style>
