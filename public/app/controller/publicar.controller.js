(function() {
  function publicarController($scope, $state, serviceApp) {
    $scope.crearPublicacion = function() {
      serviceApp.crearPublicacion($scope.publicacion).then(function(data) {
        console.log(data);
        $state.go("homelog")

      })
    }
  }

  angular.module('app').controller('publicarController', ['$scope', '$state', 'serviceApp', publicarController])
})()
