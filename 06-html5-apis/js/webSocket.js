var mysocket = new WebSocket("ws://echo.websocket.org");

mysocket.onopen = function(evt) {
	escribir("<span class=abierto>Websocket abierto</span>");
};

mysocket.onmessage = function(evt) {
	escribir("<span class=recibido>RECIBIDO: " + evt.data + '</span>');
};

mysocket.onclose = function(evt) {
	escribir("Websocket cerrado");
};

mysocket.onerror = function(evt) {
	escribir("ERROR: " + evt.data);
};

function escribir(texto) {
	$("#socket").append(texto+'<br>');
}

$("#enviarSocket").click(function() {
	var texto = $("#mensaje").val();	
	mysocket.send(texto);
	escribir("<span class=enviado> ENVIADO: " + texto+ '</span>');
});
