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
    this.getProductos = function(){
      return $http.get(server + "publicacion")
    }
  }

  angular.module('app').service('serviceApp', serviceApp)
})()
