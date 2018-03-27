console.log(localStorage)
//手机号检测
$('#inNumber').blur(function () {
	var chext = /^[1][3578]\d{9}$/;
	if (chext.test($('#inNumber').val())) {
		$('.register_inputRightImg').eq(0).show();
		$('.register_errorInput').eq(0).css('visibility','hidden');
	}else{
		if ($('#inNumber').val() == '') {
			$('.register_errorInput').eq(0).css('visibility','visible');
	   	 	$('.register_inputRightImg').eq(0).hide();
	   	 	$('#inNumber').parent().next().children().eq(1).html('请输入用户名！');
		}else{
			$('.register_errorInput').eq(0).css('visibility','visible');
			$('#inNumber').parent().next().children().eq(1).html('请输入正确的用户名！');
		}		
	}
	
		
	
	
	
});

var pasCheck = /^\d+[a-zA-Z]{1}/;
//密码检测
$('#inPass').blur(function () {
	if (pasCheck.test($('#inPass').val())) {
//		console.log($('#inPass').val());
		$('.register_inputRightImg').eq(1).show();
		$('.register_errorInput').eq(1).css('visibility','hidden');
	} else{
		if ($('#inPass').val() == '') {
			$('.register_errorInput').eq(1).css('visibility','visible');
	    		$('.register_inputRightImg').eq(1).hide();
	    		$('#inPass').parent().next().children().eq(1).html('请输入密码！');
		}else{
//			$('.register_errorInput').eq(1).html('请输入正确的密码！');
			$('.register_errorInput').eq(1).css('visibility','visible');
			$('#inPass').parent().next().children().eq(1).html('请输入正确的密码！');
		}
		
	}
});





//console.log($('.changeone').next().children().eq(1));
//验证码检测
$('#yanzheng').blur(function () {
	if ($('#yanzheng').val() == '9744') {
		$('.register_inputRightImg').eq(2).show();
		$('.register_errorInput').eq(2).css('visibility','hidden');
	}else{
		if ($('#yanzheng').val() == '') {
			$('.register_errorInput').eq(2).css('visibility','visible');
			$('.changeone').next().children().eq(1).html('请输入验证码');
		} else{
			$('.register_errorInput').eq(2).css('visibility','visible');
			$('.changeone').next().children().eq(1).html('请输入正确的验证码');
			$('.register_inputRightImg').eq(2).hide();
		}
	}
});






//var arrPhones = [];   //接收本地存储中的phoneNum；
//var arrPass = [];    //接收本地存储中的userPassword;
//登录检测事件
//$('.register_login').click(function  () {     
//		if (localStorage.phoneNum) {
//			arrPhones = localStorage.phoneNum.split('|');
//			arrPass = localStorage.userPassword.split('|');
//			if (arrPhones.indexOf($('#inNumber').val()) != -1) {				
//				if (arrPass[arrPhones.indexOf($('#inNumber').val())] == $('#inPass').val()) {
//					//跳转到首页
//					location.href = './homePage.html';						
//				} else{
//					alert('密码输入错误，请重新输入!');
//				}					
//			}else{
////				alert('该用户未注册,请注册！');
//			}
//		}
//});




