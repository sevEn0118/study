define(["jquery","template","cookie"],function ($,template) {
  // 由于所有的页面都会有用户信息，因此写在common.js中
  // 获取cookie中的信息
  //如果不是登录页面，才需要从cookie中获取数据
  if(location.pathname !="/dashboard/login"){
    
    //判断如果没有登录，则切换到登录界面
    // 正常情况下，会直接后台判断，现在直接判断cookie中是否有PHPSESSID
    if(!$.cookie("PHPSESSID")){
      location.href = "/dashboard/login";
    }
    
    
    var userinfo = $.cookie("userinfo");
    userinfo = JSON.parse(userinfo);
    console.log(userinfo);
    // 获取到userinfo信息
    // tc_avatar:"http://static.botue.com/images/avatar/59d78d5cdb0e9.jpg"
    // tc_name:"前端学院"
    // 通过模版，把信息放到用户信息上
    $("#user-info").html(template("profile-tpl",userinfo));
  }
  
  //点击退出按钮，退出
  //向后台发送ajax请求,后台删除cookie与session
  $("#btn-logout").click(function () {
      $.ajax({
        url:"/api/logout",
        type:"post",
        success:function (data) {
          // console.log(data);
          if(data.code ==200){
            //直接跳回到登录页面
            location.href = "/dashboard/login"
          }
        }
      })
  })
  
  
})