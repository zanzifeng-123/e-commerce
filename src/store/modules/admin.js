export default {
    namespaced:true,
    state:{
        user:'123'
    },
    mutations:{
        setAdmin(state,val){
            state.user =val
        },
    },
    actions:{
        setAdmin({commit},val){
            commit('setAdmin',val)
        }
    }
}