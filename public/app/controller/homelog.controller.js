(function () {
  function homelogController($scope, $state, serviceApp) {
    $scope.publicaciones = {}
    $scope.traerPublicacion = function () {

      serviceApp.getPublicaciones().then(function(data) {
          console.log(data);
          $scope.publicaciones = data.data
      })
    }
  }

  angular.module('app').controller('homelogController', ['$scope', '$state', 'serviceApp', homelogController])
})()
