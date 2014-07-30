function highlight(texto) {
	var elem = texto.split(' ');
	dato = elem[1];
	var el = dato.split('!');
	nombre = el[0];
	resultado = elem[0] + ' <strong>' + nombre + '</strong>!';
	return resultado;

}

function tweet(tweets) {
	var elemento = '';
	$.each(tweets, function(i, item) {
		elemento += '<img class= "flotar espacio" src="' + item.user.profile_image_url + '" />';
		elemento += '<span class="espacio"><strong>' + item.user.name + '</strong><span>';
		elemento += '<br><span class="fecha espacio">' + item.created_at + '<span>';
		elemento += '<p class="texto espacio">' + item.text + '<p>';
	});
	$("#tweet").append(elemento);
}


$(window).load(function() {
	$("#prueba").ready(function() {
		$("#preload").fadeIn(10000, function() {
			$(".alias").focus();
		});
	});
});
function onclickOut() {
	$.ajax({
		url : "http://bootcamp.aws.af.cm/welcome/Rebeca",
		success : function(data) {
			$(".alias").append(data.response);
			$("#nombre").append(highlight(data.response));
		},
		error : function() {
			$(".alias").css("background", "red");
		}
	});
};
$('button').click(onclickOut);



$.ajax({
	type : "GET",
	url : "http://tweetproxy.ap01.aws.af.cm/search?q=html5",
	dataType : 'jsonp',
	crossDomain : true,
	success : function(tweete) {
		//console.debug(tweete.statuses);
		tweet(tweete.statuses);
	},
	error : function(response) {

	}
}); 