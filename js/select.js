$(function(){
	
	//dom元素的获取；
	var Dom = {
		selectContainer:$(".selctconter"),
		contentsElem:$("#segmentedControlContents")
	}
	var selectIndex = 0;
	function changicon(clickDom,chengDom){
		
		clickDom.click(function(){
			if(selectIndex == 0){
				chengDom.addClass("iconAct");
				selectIndex = 1;
				Dom.selectContainer.show();
			}else{
				chengDom.removeClass("iconAct");
				Dom.selectContainer.hide();
				selectIndex = 0;
			}
		})
	}
	changicon($("#addSelect"),$("#addSelectIcon"));
	//	changicon($("#addSelect1"),$("#addSelectIcon1"));
	/*发生scroll时间，取消显示选择容器*/
	Dom.contentsElem[0].addEventListener("scroll",function(){
		if(selectIndex == 1){
			$("#addSelectIcon").removeClass("iconAct");
				Dom.selectContainer.hide();
				selectIndex = 0;
		}
	})

	
})
