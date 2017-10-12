/**
 * Created by sevEn on 2017/10/12.
 */
define(["jquery","form","cookie"],function ($) {

//          1,获取登录按钮，注册事件，
//          可以对form表单注册submit事件，可以通过enter登录，可以触发登录按钮
    $("form").submit(function () {
//            首先判断用户输入是否合法，如果输入为空，则提醒
      if($("input[name=tc_name]").val().trim() =="" ){
        alert("请输入用户名");
        return false;
      }
      if($("input[name=tc_pass]").val().trim() =="" ){
        alert("请输入密码");
        return false;
      }


//            表单序列化，收集表单信息，input需要有name属性，与接口文档一致
//       var data = $(this).serialize();
//            发送ajax请求
      $(this).ajaxSubmit({
        
        url:"/api/login",
        type:"post",
        // data:data,
        success:function (data) {
          console.log(data);
          if(data.code == 200){
//                  设置首页的用户头像
//                  在login中返回的数据中，data.result中有客户的name与头像信息
//                  由于首页中会用到客户信息，因此可以存储在cookie中，以便于全局可以使用
//                  由于cookie中只能存储字符串，因此可以先转为字符串，等用到时候在转回对象
            console.log(data.result);
            $.cookie("userinfo",JSON.stringify(data.result),{path:"/",expires: 365});
            
            //登录成功，跳转首页,直接修改url地址
            location.pathname = "/";
            
          }
          
        }
        
      })
      
      //阻止表单的默认事件，不让表单自己提交信息
      return false;
      
    })
  
})