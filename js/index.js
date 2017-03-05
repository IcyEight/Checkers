$(window).load(function() {
	webix.ui({
		container:"welcome",
		body:{
			template:"<span style='font-size:24px;></span>"
		},
		rows:[
			{ type:"header", template:"Welcome to Checkers!" }
		]
	});
	webix.ui({
		view:"button",
		container:"btn1",
		id:"about", 
		value:"About", 
		width:160,
		click:toAbout
	});
	webix.ui({
		view:"button",
		container:"btn2",
		id:"howTo", 
		value:"How to Play Checkers", 
		width:160,
		click:toRules
	});
	webix.ui({
		view:"button",
		container:"btn3",
		id:"newGame", 
		value:"New Game", 
		width:160,
		click:toNewGame
	});
	webix.ui({
		view:"button",
		container:"btn4",
		id:"joinGame", 
		value:"Join Game", 
		width:160,
		click:toJoinGame
	});
});

function toAbout() {
	window.location.href = "../html/about.html";
};

function toNewGame() {
	window.location.href = "../php/newGame.php";
};

function toRules() {
	window.location.href = "../html/rules.html";
};

function toJoinGame() {
	window.location.href = "../php/joinGame.php";
};