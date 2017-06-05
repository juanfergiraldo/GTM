(function() {
  function publicarController($scope, Upload, $state, serviceApp) {
    $scope.crearPublicacion = function(file, errFile) {
      serviceApp.crearPublicacion($scope.publicacion).then(function(data) {
        console.log(data);
        $state.go("homelog")

      })
    }
  }

  angular.module('app').controller('publicarController', ['$scope', 'Upload','$state', 'serviceApp', publicarController])
})()
