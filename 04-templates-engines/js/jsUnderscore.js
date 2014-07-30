$.ajax({
	url : "data.json",
	dataType : "json",
	success : function(data) {
		var source = _.template($("#entry-template").html());
		$('body').html(source(data));
	},
	error : function() {
		console.log("Hubo un problema");
	}
}); 