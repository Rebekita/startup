var MovieRouter = Backbone.Router.extend({
        routes: {        	
            "detalles/:titulo/:anio/:categoria/:director": "detalles"
        }
});

var app_router = new MovieRouter;
app_router.on('route:detalles', function (titulo,anio,categoria,director) {    	
	url = window.location.href.split("#");
	$("#main").html('');
    $("header").html('');
  	$("footer").html('');
	$("#main").html('<h1>Detalles</h1><p>Pelicula: <strong>'+titulo+'</strong></p><p>Director: <strong>'+director+'</strong></p><p>Año: <strong>'+director+'</strong></p><p>Categoría: <strong>'+categoria+'</strong></p><a class="volver" href="'+url[0]+'">Volver</a>');             
});
    
Backbone.history.start();
