function exito(data) {	
		var source = $('#entry-template').html();
		var compiled = dust.compile(source, "tmpl");
		dust.loadSource(compiled);
		dust.render("tmpl", data, function(err, out) {
			$('body').html(out);
		});
};
function error() {
		console.log("Hubo un problema");
};

$.ajax({
	url : "data.json",
	dataType : 'json',
	success : exito,
	error : error 
}); 