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