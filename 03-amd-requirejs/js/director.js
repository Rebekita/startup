define("director", function() {
	var nombre;
	var quotes = new Array();

	var getNombre = function() {
		return this.nombre;
	};
	var setNombre = function(nombre) {
		this.nombre = nombre;
	};

	var setQuotes = function(varios) {
		for (var iCont = 0; iCont < varios.length; iCont++) {
			this.quotes.push(varios[iCont]);
		}
	};
	var getQuotes = function() {
		return this.quotes;
	};
	return {
		getNombre : getNombre,
		setNombre : setNombre,		
		getQuotes : getQuotes,
		setQuotes : setQuotes
	};

}); 