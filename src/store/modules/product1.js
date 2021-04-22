export default {
    namespaced: true,
    state: {
        index: 0,
        product: [
            {

                type: 'activity',
                img: 'https://picsum.photos/300/600?random=0',
                name: '产品名称',
                describe: '京崎（TOOKY）X9S 老人手机',
                oldMoney: '199',
                nowMoney: '158',
                discount: '1',
                kind: '手机',
                // 种类
                message: [
                    {
                        name: '商品版本',
                        kind: [
                            {
                                select: '黑色4G版',
                                money: 300,
                            },
                            {
                                select: '黑色4G版',
                                money: 300,
                            },
                        ],
                    },
                    {
                        name: '商品服务',
                        kind: [
                            {
                                select: '1年碎屏换屏 ￥19.00 ',
                                money: 19,
                            },
                            {
                                select: '2年全保修 ￥19.00',
                                money: 19,
                            },
                        ],
                    },


                ]
            },
            {

                type: 'activity',
                img: 'https://picsum.photos/300/600?random=2',
                name: '产品名称',
                describe: '京崎（TOOKY）X9S 老人手机',
                oldMoney: '199',
                nowMoney: '158',
                discount: '1',
                kind: '手机',
                // 种类
                message: [
                    {
                        name: '商品版本',
                        kind: [
                            {
                                select: '黑色4G版',
                                money: 300,
                            },
                            {
                                select: '黑色4G版',
                                money: 300,
                            },
                        ],
                    },
                    {
                        name: '商品服务',
                        kind: [
                            {
                                select: '1年碎屏换屏 ￥19.00 ',
                                money: 19,
                            },
                            {
                                select: '2年全保修 ￥19.00',
                                money: 19,
                            },
                        ],
                    },


                ]
            },
            {

                type: 'activity',
                img: 'https://picsum.photos/300/600?random=3',
                name: '产品名称',
                describe: '京崎（TOOKY）X9S 老人手机',
                oldMoney: '199',
                nowMoney: '158',
                discount: '1',
                kind: '手机',
                // 种类
                message: [
                    {
                        name: '商品版本',
                        kind: [
                            {
                                select: '黑色4G版',
                                money: 300,
                            },
                            {
                                select: '黑色4G版',
                                money: 300,
                            },
                        ],
                    },
                    {
                        name: '商品服务',
                        kind: [
                            {
                                select: '1年碎屏换屏 ￥19.00 ',
                                money: 19,
                            },
                            {
                                select: '2年全保修 ￥19.00',
                                money: 19,
                            },
                        ],
                    },


                ]
            },

        ],

    },
    mutations: {
        det_item(state, index) {
            state.product.splice(index, 1);
        },
        changeMessage(state, { index, listBel }) {
            state.product.splice(index, 1, listBel);
            // console.log(listBel);
        },
        addProduct(state, val) {
            state.product.push(val)
        }

    },
    actions: {
        det_item(context, val) {
            context.commit('det_item', val)
        },
        changeMessage(context, val) {
            context.commit('changeMessage', val)
        },
        addProduct(context, val) {
            context.commit('addProduct', val)
        }

    }
}

