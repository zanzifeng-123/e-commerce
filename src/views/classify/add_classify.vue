<template>
  <div class="addclassify">
    <div class="top">
       <el-button type="primary" @click="addclassify">新增分类</el-button>
    </div>
    <div class="bottom">
      <el-table
        :data="
          classify.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        "
        style="width: 100%"
      >
        <el-table-column label="ID" type="index" width="300px">
        </el-table-column>
        <el-table-column label="种类" prop="name"> </el-table-column>
        <el-table-column align="right">
          <template v-slot:header>
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"
            />
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="changeclassify({scope:scope.$index})"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="detclassify({scope:scope.$index})"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          delivery: false,
        },
        formLabelWidth: '120px'
    };
  },
  computed: {
    classify() {
      return this.$store.getters.getclassify;
    },
  },
  methods: {
       addclassify() {
        this.$prompt('请输入添加的分类  ', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: '',
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
           this.$store.dispatch("classify/addclassify", {name:value});
          this.$message({
            type: 'success',
            message:  value + '添加成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
        detclassify(scope) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // console.log(scope);
          this.$store.dispatch("classify/detclassify", scope);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
        changeclassify(scope) {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: '',
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$store.dispatch("classify/changeclassify",{ scope,value});
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
      }
    },

};
</script>

<style lang="less" scoped>
</style>