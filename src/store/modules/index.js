export default {
    namespaced: true,
    state: {
      index:{
        listIndex: 0,
        titleIndex: 0,
      }
    },
    mutations: {
        change_listIndex(state, val){
            state.index.listIndex=val
            console.log(state.index.listIndex);
        }
    },
    actions: {
        change_listIndex(context, val) {
            context.commit('change_listIndex', val)
        }
    }
}