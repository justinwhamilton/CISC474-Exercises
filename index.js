$(document).ready(function() {
	console.log("document ready!");
	$("#nameform").submit(function() {
		$("#jumbotron").html($("#fname").val()+" "+$("#lname").val());
		return false;
	});
});