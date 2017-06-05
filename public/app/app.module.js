(function () {
  var config = function ($authProvider, $stateProvider, $urlRouterProvider) {
    const server = "http://localhost:3001/gtm/"

    $authProvider.loginUrl = server + "signin";
    $authProvider.tokenName = "SECRET_TOKEN";
    $authProvider.tokenPrefix = "app";


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
              .state('perfil', {
                url: '/perfil',
                templateUrl:'/public/app/views/perfil.html',
                controller:'modificarPerfilController'

              })
              $urlRouterProvider.otherwise('/');
      }
      angular.module('app',['ui.router','satellizer']).config(config)
      .directive('file', function () {
        return {
          restrict: 'E',
          template: '<input type="file" />',
          replace: true,
          require: 'ngModel',
          link: function(scope, element, attr, ctrl) {
              var listener = function() {
                  scope.$apply(function() {
                      attr.multiple ? ctrl.$setViewValue(element[0].files) : ctrl.$setViewValue(element[0].files[0]);
                  });
              }
              element.bind('change', listener);
          }
      }
  })
}
)()
