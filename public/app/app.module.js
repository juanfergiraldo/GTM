(function () {

  var config=function ($stateProvider,$urlRouterProvider) {
        $stateProvider
              .state('home', {
                url: '/',
                templateUrl:'/public/app/auth/home.html',
                controller:'homeController'
              })
              .state('perfil', {
                url: '/perfil',
                templateUrl:'/public/app/auth/perfil.html'
              })
              .state('login', {
                url: '/login',
                templateUrl:'/public/app/auth/login.html'
              })
              .state('login.registro', {
                templateUrl:'/public/app/auth/loginregistro.html'
              })

              $urlRouterProvider.otherwise('/');
      }

  angular.module('app',['ui.router']).config(config)

})()
