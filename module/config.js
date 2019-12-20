layui.define(function (exports) {

    var config = {
        base_server: 'json/', // 接口地址，实际项目请换成http形式的地址
        server: 'http://127.0.0.1:8088/',  //http://www.k8yz.com/
        urlPath: 'http://127.0.0.1:8020/su8manager/components/',
        tableName: 'easyweb',  // 存储表名
        autoRender: false,  // 窗口大小改变后是否自动重新渲染表格，解决layui数据表格非响应式的问题
        // 获取缓存的token
        getToken: function () {
            var t = layui.data(config.tableName).token;
            if (t) {
                return JSON.parse(t);
            }
        },
        putCode: function (code) {
            layui.sessionData(config.tableName, {
                key: 'code',
                value: JSON.stringify(code)
            });
        },
        getCode: function () {
            var t = layui.sessionData(config.tableName).code;
            if (t) {
                return JSON.parse(t);
            }
        },
        // 清除user
        removeToken: function () {
            layui.data(config.tableName, {
                key: 'token',
                remove: true
            });
        },
        // 缓存token
        putToken: function (token) {
            layui.data(config.tableName, {
                key: 'token',
                value: JSON.stringify(token)
            });
        },
       menus: [{
            name: '主页',
            url: 'javascript:;',
            icon: 'layui-icon-home',
            subMenus: [{
                name: '主页',
                url: '#!console',
                path: 'console.html'
            }]
        },{
            name: '企业信息管理',
            url: 'javascript:;',
            icon: 'layui-icon-home',
            subMenus: [{
                name: '企业部门管理',
                url: '#!deparment',
                path: 'filemaintain/Department.html'
            },{
                name: '公司网点管理',
                url: '#!incment',
                path: 'incment/incment.html'
            }]
        }, {
            name: '系统用户管理',
            icon: 'layui-icon-set',
            url: 'javascript:;',
            subMenus: [{
                name: '用户组管理',
                url: '#!user',  
                path: 'systemuser/usergroup_manger.html',
                auth: 'post:/user/query'
            }, {
                name: '系统用户管理',
                url: '#!role',
                path: 'systemuser/sysuser_manger.html',
                auth: 'get:/role'
            }, {
                name: '系统模块管理',
                url: '#!authorities',
                path: 'systemuser/sysuser_menus.html',
                auth: 'get:/authorities'
            }, {
                name: '系统权限管理',
                url: '#!login_record',
                path: 'systemuser/sysuser_authority.html',
                auth: 'get:/loginRecord'
            }]
        }, {
            name: '扫描管理',
            url: 'javascript:;',
            icon: 'layui-icon-unlink',
            subMenus: [{
                name: '收件交单扫描',
                url: '#!recivescan',  
                path: 'scanmanage/sm_addresseesScan.html',
                auth: 'post:/user/query'
            }, {
                name: '收件称重扫描',
                url: '#!weightscan',
                path: 'scanmanage/sm_weighingscan.html',
                auth: 'get:/role'
            }, {
                name: '发件/袋扫描',
                url: '#!sendscan',
                path: 'scanmanage/sm_sentScan.html',
                auth: 'get:/authorities'
            }, {
                name: '装袋扫描',
                url: '#!bagscan1',
                path: 'scanmanage/sm_baggingscan.html',
                auth: 'get:/loginRecord'
            },{
                name: '到件扫描',
                url: '#!sm_receivedscan',  
                path: 'scanmanage/sm_receivedscan.html',
                auth: 'post:/user/query'
            }, {
                name: '解袋扫描',
                url: '#!undocan',
                path: 'scanmanage/sm_removingbagscan.html',            
                auth: 'get:/role'
            }, {
                name: '转运扫描',
                url: '#!transferscan',
                path: 'scanmanage/sm_transportScan.html',
                auth: 'get:/loginRecord'
            }, {
                name: '转运追踪扫描',
                url: '#!bagscan',
                path: 'system/login_record.html',
                auth: 'post:/authorities'
            },{
                name: '派件扫描',
                url: '#!deliveryscan',  
                path: 'scanmanage/distributed_scan.html',
                auth: 'get:/loginRecord'
            }, {
                name: '客户签收扫描',
                url: '#!customersignscan',
                path: 'scanmanage/customsign_scan.html',
                auth: 'get:/loginRecord'
            }, {
                name: '留仓件、问题件扫描',
                url: '#!problemscan',
                path: 'scanmanage/problem_scan.html',
                auth: 'get:/loginRecord'
            }]
        },{
            name: '单证录入',
            icon: 'layui-icon-survey',
            url: 'javascript:;',
            subMenus: [{
                name: '物流跟踪记录',
                url: '#!logisticstracking',  
                path: 'filemaintain/logisticstracking.html',
                auth: 'post:/user/query'
            }, {
                name: '扫描查询',
                url: '#!scanquery',
                path: 'Shift.html',
                auth: 'get:/author'
            }, {
                name: '预约单管理',
                url: '#!Reservation',
                path: 'filemaintain/ReservationOrder.html',
                auth: 'get:/authorities'
            }, {
                name: '寄/派件运单管理',
                url: '#!sendOrder',
                path: 'filemaintain/sendOrder.html',
                auth: 'get:/loginRecord'
            }]
        },{
            name: '基本资料',
            icon: 'layui-icon-survey',
            url: 'javascript:;',
            subMenus: [{
                name: '业务类型',
                url: '#!Urgent',
                path: 'filemaintain/Urgent.html',
                auth: 'post:/user/query'
            }, {
                name: '班次管理',
                url: '#!Shift',
                path: 'filemaintain/Shift.html',
                auth: 'get:/role'
            }, {
                name: '客户资料',
                url: '#!reservation',
                path: 'filemaintain/authorities.html',
                auth: 'get:/authorities'
            }, {
                name: '供应商列表',
                url: '#!Supplier',
                path: 'filemaintain/Supplier.html',
                auth: 'get:/loginRecord'
            },{
                name: '采购管理',
                url: '#!logistics',
                path: 'filemaintain/incment.html',
                auth: 'post:/user/query'
            }, {
                name: '快件类型',
                url: '#!Detype',
                path: 'filemaintain/Detype.html',
                auth: 'get:/role'
            }, {
                name: '支付方式',
                url: '#!Paytype',
                path: 'filemaintain/Paytype.html',
                auth: 'get:/authorities'
            }, {
                name: '物料分类',
                url: '#!waybill',
                path: 'filemaintain/login_record.html',
                auth: 'get:/loginRecord'
            }, {
                name: '问题原因',
                url: '#!Problemcause',
                path: 'filemaintain/Problemcause.html',
                auth: 'get:/loginRecord'
            }, {
                name: '运输方式',
                url: '#!Transport',
                path: 'filemaintain/Transport.html',
                auth: 'get:/loginRecord'
            }]
        },{
            name: '数据资料管理',
            icon: 'layui-icon-survey',
            url: 'javascript:;',
            subMenus: [{
                name: '数据管理',
                url: '#!Diction',
                path: 'filemaintain/Diction.html',
                auth: 'post:/user/query'
            }, {
                name: '省市区管理',
                url: '#!Regioninfo',
                path: 'filemaintain/Regioninfo.html',
                auth: 'get:/role'
            }]
        },{
            name: '资料维护',
            icon: 'layui-icon-survey',
            url: 'javascript:;',
            subMenus: [{
                name: '快件资费管理',
                url: '#!logistics',
                path: 'incment/incment.html',
                auth: 'post:/user/query'
            }, {
                name: '中心转运成本维护',
                url: '#!Regioninfo1',
                path: 'filemaintain/Regioninfo1.html',
                auth: 'get:/role'
            },{
                name: '保价区间维护',
                url: '#!Regioninfo1',
                path: 'filemaintain/Regioninfo2.html',
                auth: 'get:/role'
            },{
                name: '客户保价维护',
                url: '#!Regioninfo1',
                path: 'filemaintain/Regioninfo3.html',
                auth: 'get:/role'
            },{
                name: '结算保价维护',
                url: '#!Regioninfo1',
                path: 'filemaintain/Regioninfo4.html',
                auth: 'get:/role'
            },{
                name: '物料品名维护',
                url: '#!Product',
                path: 'filemaintain/Product.html',
                auth: 'get:/role'
            }]
        },{
            name: '前端维护',
            icon: 'layui-icon-survey',
            url: 'javascript:;',
            subMenus: [{
                name: '帮助中心',
                url: '#!Helpcente',
                path: 'filemaintain/Helpcente.html',
                auth: 'post:/user/query'
            },{
                name: '地区价格管理',
                url: '#!Prive',
                path: 'filemaintain/Price.html',
                auth: 'post:/user/query'
            }]
        }],
        // 当前登录的用户
        getUser: function () {
            var u = layui.data(config.tableName).login_user;
            if (u) {
                return JSON.parse(u);
            }
        },
        // 缓存user
        putUser: function (user) {
            layui.data(config.tableName, {
                key: 'login_user',
                value: JSON.stringify(user)
            });
        }
    };
    exports('config', config);
});
