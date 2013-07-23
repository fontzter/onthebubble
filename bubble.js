$(function() {
	$(".carstat").sortable({
		connectWith: ".carstat"
		}).disableSelection();
	/*
	//attaching directly to each elemnts
	$("#racing .car").click(function(){
		logIt($(this).html() + " is in the lineup");
	});
	$("#notracing .car").click(function(){
		logIt($(this).html() + " is not racing");
	});
	*/

	
	//a better way
	$("#racing").on("click", ".car", function(evt){ vroom(this,"flip");});	
	$("#notracing").on("click", ".car", function(evt){ vroom(this,"hinge");});	
	$("#pending").on("click", ".car", function(evt){ vroom(this,"bounce");});	

	//$("*").click(function(evt){console.log(evt.currentTarget);});
});

function logIt (msg) {
	$("#log").prepend("<li>" + msg + "</li>").find("li:first").hide().fadeIn(1200);
}
function vroom (car, action) {
	var $car = $(car).addClass(action);
	setTimeout(function () {
		$car.removeClass(action);
	},1300);
}