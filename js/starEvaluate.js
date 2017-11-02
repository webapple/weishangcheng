$(function(){
	$(".star").each(function(index){
		$(this).children().each(function(indexs){
			$(this).on('tap',function(){
				changeStar(index,indexs);
			})
		})
	});
	//设置星际评价
	function changeStar(i,j){
		$(".star").eq(i).children().each(function(index){
			if(index > j){
				$(".star").eq(i).children().eq(index).addClass("starDef");
				$(".star").eq(i).children().eq(index).removeClass("starAct");
			}else{
				$(".star").eq(i).children().eq(index).addClass("starAct");
				$(".star").eq(i).children().eq(index).removeClass("starDef");
			}
		});
		$(".commentText").eq(i).html(comments[j]);
	}
	//设置评价数组
	var comments = ["很差","差","一般","好","非常满意"];
	
	
})
