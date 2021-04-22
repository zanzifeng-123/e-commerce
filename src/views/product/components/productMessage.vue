<template>
  <div class="productMessage">
    <div class="img">
      <img :src="list.img" alt="" />
    </div>
    <div class="tabelBox">
      <message :listIndex="listIndex" :product="product" :list="list"></message>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: {},
    };
  },
  components: {
    message: require("./message.vue").default,
  },
  mounted() {
    let message = JSON.parse(JSON.stringify(this.product[this.listIndex.listIndex]));
    this.list = message;
    console.log(this.list);
  },
  methods: {},
  computed: {
    listIndex() {
      return this.$store.getters.getindex;
    },
    product() {
      return this.$store.getters.getproduct1;
    },
  },
};
</script>

<style lang="less" scoped>
.productMessage {
  display: flex;
  flex-direction: row;
  .img {
    img {
      width: 300px;
      height: 600px;
    }
  }
  .tabelBox {
    width: 1200px;
    height: 600px;
  }
  .el-table-column {
  }
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>