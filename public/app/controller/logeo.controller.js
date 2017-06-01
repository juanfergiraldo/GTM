(function () {
  function singInController($scope, serviceApp, $state){
    $scope.iniciarSesion = function() {
      serviceApp.iniciarSesion($scope.user).then(function(data) {
        console.log(data);
        $state.go("homelog")
      })
    }


  }
  angular.module('app').controller('singInController', singInController)
})()
