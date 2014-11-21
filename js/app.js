var AngularWorkshopApp = angular.module('AngularWorkshopApp',
  ['ngRoute', 'ngAnimate', 'AngularControllers']);
var AngularControllers = angular.module('AngularControllers', []);

// route configurations that will connect the controllers to templates
// for whatever route you're going to
AngularWorkshopApp

  .config([
    '$routeProvider',
    function($routeProvider)
    {
      $routeProvider
        .when('/', {
          controller: 'HomeController',
          templateUrl: 'partial/home.html'
        })

        /**
         * Each person's routes here
         */
        .when('/hanam', {
          controller: 'HanamsController',
          templateUrl: 'partial/hanam/hanam.html'
        })
        .when('/hanam/about', {
          controller: 'HanamsAboutController',
          templateUrl: 'partial/hanam/hanam_about.html'
        })

        .otherwise({
          redirectTo: '/'
        });
    }
  ]);