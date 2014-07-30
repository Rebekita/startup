$.ajax({
	url : "data.json",
	dataType : 'json',
	success : function(data) {
		var source = $('#entry-template').html();
		var compiled = dust.compile(source, "tmpl");
		dust.loadSource(compiled);
		dust.render("tmpl", data, function(err, out) {
			$('body').html(out);
		});
	},
	error : function() {
		console.log("Hubo un problema");
	}
}); 