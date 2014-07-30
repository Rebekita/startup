/// MODEL MOVIE
  var Movie = Backbone.Model.extend({
    defaults: function() {
      return {
        titulo: " ",
        anio: " ",
        categoria: " ",
        director: " ",
        order: misMovies.proxPelicula(),
        cantidad: false
      };
    },
    initialize: function() {
      if (!this.get("titulo")) {
        this.set({"titulo": this.defaults().titulo});
      }
      if (!this.get("anio")) {
        this.set({"anio": this.defaults().anio});
      }
      if (!this.get("categoria")) {
        this.set({"categoria": this.defaults().categoria});
      }
      if (!this.get("director")) {
        this.set({"director": this.defaults().director});
      }
    },
    mostrarCantidad: function() {
      this.save({cantidad: !this.get("cantidad")});
    }
  });
