//localStorage.clear();
// console.log(localStorage.adressTobillUp);
localStorage.orders = 0;
 var str = localStorage.adressTobillUp;
 var strr = str.replace(/,/g,' ');
 console.log(strr);
$('.sendTo span').html('送货至：'+strr);

$('.paybtnChangePage').click(function () {
	$('.billPaySuc').show();
	localStorage.orders++;
});

//应付金额
$('.billShouldPay').html(localStorage.clothPrice - 10 + '.00');
	
$('.payAlert_p2').click(function () {
	
	$('.billPaySuc').hide();
	location.href = 'payOffSucceed.html';
});

