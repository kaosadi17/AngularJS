var module = angular.module("todoapp",[]);
module.controller("todoctrl",todoctrl);

function todoctrl(){
	this.editMode = false;
	this.todos = ["Edit the page", "Remove paragraph","Delete the content"];

	this.addNewTodo = function(){
		this.todos.push(this.newtodo);
		this.newtodo = "";
	}

	this.editToDo = function(){
		this.editMode = !this.editMode;

	}

	this.deleteToDo = function(index){
		this.todos.splice(index,1);
	}
}