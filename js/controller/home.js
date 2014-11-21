'use strict';

AngularControllers.controller('HomeController', [
  '$scope',
  function ($scope)
  {
    $scope.id = 'Home';
    $scope.links = [{
      href: '#hanam',
      title: 'Hanam'
    }];
  }
]);