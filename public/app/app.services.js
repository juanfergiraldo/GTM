(function () {
  const server = "http://localhost:3001/gtm/"

  function serviceApp($q, $state, $auth, $http, $timeout, baseUrl) {

    this.getUser = function(){
      return $http.get(server + "usuarios") //Es $http quien hace las llamadas AJAX al API
    }

    this.registrarse = function(data){
      return $http.post(server + "signup", data)    //Estructura de un POST en AngularJS
    }

    //establecer servicios de registrar, logeo
    this.getPublicaciones = function(){
      return $http.get(server + "publicacion")
    }
<<<<<<< HEAD



    this.skipIfAuthenticated = function () {
            var defer = $q.defer();
            if ($auth.isAuthenticated()) {
                $timeout(function () {
                    $state.go("homelog"); //Si ya está logueado, no va al login
                });
                defer.reject();
            } else {
                defer.resolve();
            }
            return defer.promise;
        };

        this.redirectIfNotAuthenticated = function () {
            var defer = $q.defer();
            if ($auth.isAuthenticated()) {
                defer.resolve();
            } else {
                $timeout(function () {
                    $state.go("signin");  //Si no está Logueado lo regresa al logueo
                });
                defer.reject();
            }
            return defer.promise;
        };
        this.login = function (user, password) {
            var defer = $q.defer();
            var header = {headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }};
            var data = $.param({_username: user,
                _password: password});
            $auth.login(data, header).then(function (data) {
                defer.resolve(data);
            }).catch(function (response) {
                defer.reject(response);
            }).finally(function () {
            });
            return defer.promise;
        };
        this.logout = function () {
            var defer = $q.defer();
            $auth.logout().then(function (data) {
                defer.resolve(data);
            }, function (response) {
                defer.reject(response);
            }).finally(function () {
            });
            return defer.promise;
        };
=======
    this.iniciarSesion = function(data) {
      return $http.post(server + "signin", data)
    }
    this.crearPublicacion = function() {
      return $http.post(server + "publicacion", data)
    }
    this.modificarPerfil = function(data) {
      return $http.put(server + "perfil", data)
    }
    this.getUsuario = function() {
      return $http.get(server + "perfil")
    }
>>>>>>> b19598e06c21e54b9344647ec3c28c6a8b940398
  }

  angular.module('app').service('serviceApp', ['$q', '$state', '$auth', '$http', '$timeout', 'baseUrl', serviceApp])
})()
