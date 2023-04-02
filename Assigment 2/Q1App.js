
var send = require("./Q1Module");


send.on('greet', function(data) {
	console.log(data);
});

send.greetMethod('ITI');
