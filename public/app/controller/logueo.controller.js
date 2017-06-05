(function () {
  function logueoController($auth, $scope, $state, serviceApp){
      //serviceApp.ingresar($scope.user).then(function(data) {
        //console.log(data);
        //$state.go("homelog")

        $scope.login = function () {
            $auth.login($scope.user).then(function () {
                $state.go("homelog");
            }, function(response) {
              console.log(response.status);
                if (response.status === 401) {
                    toastr.success('Has entrado a GTM², ¡bien por vos! ');
                    $scope.mensaje = "Usuario o contraseña incorrectos";
                } else {
                    $scope.mensaje = "Hubo un error";
                    toastr.error('Es posible que el usuario no exista, verifica que esté bien escrito');
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
