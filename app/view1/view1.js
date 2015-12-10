'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {
  /*
   检测是否有选择表情,如果有就把表情放入到输入框
   */
  $scope.$watch('currentface',function(){
    if($scope.currentface!='NAN'&&$scope.currentface!=undefined){
      if($scope.sendBox!=undefined&&$scope.sendBox!='NAN'){
        $scope.sendBox= $scope.sendBox+$scope.currentface;
      }else{
        $scope.sendBox= $scope.currentface;
      }
      $scope.currentface="";
    }

  });
});