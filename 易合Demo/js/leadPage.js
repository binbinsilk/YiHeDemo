
//点击北京显示城市div
$('.cityShow').click(function () {
	$('#chooseCity').show();
	
	$('#chooseCity').mouseleave(function () {
		$('#chooseCity').hide();
	});
});

//输入框中的值改变时下面输入框和后面的显示一起改变
$('.chooseCity').change(function () {
	for (var $i = 0;$i < $('.cityUl span').length;$i++) {
		if ($('.cityUl span').eq($i).html() == $('.chooseCity').val()) {
//			console.log($('.chooseCity').val());
			$('#chooseCity').show();
			$('.cityUl span').eq($i).attr('class','spansStyle');
			$('.cityShow').html($('.cityUl span').eq($i).html());
		}else{
			$('.cityUl span').eq($i).attr('class','');
		}
	};
});

//点击城市div中的任一城市名，北京改为该城市名字
$(function  () {
	for (var $i = 0;$i < $('.cityUl span').length;$i++) {
		$('.cityUl span').eq($i).mouseenter(function () {
//			console.log($(this).html());
			$(this).attr('class','spansStyle');
		});
		$('.cityUl span').eq($i).mouseleave(function () {
			$(this).attr('class','');
		});
		$('.cityUl span').eq($i).click(function () {
			$('.cityShow').html($(this).html());
			$('#chooseCity').hide();
		});
	}
});


//点击进入易和，本地存储地区名字
var num = 0;
$('.joinYiHe').click(function () {
	localStorage.addressName =  $('.cityShow').html();
	location.href = './homePage.html';
	//将本地中的userphone清空
	localStorage.removeItem('userphone');
	console.log(localStorage);
});











