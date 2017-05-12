(function () {
  const server = "http://localhost:3001/gtm/"
  function serviceApp($http) {
    this.getUser = function(){
      return $http.get(server + "usuarios")
    }
  }
  angular.module('app').service('serviceApp', serviceApp)
})()
