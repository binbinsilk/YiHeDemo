//localStorage.clear();

//加的效果
$(".add").click(function() {
	var n = $(this).prev().val();
	var num = parseInt(n) + 1;
	$(this).prev().val(num);
});
//减的效果
$(".jian").click(function() {
	var n = $(this).next().val();
	var num = parseInt(n) - 1;
	if(num == 0) {
		return;
	}
	$(this).next().val(num);
});

//选择尺码和颜色

var divSpan = document.getElementsByClassName('sizeCloth')[0];
var sizeSpans = divSpan.getElementsByTagName('span');
var divColor = document.getElementsByClassName('colorCloth')[0];
var colorSpans = divColor.getElementsByTagName('span');
//选择尺码
var clothSize;
var clothColor;
for (var i = 0; i < sizeSpans.length - 1; i++) {
	sizeSpans[i].onclick = function () {
		for (var j = 0; j < sizeSpans.length -1; j++) {
			if (this == sizeSpans[j]) {
				this.style.border = '2px solid #EC6A17';
//				console.log(this.innerText);
				clothSize = this.innerText;
				if (!localStorage.clothSize) {
					localStorage.clothSize = clothSize;
				} else{
					localStorage.clothSize = localStorage.clothSize + '|' + clothSize;
				}
//				localStorage.clothSize = this.innerText;
				
			} else{
				sizeSpans[j].style.border = '1px solid #d3d3d3';
			}
		}
		
	}
}
//选择颜色
for (var i = 0; i < colorSpans.length; i++) {
	colorSpans[i].onclick = function () {
		for (var j = 0; j < colorSpans.length; j++) {
			if (this == colorSpans[j]) {
				this.style.border = '2px solid #EC6A17';
				clothColor = this.innerText;
				if (!localStorage.clothColor) {
					localStorage.clothColor = clothColor;
				} else{
					localStorage.clothColor = localStorage.clothColor + '|' + clothColor;
				}
//				localStorage.clothColor = this.innerText;
			} else{
				colorSpans[j].style.border = '1px solid #d3d3d3';
			}
		}
		
	}
}






//加入购物车弹出提示框
localStorage.num = 0;
console.log(localStorage);
$('#joinShopBtn').click(function () {
	//将购买数据信息存储到本地
	var shopOfNum;
	shopOfNum = $('.num').val();
	if (!localStorage.shopOfBuyNum) {
		localStorage.shopOfBuyNum = shopOfNum;
	} else{
		localStorage.shopOfBuyNum = localStorage.shopOfBuyNum + '|' + shopOfNum;
	}
	localStorage.num++;
	console.log(localStorage.num);
	$('#shopCarJumpPage').show();
	$('#shopbody').show();
	$('#gotoShop').click(function () {
		$('#shopCarJumpPage').hide();
	    $('#shopbody').hide();
	});
	
	
//	跳转到购物车
	$('#seeShopCar').click(function () {
		location.href = './shopPageofnull.html';
	});
});
























//评论页---------------------------------------------------------------

//点击小图片显示大图片
var img = document.getElementsByClassName('goodsJudge_rightImg')[0];
var imgs = img.getElementsByTagName('span');
var bigimg = document.getElementsByClassName('goodsJudge_rightImgshow')[0];
var bigImgs = bigimg.getElementsByTagName('img');
for(var i = 0; i < imgs.length; i++) {
	//添加标识,记录
	imgs[i].index = i;
	imgs[i].onclick = function() {
		for(var j = 0; j < imgs.length; j++) {
			imgs[j].className = "";
			bigImgs[j].style.display = "none";
		}
		var k = this.index;
		//显示对应的界面
		bigImgs[k].style.display = "block";
	}
}



//点击商品详情、商品评价、成交记录 切换不同页面----------------------------
var ul = document.getElementsByClassName('goodsDetailUl')[0];
var ulis = ul.querySelectorAll('li');
var divs = document.querySelectorAll('#goodsDetailRecord>div');
for(var i = 0; i < ulis.length; i++) {
	ulis[0].className = "goodsDetailLi";
	//添加标识,记录
	ulis[i].index = i;
	ulis[i].onclick = function() {
		for (var k = 0; k < divs.length; k++) {
			ulis[k].className = '';
			divs[k].style.display = "none";
		}	
		this.className = "goodsDetailLi";
		var n = this.index;
		//显示对应的界面
		divs[n].style.display = "block";
	}
}