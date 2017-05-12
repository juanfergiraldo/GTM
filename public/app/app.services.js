(function () {
  const server = "http://localhost:3001/gtm/"
  function serviceApp($http) {
    this.getUser = function(){
      return $http.get(server + "usuarios")
    }
    this.registrar = function(){
      return $http.post(server + "signup", data)    //no sabemos como implementar post angular
    }
    //establecer servicios de registrar, logeo
    this.getProductos = function(){
      return $http.get(server + "publicacion")
    }
  }
  angular.module('app').service('serviceApp', serviceApp)
})()
