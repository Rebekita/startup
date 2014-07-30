/// COLECCION
  var MovieLista = Backbone.Collection.extend({
    model: Movie,
    localStorage: new Backbone.LocalStorage("movies-listado"),    
    cantidad: function() {
      return this.filter(function(movie){ return movie.get('cantidad'); });
    },
    
    contador: function() {
      return this.without.apply(this, this.cantidad());
    },
    
    proxPelicula: function() {
      if (!this.length) return 1;
      return this.last().get('order') + 1;
    }
  });
  var misMovies = new MovieLista;
  