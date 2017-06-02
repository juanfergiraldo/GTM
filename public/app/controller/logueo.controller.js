(function () {
  function logueoController($scope, $state, serviceApp){
      //serviceApp.ingresar($scope.user).then(function(data) {
        //console.log(data);
        //$state.go("homelog")
        $scope.user = {
            usuario: "",
            contrasena: ""
        };
        $scope.mensaje = "";
        $scope.login = function () {
            $scope.mensaje = "";
            serviceApp.login($scope.user.usuario, $scope.user.contrasena).then(function () {
                $state.go("homelog");
            }, function (response) {
                if (response.data.code === 401) {
                    $scope.mensaje = "Usuario o contraseña incorrectos";
                } else {
                    $scope.mensaje = "Hubo un error";
                }
            });
        };
        $scope.logout = function () {
            serviceApp.logout().then(function () {
                $state.go("signin");
            }, function (status) {
            });
        };
      }
  angular.module('app').controller('logueoController', ['$scope', '$state', 'serviceApp', logueoController]) //El segundo parámetro es la función que se ejecuta en app.service
})()
