var mySwiper = new Swiper('.swiper-container', {
			autoplay: 2000,
			speed:800,
			loop : true,
			pagination : '.swiper-pagination',
			paginationType : 'bullets',
			paginationClickable :true,
			autoplayDisableOnInteraction : false,
			grabCursor : true
})
//---------------------------------------------------------------------------
//汽车装饰
//获取li
var ADlisCar = document.querySelectorAll('#titleADMenuCar>li');
//console.log(ADlisCar)
//获取下划线
var ADlineCar = document.getElementById('underlineCar');
//console.log(ADlineCar)
//获取div	
var ADdivsCar = document.querySelectorAll('#ADdivsCar > div');
//console.log(ADdivsCar)
function moveLineCar (){
	for (var i= 0; i < ADlisCar.length;i++){
		if (this == ADlisCar[i]){
			ADlineCar.style.left = 102*i+334+'px';
		}
	}
	for(var j = 0 ; j < ADdivsCar.length;j++){
		ADdivsCar[j].style.display = "none";
	}
		var k = this.index;
		//显示对应的界面
		ADdivsCar[k].style.display = "block";	
}
for (var i = 0;i< ADlisCar.length;i++){
	ADlisCar[i].index = i;
	ADlisCar[i].onmouseenter = moveLineCar; 
}

//---------------------------------------------------------------------------
//精品酒店
//获取li
var ADlisHotel = document.querySelectorAll('#titleADMenuHotel>li');

//获取下划线
var ADlineHotel = document.getElementById('underlineHotel');

//获取div	
var ADdivsHotel = document.querySelectorAll('#ADdivsHotel > div');

function moveLineHotel (){
	for (var i= 0; i < ADlisHotel.length;i++){
		if (this == ADlisHotel[i]){
			ADlineHotel.style.left = 102*i+334+'px';
		}
	}
	for(var j = 0 ; j < ADdivsHotel.length;j++){
		ADdivsHotel[j].style.display = "none";
	}
		var k = this.index;
		//显示对应的界面
		ADdivsHotel[k].style.display = "block";	
}
for (var i = 0;i< ADlisHotel.length;i++){
	ADlisHotel[i].index = i;
	ADlisHotel[i].onmouseenter = moveLineHotel; 
}

//---------------------------------------------------------------------------
//精品男装
//获取li
var ADlisSuit = document.querySelectorAll('#titleADMenuSuit>li');

//获取下划线
var ADlineSuit = document.getElementById('underlineSuit');

//获取div	
var ADdivsSuit = document.querySelectorAll('#ADdivsSuit > div');

function moveLineSuit (){
	for (var i= 0; i < ADlisSuit.length;i++){
		if (this == ADlisSuit[i]){
			ADlineSuit.style.left = 102*i+334+'px';
		}
	}
	for(var j = 0 ; j < ADdivsSuit.length;j++){
		ADdivsSuit[j].style.display = "none";
	}
		var k = this.index;
		//显示对应的界面
		ADdivsSuit[k].style.display = "block";	
}
for (var i = 0;i< ADlisSuit.length;i++){
	ADlisSuit[i].index = i;
	ADlisSuit[i].onmouseenter = moveLineSuit; 
}
//---------------------------------------------------------------------------
//精品建材
//获取li
var ADlisBuild = document.querySelectorAll('#titleADMenuBuild>li');

//获取下划线
var ADlineBuild = document.getElementById('underlineBuild');

//获取div	
var ADdivsBuild = document.querySelectorAll('#ADdivsBuild > div');

function moveLineBuild (){
	for (var i= 0; i < ADlisBuild.length;i++){
		if (this == ADlisBuild[i]){
			ADlineBuild.style.left = 102*i+334+'px';
		}
	}
	for(var j = 0 ; j < ADdivsBuild.length;j++){
		ADdivsBuild[j].style.display = "none";
	}
		var k = this.index;
		//显示对应的界面
		ADdivsBuild[k].style.display = "block";	
}
for (var i = 0;i< ADlisBuild.length;i++){
	ADlisBuild[i].index = i;
	ADlisBuild[i].onmouseenter = moveLineBuild; 
}



