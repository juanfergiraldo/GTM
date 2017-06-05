(function() {
  function publicarController($auth, $scope, $state, serviceApp) {
    $scope.crearPublicacion = function(file, errFile) {
      serviceApp.crearPublicacion($scope.publicacion).then(function(data) {
        console.log(data);
        $state.go("homelog")

      })
    }, function (response) {
      console.log(response)
    }
    
  }

  angular.module('app').controller('publicarController', ['$auth', '$scope', '$state', 'serviceApp', publicarController])
})()
