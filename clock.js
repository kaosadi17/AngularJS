var module = angular.module("myMod",[]);
module.controller("manCtrl",main);

function main($scope){
	$scope.username="";
	var date = new Date();
	$scope.timeVal = date.toTimeString();
	$scope.updatefun = function(){
		var date = new Date();
		$scope.timeVal = date.toTimeString();
	}
}