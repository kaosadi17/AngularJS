var module = angular.module("myMod",[]);
module.controller("mainCtrl",main);


function main(){
	this.answer = 0;
	this.clickbut = function(but){
		this.selectopt = but;
	}
	this.cal = function(){
		var num1 = parseFloat(this.input1);
		var num2 = parseFloat(this.input2);
		if(this.selectopt === '+'){
			this.answer = num1 + num2;
		}
		else if(this.selectopt === '-'){
			this.answer = num1 - num2;
		}
		else if(this.selectopt === '*'){
			this.answer = num1 * num2;
		}
		else if(this.selectopt === '/'){
			this.answer = num1 / num2;
		}
	}

}