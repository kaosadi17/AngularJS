angular.module("repeatMod",[]).controller("repCnt",repcnt);

function repcnt(){
	this.repar = [
		{"name":"Foo", "age":20},
		{"name":"Fred", "age":30},
		{"name":"Bill", "age":25}
	];
}