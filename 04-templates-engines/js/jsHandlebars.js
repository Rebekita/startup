$.ajax({
	url : "data.json",
	dataType : "json",
	success : function(data) {
		console.log(data);
		var source = $("#entry-template").html();
		var template = Handlebars.compile(source);
		$("body").html(template(data));
	},
	error : function() {
		console.log("Hubo un problema");

	}
}); 