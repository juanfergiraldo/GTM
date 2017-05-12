(function () {
  var config = function ($stateProvider,$urlRouterProvider) {
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
              .state('inicio', {
                url: '/inicio',
                templateUrl:'/public/app/views/inicio.html'
              })
              .state('logeo', {
                url: '/logeo',
                templateUrl:'/public/app/views/login.html',
                controller:'logeoController'
              })
              .state('signup', {
                url: '/signup',
                templateUrl:'/public/app/views/signup.html',
                controller:'signupController'
              })
              $urlRouterProvider.otherwise('/');
      }

  angular.module('app',['ui.router']).config(config)

})()
