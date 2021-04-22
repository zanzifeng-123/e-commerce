<template>
  <div class="addServeName">
    <el-button
      type="primary"
      icon="el-icon-plus"
      @click="dialogFormVisible = true"
      circle
    ></el-button>
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <el-form :model="serve">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="serve.select" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input v-model="serve.money" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addServeName(index)">确 定</el-button>
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
      serve: {
        select: "",
        money: "",
      },
    };
  },
  methods: {
    addServeName(index) {
      let serve = JSON.parse(JSON.stringify(this.serve));
      this.list.message[index].kind.push(serve);
      this.dialogFormVisible = false;
    },
  },
  watch: {
    dialogFormVisible(val) {
      if (val == true) {
        this.serve.select = "";
        this.serve.money = "";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.addServeName {
  margin-right: 12px;
}
.el-form-item {
  margin-bottom: 30px;
}
</style>