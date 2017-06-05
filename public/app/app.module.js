(function () {
  var config = function ($authProvider, $stateProvider, $urlRouterProvider) {
    const server = "http://localhost:3001/gtm/"

    $authProvider.loginUrl = server + "signin";
    $authProvider.tokenName = "SECRET_TOKEN";
    $authProvider.tokenPrefix = "app";


        $stateProvider
              .state('homeini', {
                url: '/',
                templateUrl:'/public/app/views/homeini.html'
              })
              .state('homeini.signin', {
                url: 'signin',
                templateUrl:'/public/app/views/signin.html',
                controller:'logueoController'
              })
              .state('homeini.signup', {
                url: 'signup',
                templateUrl:'/public/app/views/signup.html',
                controller:'signupController'
              })
              .state('homelog', {
                url: '/homelog',
                templateUrl:'/public/app/views/homelog.html', //Hoja donde el usuario ya se encuentra logeado
                controller:'homelogController'
              })
              .state('homelog.publicar', {
                url: 'publicar',
                templateUrl:'/public/app/views/publicar.html',
                controller:'publicarController'
              })
              .state('homelog.perfil', {
                url: '/perfil',
                templateUrl:'/public/app/views/perfil.html',
                controller:'modificarPerfilController'

              })
              $urlRouterProvider.otherwise('/');
      }
      angular.module('app',['ui.router','satellizer']).config(config)

})()
