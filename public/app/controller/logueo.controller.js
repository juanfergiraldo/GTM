(function () {
  function logueoController($auth, $scope, $state, serviceApp){
      //serviceApp.ingresar($scope.user).then(function(data) {
        //console.log(data);
        //$state.go("homelog")

        $scope.login = function () {
            $auth.login($scope.user).then(function () {
                $state.go("homelog");
            }, function (response) {
                if (response.data.code === 401) {
                    toastr.success('You have successfully signed in!');
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
  angular.module('app').controller('logueoController', ['$auth', '$scope', '$state', 'serviceApp', logueoController]) //El segundo parámetro es la función que se ejecuta en app.service
})()
