;(function () {
  'use strict';
  angular.module('myApp', [])
    .controller('tableCtrl',['$scope','$http',function ($scope, $http) {
      $http.get('/app/assets/brompton_accessories.json').success(function (data) {
        $scope.data = data;
      }).error(function (data) {
        console.log("error:" + data);
      });

      $scope.sortField = 'LocalSKU';
      $scope.sortReverse = false;
      $scope.filterString = '';
    }]);
}());

