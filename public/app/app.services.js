(function() {
  const server = "http://localhost:3001/gtm/"

  function serviceApp($http) {

    this.getUser = function() {
      return $http.get(server + "usuarios") //Es $http quien hace las llamadas AJAX al API
    }

    this.registrarse = function(data) {
      return $http.post(server + "signup", data) //Estructura de un POST en AngularJS
    }

    //establecer servicios de registrar, logeo
    this.getPublicaciones = function() {
      return $http.get(server + "publicacion")
    }

    this.crearPublicacion = function() {
      return $http.post(server + "publicacion", data)
    }

    this.modificarPerfil = function(data) {
      return $http.put(server + "perfil", data)
    };

    this.crearPublicacion = function(data) {
      return $http.post(server + "publicacion", data)
    }

  }

  angular.module('app').service('serviceApp', ['$http', serviceApp])

  function usuarioService($scope){
    var user;
    this.set = function(data) {
      user = data
      console.log(user);
    }
    this.get = function() {
      return user;
    }
  }
  angular.module('app').service('usuarioService', [usuarioService])
})()
