(function () {
  function homelogController($scope, serviceApp) {
    $scope.publicaciones = {}
    $scope.traerPublicacion = function () {

      serviceApp.getPublicaciones().then(function(data) {
          console.log(data);
          $scope.publicaciones = data.data
      })
    }
  }
  function publicarController($scope, serviceApp) {
    $scope.crearPublicacion = function() {
      serviceApp.crearPublicacion($scope.publicacion).then(function(data) {
        console.log(data);
        $state.go("homelog")

      })
    }
  }
  function modificarPerfil($scope, serviceApp) {
    $scope.modificarPerfil = function() {
      serviceApp.modificarPerfil($scope.publicacion).then(function(data) {
        console.log(data);
        $state.go("perfil")

      })
    }
  }
  function getUsuario($scope, serviceApp) {
    $scope.user = {}
    $scope.getUsuario = function () {

      serviceApp.getUsuario().then(function(data) {
          console.log(data);
          $scope.user = data.data
      })
    }
  }
  angular.module('app').controller('homelogController', homelogController)
  angular.module('app').controller('publicarController', publicarController)
  angular.module('app').controller('modificarPerfil', modificarPerfil)
  angular.module('app').controller('getUsuario', getUsuario)

})()
