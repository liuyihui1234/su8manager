/*字典表
 *web/Diction/getlistByParentId
 **/ 
function initOptionDict(request , uri, itemId, parentId, defaultValue){
			var data = {}; 
			data["parentId"] =  parentId ;
			var method = "post";
			var cont = null ;			
			request(uri, data, function(data) {
					if(data.code == 1) {						
						var itemList = data.data;								
						$('#' + itemId ).html("");
						layui.form.render("select");
						$.each(itemList, function (index, item) {
							$('#' + itemId ).append(new Option(item.name, item.id));// 下拉菜单里添加元素
						});
						
						$("#" + itemId ).val(defaultValue);
						layui.form.render("select");	
						
					}
				}, method, cont);			
		}

/*     转运的快递公司   /web/Diction/getAllCrop
 *     支付方式    /web/Paytype/selectAllPayType
 *     常见问题 /web/Problemcause/selectAllProblemCause
 * */
function initCorpDict(request , uri, itemId, defaultValue){
			var data = {}; 
			var method = "post";
			var cont = null ;			
			request(uri, data, function(data) {
					if(data.code == 1) {						
						var itemList = data.data;								
						$('#' + itemId ).html("");
						layui.form.render("select");
						$.each(itemList, function (index, item) {
							$('#' + itemId ).append(new Option(item.Name, item.Id));// 下拉菜单里添加元素
						});
						$("#" + itemId ).val(defaultValue);
						layui.form.render("select");	
						
					}
				}, method, cont);			
		}

	function initCorpDict1(request , uri, itemId, defaultValue){
			var data = {}; 
			var method = "post";
			var cont = null ;			
			request(uri, data, function(data) {

					if(data.code == 1) {						
						var itemList = data.data;								
						$('#' + itemId ).html("");
						layui.form.render("select");
						$.each(itemList, function (index, item) {
							$('#' + itemId ).append(new Option(item.name, item.id));// 下拉菜单里添加元素
						});
						$("#" + itemId ).val(defaultValue);
						layui.form.render("select");	
						
					}
				}, method, cont);			
		}

/*    
 *   快件类型     /web/Detype/getAllRecord   快运和快递 
 *   运输方式    /web/transport/getAllTransportmode
 * 	 班次管理     /web/Shift/getAllShift
 * 	物品类型  	/web/Goods/Goods  物品和文件
 * 	 
 */
function initDictShowName(request , uri, itemId, defaultValue){
			var data = {}; 
			var method = "post";
			var cont = null ;			
			request(uri, data, function(data) {
					if(data.code == 1) {						
						var itemList = data.data;								
						$('#' + itemId ).html("");
						layui.form.render("select");
						
						$.each(itemList, function (index, item) {
							$('#' + itemId ).append(new Option(item.name, item.name));// 下拉菜单里添加元素
						});
						
						$("#" + itemId ).val(defaultValue);
						layui.form.render("select");	
						
					}
				}, method, cont);			
		}

	/**
	 * 所属部门      /web/Department/getListTwo
	 * @param {Object} request
	 * @param {Object} uri
	 * @param {Object} itemId
	 * @param {Object} defaultValue
	 */
	function initDictShowNameOne(request , uri, itemId, defaultValue){
			var data = {}; 
			var method = "post";
			var cont = null ;			
			request(uri, data, function(data) {
					if(data.code == 1) {						
						var itemList = data.data;								
						$('#' + itemId ).html("");
						layui.form.render("select");
						
						$.each(itemList, function (index, item) {
							$('#' + itemId ).append(new Option(item.depaname, item.id));// 下拉菜单里添加元素
						});
						
						$("#" + itemId ).val(defaultValue);
						layui.form.render("select");	
						
					}
				}, method, cont);			
		}
	
	/**
	 * 包括隐藏域      /web/Department/getListTwo
	 * @param {Object} request
	 * @param {Object} uri
	 * @param {Object} itemId
	 * @param {Object} defaultValue
	 */
	function initDictShowNameTwo(request , uri, itemId, defaultValue,hidenId){
			var data = {}; 
			var method = "post";
			var cont = null ;	
			request(uri, data, function(data) {
					if(data.code == 1) {						
						var itemList = data.data;								
						$('#' + itemId ).html("");
						layui.form.render("select");
						
						$.each(itemList, function (index, item) {
							$('#' + itemId ).append(new Option(item.name, item.id));// 下拉菜单里添加元素
						});
						if(defaultValue == -1){
							$("#" + itemId ).val(data.data[0].id)
						}else{
							$("#" + itemId ).val(defaultValue);
						}
						layui.form.render("select");
						
						if(data.data.length > 0 ){
							$('#' + hidenId ).val(data.data[0].name);
						}						
					}
				}, method, cont);			
		}

/*    
 * 根据父节点查询地区
 * 
 */
function initRegionShowName(request , uri, itemId, parentId ,defaultValue){
			var data = {}; 
			data['parentCode']  = parentId;
			var method = "post";
			var cont = null ;			
			request(uri, data, function(data) {
					if(data.code == 1) {						
						var itemList = data.data;								
						$('#' + itemId ).html("");
						$('#' + itemId ).append(new Option('--请选择--', ''));
						$.each(itemList, function (index, item) {
							$('#' + itemId ).append(new Option(item.name, item.code));// 下拉菜单里添加元素
						});
						$("#" + itemId ).val(defaultValue);
						layui.form.render("select");
					}
				}, method, cont);			
		}

/*    
 * 根据父节点查询网点
 *web/incment/getIncByParent
 */
function initIncShowName(request , uri, itemId, parentId ,defaultValue){
			var data = {}; 
			data['parentCode']  = parentId;
			var method = "post";
			var cont = null ;			
			request(uri, data, function(data) {
				if(data.code == 1) {						
					var itemList = data.data;								
					$('#' + itemId ).html("");
					$('#' + itemId ).append(new Option('--请选择--', ''));
					$.each(itemList, function (index, item) {
						$('#' + itemId ).append(new Option(item.name, item.number));// 下拉菜单里添加元素
					});
					$("#" + itemId ).val(defaultValue);
					layui.form.render("select");
				}
			}, method, cont);			
		}


/*    
 * 根据父节点查询菜单信息
 * web/Menus/getMenuByParentId  
 * -1
 */
		function initMenuInfo(request , uri, itemId, parentId ,defaultValue){
			var data = {}; 
			data['parentId']  = parentId;
			var method = "post";
			var cont = null ;			
			request(uri, data, function(data) {
				if(data.code == 1) {						
					var itemList = data.data;								
					$('#' + itemId ).html("");
					$('#' + itemId ).append(new Option('请选择（如果不选择默认为一级菜单）', -1));
					$.each(itemList, function (index, item) {
						$('#' + itemId ).append(new Option(item.text, item.id));// 下拉菜单里添加元素
					});
					$("#" + itemId ).val(defaultValue);
					layui.form.render("select");
				}
			}, method, cont);			
		}
/*
 * /web/Diction/getAllUserGroup
 */
function initUserGroupInfo(request , uri, itemId,defaultValue){
	var data = {}; 
	var method = "post";
	var cont = null ;			
	request(uri, data, function(data) {
		if(data.code == 1) {						
			var itemList = data.data;	
			$('#' + itemId ).html("");
			var itemstr = '';
			$.each(itemList, function (index, item) {
				itemstr += '<input type="checkbox" name="a' + item.id +'" lay-skin="primary" value="' + item.id + '" title="'+item.groupname+'"/>'
			});
			$('#' + itemId ).html(itemstr);
			layui.form.render();
		}
	}, method, cont);			
}

		
