'use strict';

// Declare app level module which depends on views, and components
angular.module('tipTopApp', [
  'ngRoute',
  'tipTopApp.view1',
  'tipTopApp.view2',
  'tipTopApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
