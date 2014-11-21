'use strict';

AngularControllers.controller('HanamsController', [
  '$scope', 
  function ($scope)
  {
    $scope.id = 'Hanam';
    $scope.links = [
      {
        href: '#/hanam/about',
        title: 'About Hanam'
      }
    ];
  }
]);