(function () {
  function signupController($scope, serviceApp){
    $scope.registrarse = function() {
      serviceApp.registrarse($scope.user).then(function(data) {
        console.log(data);
      })
    }


  }
  angular.module('app').controller('signupController', signupController)
})()
  
