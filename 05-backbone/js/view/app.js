var AppView = Backbone.View.extend({
    el: $("#movieapp"),
    opcionesTemplate: _.template($('#opciones-template').html()),
    events: {
      "keypress .nuevo":  "crear",      
      "click #limpiar-todas": "limpiar",
      "click #marcarTodos": "seleccionarTodas"
    },
    
    initialize: function() {
      this.titulo = this.$("#titulo");
      this.anio = this.$("#anio");
      this.categoria = this.$("#categoria");
      this.director = this.$("#director");
      this.allCheckbox = this.$("#marcarTodos")[0];
      this.listenTo(misMovies, 'add', this.agregarUna);
      this.listenTo(misMovies, 'reset', this.agregarTodas);
      this.listenTo(misMovies, 'all', this.render);
      this.footer = this.$('footer');
      this.main = $('#main');
      misMovies.fetch();
    },

    render: function() {
      var cantidad = misMovies.cantidad().length;
      var contador = misMovies.contador().length;
      if (misMovies.length) {      	      	
        this.main.show();              	  
        this.footer.show();        
        this.footer.html(this.opcionesTemplate({cantidad: cantidad, contador: contador}));        
      } else {
        this.main.hide();
        this.footer.hide();
      }      
      this.allCheckbox.checked = !contador;
    },

    agregarUna: function(movie) {
      var view = new MovieView({model: movie});
      this.$("#lista-movies").append(view.render().el);
    },
    
    agregarTodas: function() {
      misMovies.each(this.agregarUna, this);
    },
    
    crear: function(e) {
      if (e.keyCode != 13) return;
      if (!this.titulo.val()) return;      
      misMovies.create({
      	titulo: this.titulo.val(),
      	anio: this.anio.val(),
      	categoria: this.categoria.val(),
      	director: this.director.val()
      	});
      this.titulo.val('');
      this.anio.val('');
      this.categoria.val('');
      this.director.val('');      
    },
    
    limpiar: function() {
      _.invoke(misMovies.cantidad(), 'destroy');
      return false;
    },

    seleccionarTodas: function () {
      var cantidad = this.allCheckbox.checked;
      misMovies.each(function (todo) { todo.save({'cantidad': cantidad}); });
    }
  });
