define("movie", ["director"],function(directtor) {
	var titulo;
	var anio;
	var categoria;
	var estado;	
	
	var getTitulo = function() {
		return this.titulo;	
	};
	var getAnio = function() {
		return this.anio;
	};
	var getCategoria = function() {
		return this.categoria;
	};
	var getEstado = function() {
		return this.estado;
	};
	var setTitulo = function(titulo) {
		this.titulo = titulo;
	};
	var setAnio = function(anio) {
		this.anio = anio;
	};
	var setCategoria = function(categoria) {
		this.categoria = categoria;
	};
	var setEstado = function(estado) {
		this.estado = estado;
	};
	var play = function() {
		this.setEstado(true);
	};
	var stop = function() {
		this.setEstado(false);
	};	
	var setDirector = function(direct) {
		directtor.setNombre(direct);		
	};	
	var getDirector = function() {
		return directtor.getNombre();
	};
	
	//var alien = new Movie();
	//var ridleyScott = new Director(‘Ridley Scott’); 
	//ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']); 
	//alien.set('director', ridleyScott); 
	//alien.get('director').speak(); 
	//output: Ridley Scott says: 'Cast is...'
	
	var speak = function() { 
		}; 
	var setSpeak = function() { 
		};	
		
		
	return {
		getTitulo : getTitulo,
		getAnio : getAnio,
		getCategoria : getCategoria,
		getEstado : getEstado,
		setTitulo : setTitulo,
		setAnio : setAnio,
		setCategoria : setCategoria,
		setEstado : setEstado,
		play : play,
		stop : stop,
		setDirector:setDirector,
		getDirector:getDirector
	};
	
});