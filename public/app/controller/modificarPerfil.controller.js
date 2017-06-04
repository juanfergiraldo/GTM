(function() {
  function modificarPerfilController($scope, $state, serviceApp) {
    $scope.modificarPerfil = function() {
      serviceApp.modificarPerfil($scope.publicacion).then(function(data) {
        console.log(data);
        $state.go("perfil")

      })
    }
  }

  angular.module('app').controller('modificarPerfilController', ['$scope', '$state', 'serviceApp', modificarPerfilController])
})()
