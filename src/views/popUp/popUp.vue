<template>
  <div>
    <el-button type="text" @click="dialogFormVisible = true"
      >添加产品服务</el-button
    >
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <el-form :model="serve">
        <el-input v-model="serve.name" autocomplete="off"></el-input>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addServe">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["title", "list"],
  data() {
    return {
      dialogFormVisible: false,
      serve: {
        name: "",
        kind: [],
      },

      formLabelWidth: "120px",
    };
  },
  methods: {
    addServe() {
      let aaa = JSON.parse(JSON.stringify(this.serve));
      this.list.message.push(aaa);
      this.dialogFormVisible = false;
    },
  },
  watch: {
    dialogFormVisible(val) {
      if (val == true) {
        this.serve.name = "";
      }
    },
  },
};
</script>

<style lang="less" scoped>
</style>