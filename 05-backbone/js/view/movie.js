    var MovieView = Backbone.View.extend({
    tagName:  "li",
    template: _.template($('#movie-template').html()),
    events: {
      "click .toggle"   : "hecho",
      "dblclick .view"  : "editar",
      "click a.eliminar" : "borrar",
      "keypress .editar"  : "actualizar",
      "blur .editar"      : "cerrar"
    },

    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },
    
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.toggleClass('cantidad', this.model.get('cantidad'));
      this.titulo = this.$('#titulo');
      this.categoria = this.$('#categoria');
      this.anio = this.$('#anio');
      this.director = this.$('#director');
      this.$(".detalles").attr("href","#/detalles/"+this.titulo.val()+"/"+this.anio.val()+"/"+ this.categoria.val()+"/"+this.director.val());
      return this;
    },

    hecho: function() {
      this.model.mostrarCantidad();
    },

    editar: function() {
      this.$el.addClass("editando");      
    },

    cerrar: function() {
      var tituloValue = this.titulo.val();
      var anioValue = this.anio.val();
      var categoriaValue = this.categoria.val();
      var directorValue = this.director.val();
      if (!tituloValue) {
        this.borrar();
      } else {
        this.model.save({titulo: tituloValue});
        this.$el.removeClass("editando");
      }  
      if (anioValue) {        
        this.model.save({anio: anioValue});
        this.$el.removeClass("editando");
      }  
       if (categoriaValue) {        
        this.model.save({categoria: categoriaValue});
        this.$el.removeClass("editando");
      }  
        if (directorValue) {        
        this.model.save({director: directorValue});
        this.$el.removeClass("editando");
      }                
    },
        
    actualizar: function(e) {
      if (e.keyCode == 13) this.cerrar();
    },
    
    borrar: function() {
      this.model.destroy();
    }
  });
