'use strict';

/**
 * @ngdoc overview
 * @name digioAssignmentApp
 * @description
 * # digioAssignmentApp
 *
 * Main module of the application.
 */
angular
  .module('digioAssignmentApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
