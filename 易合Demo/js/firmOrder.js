//localStorage.clear();
//console.log(localStorage);

//定义变量，存储获取到的各个输入框的内容
var nameOfGetGoods;
var province;
var city;
var county;
var detailAdress;
var mobileTelephone;
var telephoneFixBefore;
var telephoneFix;



//将收货人信息 存储到本地中
function localStroageOfBuyNameSave () {
	nameOfGetGoods = $('.nameOfGetGoods').val();
	province = $('#s_province').val();
	city = $('#s_city').val();
	county = $('#s_county').val();
	detailAdress = $('.detailAdress').val();
	mobileTelephone = $('.telephone').val();
	telephoneFixBefore = $('.telephoneFix_before').val();
	telephoneFix = $('.telephoneFix').val();
	//存储收货人姓名
	if (!localStorage.nameOfGetGoods) {
		localStorage.nameOfGetGoods = nameOfGetGoods;
	}else{
		localStorage.nameOfGetGoods = localStorage.nameOfGetGoods + '|' + nameOfGetGoods;
	}
	//存储省份
	if (!localStorage.province) {
		localStorage.province = province;
	}else{
		localStorage.province = localStorage.province + '|' + province;
	}
	//存储城市
	if (!localStorage.city) {
		localStorage.city = city;
	}else{
		localStorage.city = localStorage.city + '|' + city;
	}
	//存储地区或县
	if (!localStorage.county) {
		localStorage.county = county;
	}else{
		localStorage.county = localStorage.county + '|' + county;
	}
	//存储详细地址
	if (!localStorage.detailAdress) {
		localStorage.detailAdress = detailAdress;
	}else{
		localStorage.detailAdress = localStorage.detailAdress + '|' + detailAdress;
	}
	//存储联系电话
	if (!localStorage.mobileTelephone) {
		localStorage.mobileTelephone = mobileTelephone;
	}else{
		localStorage.mobileTelephone = localStorage.mobileTelephone + '|' + mobileTelephone;
	}
	//存储固定电话头部
	if (!localStorage.telephoneFixBefore) {
		localStorage.telephoneFixBefore = telephoneFixBefore;
	}else{
		localStorage.telephoneFixBefore = localStorage.telephoneFixBefore + '|' + telephoneFixBefore;
	}
	//存储固定电话部分
	if (!localStorage.telephoneFix) {
		localStorage.telephoneFix = telephoneFix;
	}else{
		localStorage.telephoneFix = localStorage.telephoneFix + '|' + telephoneFix;
	}
	
}


// 定义数组，用来存储 本地中的数据解析后的数据
var nameOfGetGoodsArr = [];
var provinceArr = [];
var cityArr = [];
var countyArr = [];
var detailAdressArr = [];
var mobileTelephoneArr = [];
var telephoneFixBeforeArr = [];
var telephoneFixArr = [];

// 从本地中取出收货人信息的数据
function localStroageOfBuyNameTake () {
	nameOfGetGoodsArr = localStorage.nameOfGetGoods.split('|');
	provinceArr = localStorage.province.split('|');
	cityArr = localStorage.city.split('|');
	countyArr = localStorage.county.split('|');
	detailAdressArr = localStorage.detailAdress.split('|');
	mobileTelephoneArr = localStorage.mobileTelephone.split('|');
	telephoneFixBeforeArr = localStorage.telephoneFixBefore.split('|');
	telephoneFixArr = localStorage.telephoneFix.split('|');
	
}


//购物车提交订单界面-------------------------------------------------------------------------------------------------------------------------
//如果没有收货人姓名 则显示填写信息页面内容
if (!localStorage.nameOfGetGoods) {
//	var divObj = $('<div class="shopcart2"><span>收货人信息</span></div><!--填写地址下部--><div id="firm"><ul id="firmOrder_2Ul"><li><span style="margin-left: -12px;color: #ec6a17;">*</span><span style="margin-left: -3px">收货人姓名:</span><input class="nameOfGetGoods" type="text" value="" style="width:331px; height: 35px;margin-left: 17px;" /></li><li><div  class="span1" ><span style="color: #ec6a17;">*</span><span>所在地区:</span><select id="s_province" name="s_province" style="background: white;font-size: 14px;height: 28px;" ></select>  <select id="s_city" name="s_city" style="background: white;font-size: 14px;height: 28px;"></select>  <select id="s_county" name="s_county" style="background: white;font-size: 14px;height: 28px;"></select></div></li><li><span style="color: #ec6a17;">*</span><span>详细地址:</span><input class="detailAdress" type="text" value="" style="width:460px; height: 35px;margin-left: 20px;" /></li><li><span style="color: #ec6a17;">*</span><span>联系电话:</span><input class="telephone" type="text" value="" style="width:150px;margin-left: 20px;height: 35px;" /><span style="margin-left: 8px;">或固定电话:</span><input class="telephoneFix_before" type="text" name="" id="" value="" style="width:50px;height: 35px;" /><span>-</span><input class="telephoneFix" type="text" name="" id="" value="" style="width:125px;height: 35px;" /></li><li><span class="usuallAdress" style="margin-left: 100px;">确认并设为默认地址</span></li></ul></div>')
//	divObj.after($('.orderNums'));
//	$('.orderNums').append(divObj);
	$('.shopcart2').show();
	$('#firm').show();
	
	//如果没有收货人，则个人中心界面的地址没有信息，显示填写地址界面
	$('#orderPageOfCenterRightBottom1').show();
	
	
//	点击确认并设为默认按钮，数据存储到本地
	$('.usuallAdress').click(function () {
		localStroageOfBuyNameSave();
		console.log(localStorage);
		$('.nameOfGetGoods').val('');
		$('#s_province').val('');
		$('#s_city').val(' ');
		$('#s_county').val('');
		$('.detailAdress').val('');
		$('.telephone').val('');
		$('.telephoneFix_before').val('');
		$('.telephoneFix').val('');
		location.reload();
	});
	
	for (var i = 0; i < nameOfGetGoodsArr.length;i++) {
//		if ($('.shezhiRadio').checked) {
			var adressTr = $('<li><input type="radio" name="choose" value="1"/><span>'+nameOfGetGoodsArr[i]+'&nbsp&nbsp'+provinceArr[i]+cityArr[i]+countyArr[i]+detailAdressArr[i]+'&nbsp&nbsp'+mobileTelephoneArr[i]+'&nbsp&nbsp'+'固定电话'+telephoneFixBeforeArr[i]+'-'+telephoneFixArr[i]+'</span><span>默认地址</span><a href="###">删除</a><a href="##">修改</a></li>');
			$('.orderNums').append(adressTr);
//		} else{
//			var adressTr = $('<li><input type="radio" name="choose" value="1"/><span>'+nameOfGetGoodsArr[i]+'&nbsp&nbsp'+provinceArr[i]+cityArr[i]+countyArr[i]+detailAdressArr[i]+'&nbsp&nbsp'+mobileTelephoneArr[i]+'&nbsp&nbsp'+'固定电话'+telephoneFixBeforeArr[i]+'-'+telephoneFixArr[i]+'</span><a href="###">删除</a><a href="##">修改</a></li>');
//			$('.orderNums').append(adressTr);
//		}
		
		
	}
	
} else{
	//如果购物车已经添加了地址，则显示地址列界面
	$('#shouqi').show();
	$('#zhankai').show();
	$('.shopcart2').remove();
	$('#firm').remove();
	localStroageOfBuyNameTake();
	for (var i = 0; i < nameOfGetGoodsArr.length;i++) {
		var adressTr = $('<li><input type="radio" name="choose" value="1"/><span>'+nameOfGetGoodsArr[i]+'&nbsp&nbsp'+provinceArr[i]+cityArr[i]+countyArr[i]+detailAdressArr[i]+'&nbsp&nbsp'+mobileTelephoneArr[i]+'&nbsp&nbsp'+'固定电话'+telephoneFixBeforeArr[i]+'-'+telephoneFixArr[i]+'</span><span>默认地址</span><a href="###" class="deleteAdressBtn">删除</a><a href="##">修改</a></li>');
		$('.orderNums').append(adressTr);
	}
	$('.orderNums').show();
	$('.shopcart').show();
	
	//有收货人信息，则将信息传到个人中心里的地址
	$('#orderPageOfCenterRightBottom1').hide();
	$('#orderPageOfCenterRightBottom3').show();
	for (var i = 0; i < nameOfGetGoodsArr.length;i++) {
		var AddressTrs = $('<tr><td>'+(i+1)+'</td><td>'+nameOfGetGoodsArr[i]+'</td><td>'+provinceArr[i]+cityArr[i]+countyArr[i]+detailAdressArr[i]+'</td><td>'+detailAdressArr[i]+'</td><td>'+mobileTelephoneArr[i]+'</td><td>家里的地址</td><td><span style="border-right: 1px solid gray;padding-right: 5px;">修改</span><span style="padding-left: 5px;" class="deleteAdressBtn">删除</span></td></tr>');
		//	插入节点
		$('.orderPageOfCenterRightBottom3Tabl').append(AddressTrs);
	}
}



//个人中心地址管理中添加地址，存入本地，在确认订单界面和地址管理界面都显示出来
$('.orderPageOfCenterRightBottom2Btn').click(function () {
		localStroageOfBuyNameSave();
		console.log(localStorage);
		$('.nameOfGetGoods').val('');
		$('#s_province').val('');
		$('#s_city').val(' ');
		$('#s_county').val('');
		$('.detailAdress').val('');
		$('.telephone').val('');
		$('.telephoneFix_before').val('');
		$('.telephoneFix').val('');
		location.reload();
	});
	var clothSizesarr = [];
	var clothColorsarr = [];
	var shopOfNumsarr = [];
	////		将本地中存储的选择结算的衣服尺码和颜色数据字符串分割为数组
		if (localStorage.size) {
			clothSizesarr = localStorage.size.split('|');
			clothColorsarr = localStorage.color.split('|');
			shopOfNumsarr = localStorage.numofshop.split('|');
//			console.log(clothSizesarr);
//			console.log(clothColorsarr);
		}
//		//将选择好的购物物品数据插入到确认订单界面的表格中
		for (var i = 0; i < clothSizesarr.length; i++) {
			var tableTr = $('<tr class="tr"><td class="checkbox" style="width:200px;"><img style="vertical-align: middle;" src="img/goodsimg/small.jpg" alt=""/><span>海澜之家 衬衫</span></td><td class="goodsTr"><p id="shopPage_clothSize">尺码: '+ clothSizesarr[i] +'</p><p id="shopPage_clothColor">颜色：'+clothColorsarr[i]+'</p> </td><td class="price">400.00</td><td class="count">'+shopOfNumsarr[i]+'</td><td class="subtotal">'+shopOfNumsarr[i]*400+'.00</td></tr>')
			if (localStorage.num != 0) {
				$('.catbox').show();
				$('.noOrderLi').hide();
				$('.catbox tbody').before(tableTr);
			}	
		}



//商品金额和结算计算
$('.jine span').html(localStorage.clothPrice);
$('.heji span').html(localStorage.clothPrice - 0 + '.00');
 

//提交订单后,跳转到提交成功界面
$('.upBillBtn').click(function  () {
	location.href = 'billUpSuccessed.html';
});

//添加新地址的点击事件
$('.addNewAdress').click(function () {
	_init_area();
	$('#orderPageOfCenter').show();
	$('.grayWrap').show();
});

//点击返回 不保存地址
$('.returnBack').click(function () {
	$('#orderPageOfCenter').hide();
	$('.grayWrap').hide();
	return;
});


//点击保存 
$('.doit').click(function () {
		localStroageOfBuyNameSave();
		location.reload();
//		console.log(localStorage);
});


//收货人信息列表  点击删除, 所在列删除及本地删除
$('.deleteAdressBtn').click(function () {
//	console.log($('.deleteAdressBtn').index($(this)));
	localStroageOfBuyNameTake();
	nameOfGetGoodsArr.splice($('.deleteAdressBtn').index($(this)),1);
	provinceArr.splice($('.deleteAdressBtn').index($(this)),1);
    cityArr.splice($('.deleteAdressBtn').index($(this)),1);
	countyArr.splice($('.deleteAdressBtn').index($(this)),1);
	detailAdressArr.splice($('.deleteAdressBtn').index($(this)),1);
	 mobileTelephoneArr.splice($('.deleteAdressBtn').index($(this)),1);
	telephoneFixBeforeArr.splice($('.deleteAdressBtn').index($(this)),1);
	telephoneFixArr.splice($('.deleteAdressBtn').index($(this)),1);
	var nameOfGetGoodsArrs = nameOfGetGoodsArr;
	var provinceArrs = provinceArr;
	var cityArrs = cityArr;
	var countyArrs = countyArr;
	var detailAdressArrs = detailAdressArr;
	var mobileTelephoneArrs = mobileTelephoneArr;
	var telephoneFixBeforeArrs = telephoneFixBeforeArr;
	var telephoneFixArrs = telephoneFixArr;
	localStorage.nameOfGetGoods = nameOfGetGoodsArrs.join('|');
	localStorage.province = provinceArrs.join('|');
	localStorage.city = cityArrs.join('|');
	localStorage.county = countyArrs.join('|');
	localStorage.detailAdress = detailAdressArrs.join('|');
	localStorage.mobileTelephone = mobileTelephoneArrs.join('|');
	localStorage.telephoneFixBefore = telephoneFixBeforeArrs.join('|');
	localStorage.telephoneFix = telephoneFixArrs.join('|');
	location.reload();
});


//点击某一收货人信息时,将数据存储到本地 localStorage.adressTobillUp
var arrAdressTobillUp = [];
$('.orderNums input').click(function () {
	console.log($('.orderNums input').index($(this)));
	console.log(nameOfGetGoodsArr[$('.orderNums input').index($(this))]);
	arrAdressTobillUp.push(nameOfGetGoodsArr[$('.orderNums input').index($(this))]);
	arrAdressTobillUp.push(provinceArr[$('.orderNums input').index($(this))]);
	arrAdressTobillUp.push(cityArr[$('.orderNums input').index($(this))]);
	arrAdressTobillUp.push(countyArr[$('.orderNums input').index($(this))]);
	arrAdressTobillUp.push(detailAdressArr[$('.orderNums input').index($(this))]);
	arrAdressTobillUp.push(mobileTelephoneArr[$('.orderNums input').index($(this))]);
	arrAdressTobillUp.push(telephoneFixBeforeArr[$('.orderNums input').index($(this))]);
	arrAdressTobillUp.push(telephoneFixArr[$('.orderNums input').index($(this))]);
	console.log(arrAdressTobillUp);
	localStorage.adressTobillUp = arrAdressTobillUp;
//	console.log(localStorage.adressTobillUp);
})

//总计金额显示
$('.countMoney').html('￥'+$('.heji span').html());

var n = $('.countMoney').html();
//应付金额显示
$('.firmOrderPayMoney').html(localStorage.clothPrice - 10 + '.00');

//点击收起动画
$('#shouqi').click(function () {
	$('.orderNums').slideUp(1000);
});
$('#zhankai').click(function () {
	$('.orderNums').slideDown(1000);
});

