'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:GunsCtrl
 * @description
 * # GunsCtrl
 * Controller of the myappApp
 */

// var APP = angular.module('myappApp');

APP.controller('GunsCtrl', function ($scope) {

	$scope.akSelected = APP.akSelected;

	$scope.flipped = false;

	var countF = 0;
	var countB = 0;

	$scope.flipForward = function() {
		if(countF === 0)
		{
			$scope.flipped = !$scope.flipped;
			console.log('flip');
			countF++;
			countB = 0;
		}
	};

	$scope.flipBack = function() {
		if(countB === 0)
		{
			$scope.flipped = !$scope.flipped;
			console.log('flip');
			countB++;
			countF = 0;
		}
	};

});

APP.directive("flipper", function() {
	return {
		restrict: "E",
		template: "<div class='flipper' ng-transclude ng-class='{ flipped: flipped }'></div>",
		transclude: true,
		scope: {
			flipped: "="
		}
	};
});

APP.directive("front", function() {
	return {
		restrict: "E",
		template: "<div class='front tile' ng-transclude></div>",
		transclude: true
	};
});

APP.directive("back", function() {
	return {
		restrict: "E",
		template: "<div class='back tile' ng-transclude></div>",
		transclude: true
	}
});

