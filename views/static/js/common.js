$(function () {
 
	// 由于所有的页面都会有用户信息，因此写在common.js中
	// 获取cookie中的信息
	//如果不是登录页面，才需要从cookie中获取数据
	if(location.pathname !="/dashboard/login"){
    var userinfo = $.cookie("userinfo");
    userinfo = JSON.parse(userinfo);
    console.log(userinfo);
    // 获取到userinfo信息
    // tc_avatar:"http://static.botue.com/images/avatar/59d78d5cdb0e9.jpg"
    // tc_name:"前端学院"
    
    // 通过模版，把信息放到用户信息上
    $("#user-info").html(template("profile-tpl",userinfo));

	}
  
 
	
})