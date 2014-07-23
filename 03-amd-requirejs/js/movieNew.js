/*define("movieNew", ["director"], function(directtor) {
	var movieNew = function(titulo, anio, categoria,director) {
		this.titulo = titulo;
		this.anio = anio;
		this.categoria = categoria;
		this.director = director;
		this.estado;
		this.play = function() {
			this.estado = true;
		};
		this.stop = function() {
			this.estado = false;
		};
		this.set = function(atr, val) {
			this[atr] = val;
		};
		this.get = function(atr) {
			return this[atr];
		};

	};

	return new movieNew();
});

*/




define("movieNew", ["directorNew"], function(director) {
    function movieNew(titulo, anio, categoria)  {
        this.titulo = titulo;
		this.anio = anio;
		this.categoria = categoria;
		this.estado;		
    }
    
    movieNew.create = function () {
        var result = new movieNew();
        return result;
    };
    
    movieNew.prototype = {    	
    	constructor: movieNew,
        set: function (atr, val) {    
         	if (atr === "director") {         		
         		director = val;
				
			}    
        },
        get: function (atr) {    
         	if (atr === "director") {         		
         		return director;
				
			}    
        }
    };
 
    return movieNew;
});

