'use strict';

angular.module('tipTopApp.photosView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/photosView', {
    templateUrl: 'photosView/photosView.html',
    controller: 'PhotosViewCtrl'
  });
}])

.controller('PhotosViewCtrl', [function() {

}]);