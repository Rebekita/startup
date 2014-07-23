require.config({
	paths : {
		"movie" : "movie"
	}
});
require(["movie"], function(movie) {
	movie.setTitulo("Gone with the Wind");
	movie.setAnio("1939");
	movie.setCategoria("Drama");
	movie.setDirector("Victor Fleming");
	console.log(movie.getTitulo());
	console.log(movie.getAnio());
	console.log(movie.getCategoria());
	console.log(movie.getDirector());

});





