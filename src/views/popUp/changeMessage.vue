<template>
  <div class="changeMessage">
    <el-button
      type="warning"
      icon="el-icon-edit"
      @click="dialogFormVisible = true"
      circle
    ></el-button>
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <el-input v-model="name" autocomplete="off"></el-input>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="changeMessage(index)"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["title", "list", "index"],
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: "120px",
      name: "",
    };
  },
  methods: {
    changeMessage(index) {
      let name = JSON.parse(JSON.stringify(this.name));
      this.list.message[index].name = name;
      this.dialogFormVisible = false;
    },
  },
  watch: {
    dialogFormVisible(val) {
      if (val == true) {
        this.name = "";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.changeMessage {
  margin-right: 12px;
}
.el-form-item {
  margin-bottom: 30px;
}
</style>