$('#dropdown-btn').on("click", function() {
	$('.dropdown-menu').slideToggle("slow");
	$('.dropdown-menu').css("display", "block");
});


$(".rotate").click(function(){
    $(this).toggleClass("down"); 
});
