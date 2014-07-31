function exito(data) {
		console.log(data);
		var source = $("#entry-template").html();
		var template = Handlebars.compile(source);
		$("body").html(template(data));
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