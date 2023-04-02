
var EventEmitter = require('events');
var util = require('util');

function Send() {

}

util.inherits(Send, EventEmitter);

Send.prototype.greetMethod = function() {
	this.emit('greet', "Hellow every body");
}

module.exports = new Send();

