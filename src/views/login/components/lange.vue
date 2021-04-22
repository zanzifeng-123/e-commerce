<template>
    <el-dropdown trigger='click' @command="change">
        <span class="iconfont icon-ziyuan"></span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item 
            v-for="(item,index) in langeList" 
            :key="index"
            :command='item.value' 
            :disabled="getLange==item.value">
                {{item.label}}
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
export default {
    methods:{
        change(val){
            this.$store.dispatch('lange/chagneLange',{call:this,val})
        }
    },
    computed:{
        langeList(){
            return this.$store.getters.getList
        },
        getLange(){
            return this.$store.getters.getLange
        }
    }
}
</script>