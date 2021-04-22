<template>
  <div class="message">
    <el-form ref="list" :model="list" label-width="120px" :rules="rules">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeupload"
      >
        <el-button type="primary"
          >更改图片 <i class="el-icon-picture"></i
        ></el-button>
      </el-upload>
      <el-form-item label="产品类型:" prop="type">
        <!-- <el-input
          v-model="list.type"
          placeholder="activity(活动产品) normal(正常产品)"
        ></el-input> -->
        <el-select
          v-model="list.type"
          clearable
          placeholder="activity(活动产品) normal(正常产品)"
        >
          <el-option
            v-for="(item, index) in type"
            :key="index"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="产品名称:" prop="name">
        <el-input v-model="list.name"></el-input>
      </el-form-item>
      <el-form-item label="产品描述:" prop="describe">
        <el-input v-model="list.describe"></el-input>
      </el-form-item>
      <el-form-item label="过往价格:" prop="oldMoney">
        <el-input v-model="list.oldMoney"></el-input>
      </el-form-item>
      <el-form-item label="现在价格:" prop="nowMoney">
        <el-input v-model="list.nowMoney"></el-input>
      </el-form-item>
      <el-form-item label="产品折扣:" prop="discount">
        <el-input v-model="list.discount" placeholder="产品折扣0~1"></el-input>
      </el-form-item>
      <el-form-item label="产品种类:" prop="kind">
        <el-input v-model="list.kind"></el-input>
      </el-form-item>
      <el-form-item
        v-for="(item, index) in list.message"
        :key="index"
        :label="item.name + ':'"
      >
        <el-tag
          v-for="(ite, ind) in item.kind"
          :key="ind"
          closable
          type="warning"
          @close="close(item, ind)"
        >
          {{ ite.select + "：" + ite.money }}元
        </el-tag>
        <div class="changeBtn">
          <addServeName
            :title="'添加服务选项'"
            :index="index"
            :list="list"
          ></addServeName>
          <changeMessage
            :title="'更改服务名称'"
            :list="list"
            :index="index"
          ></changeMessage>
          <el-button
            type="danger"
            icon="el-icon-delete"
            @click="detMessage(index)"
            circle
          ></el-button>
        </div>
      </el-form-item>
      <pop-up
        :list="list"
        :title="'请输入添加的内容'"
        :change="change"
      ></pop-up>

      <div class="btn">
        <el-button type="primary" @click="submitForm('list')" round>提交</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["product", "listIndex", "list"],
  data() {
    return {
      delivery: false,
      type: [
        {
          value: "activity",
          label: "活动产品",
        },
        {
          value: "normal",
          label: "正常产品",
        },
      ],
      rules: {
        type:[{ required: true, message: "请输入产品种类", trigger: "blur" }],
        name: [{ required: true, message: "请输入产品名称", trigger: "blur" }],
        describe: [
          { required: true, message: "请输入产品描述", trigger: "blur" },
        ],
        oldMoney: [
          { required: true, message: "请输入过往价格", trigger: "blur" },
        ],
        nowMoney: [
          { required: true, message: "请输入现在价格", trigger: "blur" },
        ],
        discount: [
          { required: true, message: "请输入产品折扣", trigger: "blur" },
        ],
        kind: [
          { required: true, message: "请输入产品种类", trigger: "blur" },
        ],
      },

      dialogTableVisible: false,
      form: {
        name: "",
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    // change(val) {
    //   console.log(val);
    // },
    //图片上传
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    beforeupload(file) {
      console.log(URL.createObjectURL(file));
      this.list.img = URL.createObjectURL(file);
      console.log(this.list);
      return false;
    },
    close(item, ind) {
      item.kind.splice(ind, 1);
      //   console.log(this.list);
    },
    addKind(item) {
      item.dialogFormVisible != item.dialogFormVisible;
      console.log(item.dialogFormVisible);
    },
    changeMessage() {
      const listBel = this.list;
      const index = this.listIndex.listIndex;

      this.$store.dispatch("product1/changeMessage", { index, listBel });
    },
    detMessage(index) {
      this.$confirm("此操作将删除产品信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.list.message.splice(index, 1);
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
    change() {
      //  const that=this
      this.$confirm("此操作将修改产品信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.changeMessage();
          this.$message({
            type: "success",
            message: "修改成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消修改",
          });
        });
    },
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            this.change();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  },
  components: {
    popUp: require("@/views/popUp/popUp.vue").default,
    addServeName: require("@/views/popUp/addServeName.vue").default,
    changeMessage: require("@/views/popUp/changeMessage.vue").default,
  },
};
</script>

<style lang="less" scoped>
.message {
  clear: both;
  display: block;
}
.el-tag {
  margin-right: 20px;
}
.changeBtn {
  float: right;
  display: flex;
  justify-content: center;
}
.btn {
  display: flex;
  justify-content: center;
}
.avatar-uploader {
  margin-left: 80px;
  margin-bottom: 15px;
}
</style>