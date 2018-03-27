//坐标下拉列表
	//获取左边的所有a
		var ul = document.getElementById("orderPageOfCenterLeftUl");
		var spans = ul.querySelectorAll("li a");
		//为所有的li 下的 span添加鼠标移入事件
		for (var i = 0;i < spans.length;i++ ){
			spans[i].onmouseenter = function () {
				for (var j = 0;j < spans.length;j++) {
					if (this == spans[j]) {
						this.style.color = '#ed7122';
						this.style.borderBottom = "1px solid #ed7122";
					} else{
						spans[j].style.color = "";
						spans[j].style.borderBottom = "";
					}
				}
			}
		}
		//为所有的li 下的 span添加鼠标移出事件
		for (var i = 0;i <spans.length;i++ ){
			spans[i].onmouseleave = function () {
				for (var j = 0;j < spans.length;j++) {
					if (this == spans[j]) {
						this.style.color = '';
						this.style.borderBottom = "";
					} 
				}
			}
		}
//为添加新地址按钮添加点击事件
$(".orderPageButtonTop").click(function () {
	$("#orderPageOfCenterRightTop").hide();
	$("#orderPageOfCenterRightBottom1").hide();
	$("#orderPageOfCenterRightTop2").show();
	$("#orderPageOfCenterRightBottom2").show();
});
$(".orderPageOfCenterRightBottomText2").click(function () {
	$("#orderPageOfCenterRightTop").hide();
	$("#orderPageOfCenterRightBottom1").hide();
	$("#orderPageOfCenterRightTop2").show();
	$("#orderPageOfCenterRightBottom2").show();
});
//为书写新地址提交按钮添加点击事件
//序号

//var AddressX = 1;


//
//$(".orderPageOfCenterRightBottom2Btn").click(function () {
//	$("#orderPageOfCenterRightTop").show();
//	$("#orderPageOfCenterRightBottom1").hide();
//	$("#orderPageOfCenterRightTop2").hide();
//	$("#orderPageOfCenterRightBottom2").hide();
//	$('#orderPageOfCenterRightBottom3').show();
	
	
	
//	插入节点操作
//	获取输入框中的值
//	var Addre2inp1 = $('.orderPageAddre2inp1').val();
//	var Addre2inp2 = $('.orderPageAddre2inp2').val();
//	var Addre2inp3 = $('.orderPageAddre2inp3').val();
//	创建节点
//	AddressX++;
//	var AddressTrs = $('<tr><td>'+AddressX+'</td><td>'+Addre2inp1+'</td><td>北京 北京市 朝阳区</td><td>'+Addre2inp2+'</td><td>'+Addre2inp3+'</td><td>家里的地址</td><td><span style="border-right: 1px solid gray;padding-right: 5px;">修改</span><span style="padding-left: 5px;">删除</span></td></tr>')
//	插入节点
//	$('.orderPageOfCenterRightBottom3Tabl').append(AddressTrs);
//	清空输入框
//	 $('.orderPageAddre2inp1').val('');
//	 $('.orderPageAddre2inp2').val('');
//	 $('.orderPageAddre2inp3').val('');
//});












