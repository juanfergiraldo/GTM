(function () {
  const server = "http://localhost:3001/gtm/"

  function serviceApp($http) {
    this.getUser = function(){
      return $http.get(server + "usuarios") //Es $http quien hace las llamadas AJAX al API
    }
    this.registrarse = function(data){
      return $http.post(server + "signup", data)    //no sabemos como implementar post en angular
    }
    //establecer servicios de registrar, logeo
    this.getPublicaciones = function(){
      return $http.get(server + "publicacion")
    }
    this.iniciarSesion = function(data) {
      return $http.post(server + "signin", data)
    }
    this.crearPublicacion = function() {
      return $http.post(server + "publicacion", data)
    }
    this.modificarPerfil = function(data) {
      return $http.put(server + "perfil", data)
    }
    this.getUsuario = function() {
      return $http.get(server + "perfil")
    }
  }

  angular.module('app').service('serviceApp', serviceApp)
})()
