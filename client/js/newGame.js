var codeGen;
var waiting;

$(window).load(function() {
	webix.ui({
		container:"newGame",
		body:{
			template:"<span style='font-size:24px;></span>"
		},
		rows:[
			{ type:"header", template:"New Game" }
		]
	});
	webix.ui({
		view:"button",
		container:"cancel",
		id:"cancel", 
		value:"Cancel", 
		width:100,
		click:cancel
	});
	codeGen = document.getElementById('codeGen');
	waiting = document.getElementById('waiting');
	generateCode();
});

var socket = io();
function generateCode() {
	var codeGenerated = "";
	var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	for(var i=0; i<6; i++)
	   codeGenerated = codeGenerated.concat(charset[ Math.floor (Math.random() * charset.length) ]); 
    socket.emit('newGame',codeGenerated); // sends code to server
    /* socket check needed to decide whether to pass to success or failure function */
    codeGenSuccess(codeGenerated); 
};

function codeGenSuccess(data) {
	// update HTML content
	codeGen.innerHTML = data;
	waiting.innerHTML = "Waiting for another player to join.";
};

socket.on('someoneJoined',function(someoneJoined){
	if(someoneJoined)
		directToGame();
});

function codeGenFailure(data) {
	// update HTML content
	codeGen.innerHTML = "Unable to generate a code at this time.  Please try again later."
};

function cancel() {
	// return to home screen if cancel is pressed
	socket.emit('newGameDisconnect');
	window.location.href = "index.html";
};

// once another player has joined using the code, call this function to direct to the game
function directToGame() {
	window.location.href = "checkers.html?playerNo=1&inputCode="+codeGen.innerHTML;
};
