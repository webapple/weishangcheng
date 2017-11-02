$(function() {
	var btns = document.querySelectorAll('#btn');
    var clipboard = new Clipboard(btns);

    clipboard.on('success', function(e) {
        console.log(e);
        alert("成功");
    });

    clipboard.on('error', function(e) {
        console.log(e);
        alert("失败");
    });

})