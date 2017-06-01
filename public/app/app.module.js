(function () {
  var config = function ($stateProvider,$urlRouterProvider) {
        $stateProvider
              /*.state('home', {
                url: 'home',
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
              .state('login.prueba', { //Para ver cómo funciona
                templateUrl:'/public/app/auth/prueba.html'
              })*/
              .state('homeini', { //No sé cómo ubicarla en el árbol
                url: '/',
                templateUrl:'/public/app/views/homeini.html'
              })
              .state('homeini.signin', {
                url: 'signin',
                templateUrl:'/public/app/views/signin.html',
                controller:'logeoController'
              })
              .state('homeini.signup', {
                url: 'signup',
                templateUrl:'/public/app/views/signup.html',
                controller:'signupController'
              })
              .state('homelog', { //No sé cómo ubicarla en el árbol
                url: '/homelog',
                templateUrl:'/public/app/views/homelog.html' //Hoja donde el usuario ya se encuentra logeado
                controller:'homelogController'
              })
              .state('homelog.publicar', {
                url: 'publicar',
                templateUrl:'/public/app/views/publicar.html'
                controller:'publicarController'
              })
              .state('perfil', {
                url: '/perfil',
                templateUrl:'/public/app/views/perfil.html'
                controller:'modificarPerfil' 
              })
              $urlRouterProvider.otherwise('/');
      }

  angular.module('app',['ui.router']).config(config)

})()
