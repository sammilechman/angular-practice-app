var myApp = angular.module('myApp', []);

myApp.controller("UserCtrl", ['$scope', 'Math', function($scope, Math){
  $scope.user = {};
  $scope.user.details = {
    "username": "Sam Milechman",
    "id": Math.addOne(12345)
  };
}]);

myApp.directive("customButton", function() {
  return {
    restrict: "A",
    replace: true,
    transclude: true,
    template: '<a href="" class="myawesomebutton" ng-transclude>' + '<i class="icon-ok-sign"></i>' + '</a>',
    link: function(scope, element, attrs){
      // DOM manipulation or events here!
    }
  };
});

myApp.service("Math", function() {
  this.addOne = function(x) {
    return x + 1;
  };
});
