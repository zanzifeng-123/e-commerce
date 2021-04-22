<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    class="login-from"
  >
    <el-form-item  prop="account" ref="account">
      <el-input 
        v-model="ruleForm.account" 
        prefix-icon="el-icon-user-solid"
        :placeholder="$t('account')"></el-input>
    </el-form-item>
    <el-form-item  prop="password">
      <el-input 
        show-password
        v-model="ruleForm.password" 
        prefix-icon="el-icon-lock"></el-input>
    </el-form-item>
    <el-form-item size="large">
        <el-button 
            class="submit" 
            type="primary" 
            @click="submit">
            登录
        </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      ruleForm: {
        account:'',
        password:''
      },
      rules: {
        account: [
          { required: true, validator:this.account_rule, trigger: "blur" },
        ],
        password: [
          { required: true, message: "请选择活动区域", trigger: "blur" },
        ],
      },
      is_password:true
    };
  },
  methods:{
        submit(){
            this.$store.dispatch('admin/setAdmin',this.ruleForm.account) 
            this.$router.replace('/')
        },
        account_rule(rule, value, callback){
            if(!value){
                callback(new Error(this.$t('loginAccount')))
            }
            callback();
        }
  },
  computed:{
      ...mapGetters(['getLange'])
  },
  watch:{
      getLange(){
          this.$refs.account.validateState=this.$t('loginAccount')
      }
  }
};
</script>

<style lang="less">
    // #283443
    .login-from{
        margin-top: 40px;
        .el-input__inner{
            background-color: #283443;
            border-color: #3E4957;
            line-height: 50px;
            height: 50px;
            color: #fff;
        }
        .el-input__prefix{
            width: 50px;
        }
        .el-input--prefix .el-input__inner{
            padding: 0 50px;
        }
        .el-form-item.is-error .el-input__inner{
            border-color: #3E4957;
        }
        .el-icon-user-solid,.el-icon-lock,.el-icon-view{
            font-size: 18px;
        }
        .submit{
            width: 100%;
        }
    }
</style>