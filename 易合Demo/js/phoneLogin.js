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
	   	 	$('#inNumber').parent().next().children().eq(1).html('请输入手机号！');
		}else{
			$('.register_errorInput').eq(0).css('visibility','visible');
			$('#inNumber').parent().next().children().eq(1).html('请输入正确的手机号！');
		}
		
	}
});


//验证码检测
$('#yanzheng').blur(function () {
	if ($('#yanzheng').val() == '9744') {
		$('.register_inputRightImg').eq(1).show();
		$('.register_errorInput').eq(1).css('visibility','hidden');
	}else{
		if ($('#yanzheng').val() == '') {
			$('.register_errorInput').eq(1).css('visibility','visible');
			$('.changeone').next().children().eq(1).html('请输入验证码');
		} else{
			$('.register_errorInput').eq(1).css('visibility','visible');
			$('.changeone').next().children().eq(1).html('请输入正确的验证码');
		}
		
	}
});


//忘记密码 事件




//注册点击事件
$('.register_register').click(function  () {
	location.href = 'registerPage.html';
})

//登录检测事件
//$('.register_login').click(function  () {
//	location.href = 'loginPage.html';
//})
var arrPhones = [];   //接收本地存储中的phoneNum；
//登录检测事件
$('.register_login').click(function  () {     
		if (localStorage.phoneNum) {
			arrPhones = localStorage.phoneNum.split('|');
			arrPass = localStorage.userPassword.split('|');
			if (arrPhones.indexOf($('#inNumber').val()) != -1) {				
				location.href = './homePage.html';				
			}else{
				alert('该用户未注册,请注册！');
				location.href = './phoneLogin.html';
			}
		}
	localStorage.userphone = arrPhones[arrPhones.indexOf($('#inNumber').val())];
});



