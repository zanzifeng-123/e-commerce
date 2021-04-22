export default {
    namespaced: true,
    state: {
        classify: [
            {
                name: '手机',
            },
            {
                name: '电脑',
            },
            {
                name: '家电',
            },
        ]
    },
    mutations: {
        addclassify(state, value) {
            console.log(value)
            state.classify.push(value)
        },
        changeclassify(state, { scope,value}){
            // console.log(scope);
            // console.log(value);
            // debugger
            state.classify[scope.scope].name=value
        },
        detclassify(state, val) {
            state.classify.splice(val,1);
        }
    },
    actions: {
        addclassify(context, val) {
            context.commit('addclassify', val)
        },
        changeclassify(context, { scope,value}) {
            context.commit('changeclassify',{ scope,value})
        },
        detclassify(context, val) {
            context.commit('detclassify', val)
        }
    }
}