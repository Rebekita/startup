// ---------------------Constructor  Pattern--------------------------

function Movie(titulo, anio, categoria, director) {
	this.titulo = titulo;
	this.anio = anio;
	this.categoria = categoria;
	this.director = director;
	this.estado
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
var movie = new Movie("Gone with the Wind", 1939, "Drama", "Victor Fleming");
var movie2 = new Movie("Hannibal", 2001, "Crime", "Ridley Scott");
var movie3 = new Movie("The Bone Collector ", 1999, "Mistery", " Phillip Noyce");

// ---------------------Observer Pattern--------------------------

function MovieObserver(changes) {
	changes.forEach(function(change, i) {
		if (change.name == 'estado') {
			if (change.object['estado']) {
				console.log("Playing " + change.object['titulo']);
			} else {
				console.log("Stopped " + change.object['titulo']);
			}
		}
	});
}

var terminator = new Movie();
Object.observe(terminator, MovieObserver);
terminator.set("titulo", "Terminator");

// ---------------------Observer Pattern other implementation --------------------------

function MovieO(titulo, anio, categoria, director) {
	this.titulo = titulo;
	this.anio = anio;
	this.categoria = categoria;
	this.director = director;
	this.estado
	this.observers = [];
};

MovieO.prototype = {

	set : function(atr, val) {
		this[atr] = val;
	},
	get : function(atr) {
		return this[atr];
	},
	agregarObserver : function(obj) {
		this.observers.push(obj);
	},
	eliminarObserver : function(obj) {
		var i = 0, len = this.observers.length;
		for (; i < len; i++) {
			if (this.observers[i] === obj) {
				this.observers.splice(i, 1);
				return;
			}
		}
	},
	play : function() {
		var i = 0, len = this.observers.length;
		for (; i < len; i++) {
			this.observers [i]("Play " + this.titulo);
		}
	},
	stop : function() {
		var i = 0, len = this.observers.length;
		for (; i < len; i++) {
			this.observers [i]("Stop " + this.titulo);
		}
	}
};

var Observer = function(texto) {
	console.log(texto);
};

terminator = new MovieO();
terminator.agregarObserver(Observer);
terminator.set("titulo", "Terminator");
/*terminator.play();
terminator.stop();*/

// ---------------------Module Pattern--------------------------

var Module = (function() {
	var Movie = {
		titulo : "",
		anio : 1900,
		categoria : "",
		director : ""
	};

	Movie.play = function() {
		this.estado = true;
	};

	Movie.stop = function() {
		this.estado = false;
	};

	Movie.get = function(atr) {
		return this[atr];
	};

	Movie.set = function(atr, val) {
		this[atr] = val;
	};

	Movie.DownloadableMovie = function() {
		return Movie;
	};
	return Movie;

})();

Module.set("titulo", "Gone with the Wind");
Module.set("anio", "1939");
Module.set("categoria", "Drama");
Module.set("director", "Victor Fleming");
Object.observe(Module, MovieObserver);

var DownloadableMovie = (function(Module) {

	Module.download = function() {
		alert("This movie is Downloadable. ");
	};

	return Module;

})(Module || {});

//DownloadableMovie.download()

// ---------------------Mixin Pattern--------------------------

var Social = function() {
	this.share = function(friendName) {
		alert("Share with " + friendName);
	};
	this.like = function() {
		alert("Liked");
	};
};

var mySocial = new Social();

var MovieMixin = function(titulo, anio, categoria, director) {
	Social.call(this);
	this.titulo = titulo;
	this.anio = anio;
	this.categoria = categoria;
	this.director = director;
	this.estado
	this.set = function(atr, val) {
		this[atr] = val;
	};
	this.get = function(atr) {
		return this[atr];
	};
	this.stop = function() {
		this.estado = false;
	};
	this.play = function() {
		this.estado = true;
	};

};

var ironman2 = new MovieMixin();
ironman2.set('title', 'Iron Man 2');
//ironman2.share('V. Rivas');

var Actor = function(nombre) {
	this.nombre = nombre;
	MovieMixin.call(this);
};
var actorMovie = new Actor("Clark Gable");
actorMovie.set("titulo", "Gone with the Wind");
actorMovie.set("anio", "1939");
actorMovie.set("categoria", "Drama");
actorMovie.set("director", "Victor Fleming");

// Show how you would add an array of actors to a Movie object.
var Actores = function(params) {
	var varios = new Array();
	for (var iCont = 0; iCont < params.length; iCont++) {
		varios.push(params[iCont]);
	}
	MovieMixin.call(this);
};

var actoresMovie = new Actores(["Clark Gable", "Vivien Leigh", "Leslie Howard", "Olivia de Havilland"]);
actoresMovie.set("titulo", "Gone with the Wind");
actoresMovie.set("anio", "1939");
actoresMovie.set("categoria", "Drama");
actoresMovie.set("director", "Victor Fleming");
