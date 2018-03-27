//手机号检测
var chext = /^[1][3578]\d{9}$/;
$('#inNumber').blur(function () {
	
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


	var pasCheck = /^[0-9A-Za-z]{6,20}$/;
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

//再次确认密码检测
$('#inreNum').blur(function () {
	if ($('#inreNum').val() == $('#inPass').val() && $('#inPass').val() != '' && pasCheck.test($('#inPass').val()) == true) {
		$('.register_inputRightImg').eq(2).show();
		$('.register_errorInput').eq(2).css('visibility','hidden');
	} else{
		if ($('#inreNum').val() == '') {
			$('.register_errorInput').eq(2).css('visibility','visible');
	    		$('.register_inputRightImg').eq(2).hide();
	    		$('#inreNum').parent().next().children().eq(1).html('请输入确认密码！');
		}else{
			$('.register_errorInput').eq(2).css('visibility','visible');	
			$('.register_inputRightImg').eq(2).hide();
			$('#inreNum').parent().next().children().eq(1).html('请输入正确的确认密码！');
			
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
				$('.registerDiv').html(RandomYZM());



//验证码检测
$('#yanzheng').blur(function () {
	if ($('#yanzheng').val() == $('.registerDiv').html()){
		$('.register_inputRightImg').eq(3).show();
		$('.register_errorInput').eq(3).css('visibility','hidden');
	}else{
		if ($('#yanzheng').val() == '') {
			$('.register_errorInput').eq(3).css('visibility','visible');
			$('.changeone').next().children().eq(1).html('请输入验证码');
		} else{
			$('.register_errorInput').eq(3).css('visibility','visible');
			$('.changeone').next().children().eq(1).html('请输入正确的验证码');
		}
		
	}
});
//看不清，换一张
$('.changeone').click(function () {
	RandomYZM();
	$('.registerDiv').html(RandomYZM());
});




//手机验证码输入判断
	$('#yanzhengPhone').blur(function () {
		if ($('#yanzhengPhone').val() == localStorage.DataRandom) {
			$('.register_inputRightImg').eq(4).show();
			$('.clickGetCode').hide();       
			$('.register_errorInput').eq(4).css('visibility','hidden');
		} else{
			if ($('#yanzhengPhone').val() == '') {
				$('.register_errorInput').eq(4).css('visibility','visible');
				$('.clickGetCode').parent().next().children().eq(1).html('请输入手机验证码');
			} else{
				$('.register_errorInput').eq(4).css('visibility','visible');
				$('.clickGetCode').parent().next().children().eq(1).html('请输入正确的手机验证码');
			}
		}
	});
	



			//随机手机验证码
				function CreateRandom() {
					function Random(m, n) {
						return Math.floor((Math.random() * (n - m + 1) + m));
					}
					var num1 = Random(0, 9);
					var num2 = Random(0, 9);
					var num3 = Random(0, 9);
					var num4 = Random(0, 9);
					var num5 = Random(0, 9);
					var num6 = Random(0, 9);
					localStorage.DataRandom = String(num1) + num2 + num3 + num4 + num5 + num6;
					alert(localStorage.DataRandom);
				}





//验证码获取倒计时
var timer;
function countDown(a) {
	clearInterval(timer);
	$('.clickGetCode').click(function() {
		CreateRandom()
		timer = setInterval(function() {			
			a--;
			if(a == 0) {
				clearInterval(timer);
				$('.clickGetCode').html("点击获取验证码");
			}
			$('.clickGetCode').html(a + "秒后重试");
			
		}, 1000);
		
	
	});
}
countDown(60);


//阅读协议点击事件
var inputBol = false;
$('.register_check input').click(function () {
	inputBol = true;
})







//注册点击事件
var phoneNum;     //手机号
var userPassword;   //密码
$('.register_register').click(function  () {
	if (chext.test($('#inNumber').val()) && pasCheck.test($('#inPass').val()) && $('#inreNum').val() == $('#inPass').val() && $('#yanzheng').val() ==$('.registerDiv').html()  && $('#yanzhengPhone').val()==localStorage.DataRandom && inputBol == true) {
		//手机号存储到本地中
		phoneNum = $('#inNumber').val();
		if (!localStorage.phoneNum) {
			localStorage.phoneNum = phoneNum;
		} else{
			localStorage.phoneNum = localStorage.phoneNum + '|' + phoneNum;
		}
		//密码存储到本地中
		userPassword = $('#inPass').val();
		if (!localStorage.userPassword) {
			localStorage.userPassword = userPassword;
		} else{
			localStorage.userPassword = localStorage.userPassword + '|' + userPassword;
		}	
		alert('注册成功！请登录');
		location.href = './loginPage.html';
	}else{
		alert('请输入正确信息!');
	}
});



//登录检测事件
$('.register_login').click(function  () {
	location.href = 'loginPage.html';	
})

//localStorage.clear();

