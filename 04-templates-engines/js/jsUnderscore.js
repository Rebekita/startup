function exito(data) {
		var source = _.template($("#entry-template").html());
		$('body').html(source(data));
};

function error() {
		console.log("Hubo un problema");
};

$.ajax({
	url : "data.json",
	dataType : "json",
	success : exito,
	error : error
}); 