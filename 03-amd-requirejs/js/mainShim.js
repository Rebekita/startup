require.config({	
    paths: {
    	movieNew : "movieNew",
		directorNew : "directorNew",
		jquery: "jQuery"
        
    },
    shim: {
        jquery: {            
            exports: "jquery"
        },
        directorNew: {
        	deps : ["jquery"],
            exports: "directorNew"
        },
        movieNew: {
        	deps : ["directorNew"],
            exports: "movieNew"
        }
        
    }
});

require(["movieNew", "directorNew", "jquery"], function(movieNew,directorNew) {
	var alien = new movieNew();		
	var ridleyScott = new directorNew('Ridley Scott');	
	ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);	
	alien.set('director', ridleyScott);	
	alien.get('director').speak();
	alien.get('director').speakJquery();
	
});