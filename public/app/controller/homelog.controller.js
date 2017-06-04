(function () {
  const server = "http://localhost:3001/gtm/"
  function homelogController($scope, $state, serviceApp) {
    $scope.traerPublicacion = function () {
      return $http.get(server + "publicacion");
      serviceApp.getPublicaciones().then(function(data) {

          $scope.publicaciones = data.data
      })
    }
  }

  angular.module('app').controller('homelogController', ['$scope', '$state', 'serviceApp', homelogController])
})()
