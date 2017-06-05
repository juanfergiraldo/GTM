(function () {
  const server = "http://localhost:3001/gtm/"
  function homelogController($auth, $scope, $state, serviceApp) {
    $scope.nombreUsuario = function() {
      console.log($auth.getPayload());
    }
    $scope.traerPublicacion = function () {
      serviceApp.getPublicaciones().then(function(data) {

          $scope.publicaciones = data.data
      })
    }
  }

  angular.module('app').controller('homelogController', ['$auth', '$scope', '$state', 'serviceApp', homelogController])
})()
