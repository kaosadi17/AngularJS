var module = angular.module("mymod",[]);
module.controller("Ctrl1",ctrl1);
module.controller("Ctrl2",ctrl2);


function ctrl1(){
	this.testval = "ctrl1val";
}

function ctrl2(){
	this.testval = "ctrl2val";
}