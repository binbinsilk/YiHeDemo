console.log(localStorage);
$('.registerSpan').html(localStorage.addressName)




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

var pasCheck =/^[0-9A-Za-z]{6,20}$/;
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



//图片验证码
				var AmendYZMS;
				//		随机验证码
				function RandomYZM() {
					function Random(m, n) {
						return Math.floor((Math.random() * (n - m + 1) + m));
					}
					var num1 = Random(0, 9);
					var num2 = Random(0, 9);
					var num3 = Random(0, 9);
					var num4 = Random(0, 9);
					AmendYZMS = String(num1) + num2 + num3 + num4;
					return AmendYZMS;
				}
				//先随机一次
				RandomYZM();
				$('.loginDiv').html(RandomYZM());



//验证码检测
$('#yanzheng').blur(function () {
	if ($('#yanzheng').val() == $('.loginDiv').html()) {
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

//看不清，换一张
$('.changeone').click(function () {
	RandomYZM();
	$('.loginDiv').html(RandomYZM());
});




//注册点击事件
$('.register_register').click(function  () {
	location.href = 'registerPage.html';
})
var arrPhones = [];   //接收本地存储中的phoneNum；
//var arrPass = [];    //接收本地存储中的userPassword;

//登录检测事件
$('.register_login').click(function  () {     
		if (localStorage.phoneNum) {
			arrPhones = localStorage.phoneNum.split('|');
			arrPass = localStorage.userPassword.split('|');
			//如果输入的手机号在本地中查找下标不等于-1，则说明该手机号已经注册
			if (arrPhones.indexOf($('#inNumber').val()) != -1) {
				//如果用户输入手机号在本地中存在，则执行登录操作
				if (arrPass[arrPhones.indexOf($('#inNumber').val())] == $('#inPass').val()) {
//					将用户手机号存到本地中，作为用户名显示在头部
					localStorage.userphone = arrPhones[arrPhones.indexOf($('#inNumber').val())];
			
					//跳转到首页
					location.href = './homePage.html';							
				} else{
					alert('密码输入错误，请重新输入!');
				}					
			}else{
				if ($('#inNumber').val() == '') {
					alert('请输入信息！');
				} else{
					alert('该用户未注册,请注册！');
					
				}
				
			}
		}else{
			alert('您还未注册！请注册');
		}
});




