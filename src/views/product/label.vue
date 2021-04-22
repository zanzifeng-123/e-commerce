<template>
  <div class="userlabel">
    <el-table
      v-loading="loading"
      :data="
        product.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(searchtxt.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form
            label-position="left"
            inline
            class="demo-table-expand formbox"
          >
            <el-form-item label="过往价格：">
              <span class="txtbox">{{ props.row.oldMoney }} </span>
            </el-form-item>
            <el-form-item label="现在价格：">
              <span class="txtbox">{{ props.row.nowMoney }} </span>
            </el-form-item>
            <el-form-item label="产品折扣：">
              <span class="txtbox">{{ props.row.discount }} </span>
            </el-form-item>
            <el-form-item
              :label="item.name + '：'"
              v-for="(item, index) in props.row.message"
              :key="index"
            >
              <span class="txtbox" v-for="(ite, ind) in item.kind" :key="ind"
                >{{ ite.select + "：" + ite.money + "元" }}、
              </span>
            </el-form-item>
            <div class="addmessage">
              <el-dialog title="添加信息" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                  <el-form-item
                    label="添加的信息："
                    :label-width="formLabelWidth"
                  >
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item
                    label="信息内容："
                    :label-width="formLabelWidth"
                  >
                    <el-input
                      v-model="form.kind[0]"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false"
                    >取 消</el-button
                  >
                  <el-button
                    type="primary"
                    @click="
                      (dialogFormVisible = false),
                        addmessage({ props: props.$index })
                    "
                    >确 定</el-button
                  >
                </div>
              </el-dialog>
            </div>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="商品 ID" width="100" type="index">
      </el-table-column>
      <el-table-column label="商品图片" prop="img" width="100">
        <template slot-scope="props">
          <el-image :src="props.row.img"></el-image>
        </template>
      </el-table-column>
      <el-table-column label="商品名称" prop="name"> </el-table-column>
      <el-table-column label="描述" prop="describe"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click="open(scope.$index)" type="primary" size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { tableData } from "./label";
// import {mutations,mapMutations}  from '@/store/modules/product'
export default {
  data() {
    return {
      loading: true,
      visible: false,
      dialogTableVisible: false,
      dialogFormVisible: false,
      search: "",
      form: {
        name: "",
        kind: [],
      },
      formLabelWidth: "120px",
    };
  },
  components: {
    change: require("./components/change.vue").default,
  },
  computed: {
    product() {
      return this.$store.getters.getproduct1;
      // ...mapState(["product"]),
    },
    product1() {
      return this.$store.getters.getproduct1;
      // ...mapState(["product"]),
    },
    searchtxt() {
      return this.$store.getters.getsearch;
    },
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  methods: {
    sub(index) {
      this.$store.dispatch("product1/det_item", index);
    },
    sub_txt({ scope, index, ind }) {
      this.$store.dispatch("product/sub_txt", { scope, index, ind });
    },
    add_txt({ scope, index, value }) {
      this.$store.dispatch("product/add_txt", { scope, index, value });
    },
    open(index) {
      const that = this;
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          that.sub(index);
          // this.handleDelete(index, row);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    addopen({ scope, index }) {
      const that = this;
      this.$prompt("请输入", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: "",
        inputErrorMessage: "格式不正确",
      })
        .then(({ value }) => {
          // console.log(value)
          //  console.log(index)
          that.add_txt({ scope, index, value });

          this.$message({
            type: "success",
            message: "新增成功 ",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
    det({ scope, index, ind }) {
      const that = this;

      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // console.log(scope);
          // console.log("ind是" + index, ind);
          that.sub_txt({ scope, index, ind });
          // debugger
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    addmessage(props) {
      const messages = this.form;
      this.$store.dispatch("product/addmessage", { props, messages });
      // this.form.name=''
      // this.kind=''
    },
  },
};
</script>

<style lang="less" scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.el-table-column {
  text-align: center;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
  // padding-right: 50px;
  .txtbox {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

    .btn {
      color: red;
    }
    .addbtn,
    .btn {
      padding: 0 30px;
    }
  }
}
.formbox {
  position: relative;
  .addmessage {
    position: absolute;
    right: 0;
    top: 0;
    .el-form-item {
      margin-bottom: 20px;
    }
  }
}
</style>