export default {
    namespaced: true,
    state:{
        lange:'ch',
        list:[
            {
                label:'中文',
                value:'ch'
            },
            {
                label:'英文',
                value:'eg'
            }
        ],
    },
    mutations:{
        chagneLange(state,{call,val}){
            call._i18n.locale = val
            state.lange=val
        },
    },
    actions:{
        chagneLange({commit},val){
            commit('chagneLange',val)
        }
    }
}