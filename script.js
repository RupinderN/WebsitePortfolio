$('#dropdown-btn').on("click", function() {
	$('.dropdown-menu').slideToggle();
	$('.dropdown-menu').css("display", "block");
});


$(".rotate").click(function(){
    $(this).toggleClass("down"); 
});
