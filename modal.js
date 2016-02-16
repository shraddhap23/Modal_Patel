$(document).ready(function() {
	$("a[name=modal]").click(function(e) {
		
		var link_element = $(e.currentTarget);
		var modalId = $(link_element).attr("href");

		var box = $("#modal")
		box.attr("content", modalId);
		centerBox(box);
		
		$(".window").show();

		$(".window").click(function(){
			$(".window").hide();
		});

	});

});


function centerBox(box) {
	box.load(function(){
		var page_height = $(window).height();
		var box_height = box.height();
		var box_height_offset = ( page_height - box_height ) / 2;
		box.parent().css("margin-top", box_height_offset);
	});
}
