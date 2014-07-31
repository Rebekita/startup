$('#save').click(function() {
	localStorage.setItem('onlyText', $("#onlyText").val());
	$("#result").html('Guardado: ' + $("#onlyText").val());
	$("#onlyText").val('');
});

$("#clear").click(function() {
	localStorage.removeItem('onlyText');
	$("#onlyText").val('');
	$("#result").html('');

});

