(function () {
  const server = "http://localhost:3001/gtm/"
  function homelogController($http, $auth, $scope, $state, serviceApp) {

    $scope.nombreUsuario = function() {
        return $http.get(server + "homelog").then (function(response) {        
        toastr.info('Nmms');
      })
    }

    $scope.salir =  function() {
      $auth.logout().then(function() {
        $state.go("homeini.signin")
        toastr.info('Has salido de GTM², ¡vuelve proto!');
      })
    }

    $scope.traerPublicacion = function () {
      serviceApp.getPublicaciones().then(function(data) {
          $scope.publicaciones = data.data
      })
    }
  }

  angular.module('app').controller('homelogController', ['$http', '$auth', '$scope', '$state', 'serviceApp', homelogController])
})()
