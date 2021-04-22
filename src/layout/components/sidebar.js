export const list =
    [

        {
            type: 'child',
            patch: 'table',
            index: '1',
            icon: 'el-icon-location',
            title: '商品管理',
            data: [
                {
                    path: 'table',
                    label: '商品信息表',
                },
                {
                    path: 'productList',
                    label: '商品列表',
                },
                {
                    path: 'addclassify',
                    label: '添加分类',
                },

            ]
        },
        {
            // noChild
            type: 'noChild',
            index: '2',
            patch: '#',
            icon: 'el-icon-location',
            title: '用户管理',
           
        },

    ]
