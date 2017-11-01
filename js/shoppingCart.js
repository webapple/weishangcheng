$(function() {

	(function(m) {
		document.getElementById('checkAll').addEventListener('change', function(e) {
			var listBox = m('.listCheckBox');
			if(e.target.checked) {
				listBox.each(function() {
					var ele = this;
					ele.checked = true
				})
			} else {
				listBox.each(function() {
					var ele = this;
					ele.checked = false
				})
			}
		})
	})(mui)

	var pric = 200; //最低价格；

	$(".number").each(function(index) {
		$(".number").eq(index).on('tap', function() {
			var newpric = 0;
			var num1 = $("[type = number]").eq(index).val();
			if(num1 == 0){
				console.log(mui('.listCheckBox'));
				mui('.listCheckBox')[index].checked = false
				mui('.checkAll')[0].checked = false
				
			}else{
				mui('.listCheckBox')[index].checked = true
			}
			$(".card").each(function(index) {
				var num = $("[type = number]").eq(index).val();
				var pri = $(".price").eq(index).html();
				newpric += num * pri;
				$(".num").html(newpric.toFixed(2));
				if(newpric >= pric) {
					$(".allBtn").removeClass("allBtnDel");
				} else {
					$(".allBtn").addClass("allBtnDel");
				}
			});
		})
	});
	
	
	/*编辑删除*/
	var according = true; /*根据布尔值判断当前状态*/
	$("#compile").on('tap',function(){
		if(according){
			$("#compile").html("完成");
			$(".allBtn").html("删除");
			$(".allPrice").hide();
			$(".allBtn").removeClass("allBtnDel");
			according = false;
		}else{
			$(".allBtn").html("去结算");
			$(".allPrice").show();
			$("#compile").html("编辑");
			according = true;
		}
	})
})