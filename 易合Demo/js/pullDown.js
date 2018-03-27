$('#tradeClassify_pullDown').hide();
$('#tradeClassify').mouseenter(function () {
		$('#tradeClassify_pullDown').show();
		$('#pullDownLeft').show();
		$('#tradeClassify img').css({
	    	transform:"rotate(180deg)"
	   });
});
$('#tradeClassify').mouseleave(function () {
		$('#tradeClassify_pullDown').hide();
		
});

$('#pullDownLeft').mouseenter(function () {	
		$('#tradeClassify_pullDown').show(),
		$('#pullDownLeft').show();
		$('#pullDownRight').show();
})
$('#pullDownLeft').mouseleave(function () {
		$('#tradeClassify_pullDown').hide(),
		$('#pullDownLeft').hide(),
		$('#pullDownRight').hide();
		
})
$('#pullDownRight').mouseenter(function () {	
		$('#tradeClassify_pullDown').show(),
		$('#pullDownLeft').show();
		$('#pullDownRight').show();
})
$('#pullDownRight').mouseleave(function () {
		$('#tradeClassify_pullDown').hide(),
		$('#pullDownLeft').hide(),
		$('#pullDownRight').hide()
});
$('#pullDown').mouseleave(function () {
	$('#tradeClassify img').css({
	    		transform:"rotate(0deg)"
	   });
});

var lis = document.querySelectorAll('#pullDownLeft li');
var put = document.getElementById('pullDownRight');
var uls = put.getElementsByTagName("ul");
var putRight = document.getElementById('pullDownRight');
for(var i = 0; i < lis.length;i++){
	//添加标识,记录
	lis[i].index = i;
	lis[i].onmouseenter = function(){
		for(var j = 0 ; j < uls.length;j++){
			uls[j].style.display = "none";
		}
		var k = this.index;
		//显示对应的界面
		uls[k].style.display = "block";		
	}
}
$('#onlineService').mouseenter(function () {
	$('#serviceContent').show()
})
$('#onlineService').mouseleave(function () {
	$('#serviceContent').hide()
})
$('#serviceContent').mouseenter(function () {
	$('#serviceContent').show()
})
$('#serviceContent').mouseleave(function () {
	$('#serviceContent').hide()
})