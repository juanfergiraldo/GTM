/*(function () {
  function signupController($scope, serviceApp){    //lógica de post para registro con angular
    $scope.traerUser = function () {

      serviceApp.getUser().then(function(data) {
          console.log(data);
          $scope.usuarios = data.data
      })
    }
  }
  angular.module('app').controller('signupController', signupController)
})()*/
(function () {
  function signupController($scope, serviceApp, $state){
    $scope.registrarse = function() { //La función del botón
      serviceApp.registrarse($scope.user).then(function(data) {
        console.log(data);
        $state.go("homelog")

      })
    }


  }
  angular.module('app').controller('signupController', signupController)
})()
