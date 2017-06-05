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

    this.logout = function() {
      var defer = $q.defer();
      $auth.logout().then(function(data) {
        defer.resolve(data);
      }, function(response) {
        defer.reject(response);
      }).finally(function() {});
      return defer.promise;
    };

    this.modificarPerfil = function() { //Falta implementar

    };

    this.crearPublicacion = function(data) {
      return $http.post(server + "publicacion", data)
    }

    
  }

  angular.module('app').service('serviceApp', ['$http', serviceApp])
})()
