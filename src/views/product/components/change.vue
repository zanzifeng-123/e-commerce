<template >
  <div class="change">
    <el-button class="btn" type="text" @click=" chang_txt({ props:props.$index , index, ind })"
      >修改</el-button
    >
  </div>
</template>

<script>
export default {
  props: ["props", "index", "ind"],
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        value: "",
        delivery: false,
      },
      formLabelWidth: "120px",
    };
  },
  mounted() {},
  methods: {
   chang_txt({ props, index, ind }) {
        this.$prompt('请输入修改的内容', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern:'',
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          console.log({ props, index, ind, value });
          this.$store.dispatch("product/chang_txt", { props, index, ind, value });
            //  debugger
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
 
  },
  computed: {
    product() {
      return this.$store.getters.getproduct;
    },
  },
};
</script>

<style lang="less" scoped>
.btn {
  color: #ebb563;
  padding: 0 30px;
}
</style>