'use strict';

/**
 * @ngdoc function
 * @name ngKalaboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngKalaboxApp
 */
angular.module('ngKalaboxApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
