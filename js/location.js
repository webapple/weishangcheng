$(function(){
	var index0 = 0;
	var index1 = 0
	$("#btn1 button").each(function(index){
		$(this).click(function(){
			$("#btn1 button").eq(index0).removeClass("mui-btn-primary")
			$(this).addClass("mui-btn-primary");
			index0 = index;
		})
	});
	$("#btn2 button").each(function(index){
		$(this).click(function(){
			$("#btn2 button").eq(index1).removeClass("mui-btn-primary")
			$(this).addClass("mui-btn-primary");
			index1 = index;
		})
	})
})
