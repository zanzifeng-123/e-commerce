export default {
    namespaced:true,
    state:{
        open:false
    },
    mutations:{
        openSidebar(state){
            state.open = !state.open
        }
    },
    actions:{
        openSidebar({commit}){
            commit('openSidebar')
        }
    }
}