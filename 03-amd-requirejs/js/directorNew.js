define("directorNew", function() {
	function directorNew(nombre) {
		this.nombre = nombre;
		this.quotes = new Array();

	}
	directorNew.create = function() {
		var result = new directorNew();
		return result;
	};

	directorNew.prototype = {
		constructor : directorNew,
		set : function(atr, val) {
			if (atr === "quotes") {
				for (var iCont = 0; iCont < val.length; iCont++) {
					this.quotes.push(val[iCont]);
				}
			}
		},
		speak : function() {
			var citas= "";
			for (var iCont = 0; iCont < this.quotes.length; iCont++) {
					citas += this.quotes[iCont]+ " and ";
				}
			console.log(this.nombre + "says: " + citas);	
		},
		speakJquery : function() {
			var citas= "";
			$.each( this.quotes, function(i, item) {					
					citas += item+ " and ";										
				});
			console.log(this.nombre + "says: " + citas);	
		}		
	};

	return directorNew;
});

