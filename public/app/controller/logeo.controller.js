(function () {
  function logeoController($scope, serviceApp){
    $scope.traerUser = function () {              //lógica de post para registlogin con angular

      serviceApp.getUser().then(function(data) {
          console.log(data);
          $scope.usuarios = data.data
      })
    }
  }
  angular.module('app').controller('logeoController', logeoController)
})()
