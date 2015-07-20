$(function(){
	$foodTemplate = _.template($("#food-template").html())
	console.log(_);
	console.log($);

	var foodInfo = {name:"Gongbaojiding", cuisine:"Sichuan", ingredients:"pepper, chiceken and cucumber", price:15, description: "Authentic chinese food"};

	$("body").append($foodTemplate(foodInfo));
});