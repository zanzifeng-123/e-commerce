<template>
    <div class="login">
        <div class="from-box">
            <div class="from-title">
                <!-- <span></span> -->
                {{$t('loginTitle')}}
                <lange></lange>
            </div>
            <from></from>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            
        }
    },
    mounted(){
        // console.log(this.$store.getters)
        console.log(this.$router.options.routes)
        axios.get('http://127.0.0.1:7001')
    },
    components:{
        Lange:require('./components/lange.vue').default,
        from:require('./components/from.vue').default
    }
}
</script>

<style lang="less" scoped>
    .login{
        background-color: #2D3A4B;
        height: calc(100vh - 150px);
        color: #fff;
        padding-top: 150px;
        .from-box{
            width: 450px;
            margin: 0 auto;
            text-align: center;
            // margin-top: 150px;
            .from-title{
                font-size: 30px;
                position: relative;
                // display: flex;
                // align-items: center;
                // justify-content: space-between;
                .el-dropdown{
                    color: #fff;
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
    }
</style>