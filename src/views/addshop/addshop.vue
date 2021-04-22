<template>
  <div>
    <el-button type="primary" @click="dialogFormVisible = true"
      >添加商品</el-button
    >
    <el-dialog title="添加商品" :visible.sync="dialogFormVisible">
      <el-form :model="list" :rules="rules" ref="list">
        <el-form-item label="商品类型：" :label-width="formLabelWidth"  prop="type">
          <el-select v-model="list.type" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="商品名称："
          :label-width="formLabelWidth"
          prop="name"
        >
          <el-input v-model="list.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="商品描述："
          :label-width="formLabelWidth"
          prop="describe"
        >
          <el-input v-model="list.describe" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="过往价格："
          :label-width="formLabelWidth"
          prop="oldMoney"
        >
          <el-input v-model="list.oldMoney" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="现在价格："
          :label-width="formLabelWidth"
          prop="nowMoney"
        >
          <el-input v-model="list.nowMoney" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="产品折扣："
          :label-width="formLabelWidth"
          prop="discount"
        >
          <el-input v-model="list.discount" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="产品分类："
          :label-width="formLabelWidth"
          prop="kind"
        >
          <el-select v-model="list.kind" placeholder="请选择">
            <el-option
              v-for="item in classify"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品图片：" :label-width="formLabelWidth"  prop="img">
          <el-upload
            class="avatar-uploader"
            action=""
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeupload"
          >
            <img v-if="list.img" :src="list.img" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('list')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "activity",
          label: "活动产品",
        },
        {
          value: "normal",
          label: "正常产品",
        },
      ],
      list: {
        type: "",
        img: "",
        name: "",
        describe: "",
        oldMoney: "",
        nowMoney: "",
        discount: "",
        kind: "",
        message: [],
      },
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      rules: {
        type: [{ required: true, message: "请输入产品种类", trigger: "blur" }],
        img:[{ required: true, message: "请选择产品图片", trigger: "blur" }],
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
        kind: [{ required: true, message: "请输入产品种类", trigger: "blur" }],
      },
    };
  },
  computed: {
    classify() {
      return this.$store.getters.getclassify;
    },
  },
  methods: {
    submitForm(formName) {
      // console.log(formName);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!");
          this.addProduct();
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      console.log(formName);
      this.$refs[formName].resetFields();
    },

    addProduct() {
      this.$store.dispatch("product1/addProduct", this.list);
      this.dialogFormVisible = false;
    },
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
      return false;
    },
  },
  watch: {
    dialogFormVisible(val) {
      if (val == true) {
       setTimeout(() => {
           this.resetForm("list");
       });
      }
    },
  },
};
</script>
<style lang="less" scoped>
.el-button {
  margin: 0 10px 20px;
}
.el-form {
  width: 900px;
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