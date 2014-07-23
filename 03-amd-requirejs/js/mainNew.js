require.config({
	paths : {		
		"movieNew" : "movieNew",
		"directorNew" : "directorNew"
	}
});
require(["movieNew", "directorNew"], function(movieNew,directorNew) {
	var alien = new movieNew();		
	var ridleyScott = new directorNew('Ridley Scott');	
	ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);	
	alien.set('director', ridleyScott);	
	alien.get('director').speak();
	
});






