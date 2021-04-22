export default{
    namespaced:true,
    state:{
        search:''
    },
    mutations:{
        chang_search(state,val){
            state.search=val;
            console.log(state.search)
        }
    },
    actions:{
        chang_search(context,val){
            context.commit('chang_search', val)
        }
    }
}