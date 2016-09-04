'use strict';

// Declare app level module which depends on views, and components
angular.module('tipTopApp', [
  'ngRoute',
  'tipTopApp.introView',
  'tipTopApp.photosView',
  'tipTopApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/introView'});
}]);
