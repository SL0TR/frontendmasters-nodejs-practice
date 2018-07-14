// var stuff = require('./stuff');
var events = require('events');
var util = require('util');

// Stuff Module
// console.log(stuff.counter(['shaun', 'bladu', 'kapi', 'shudha']));
// console.log(stuff.adder(5,7));
// console.log(stuff.pi);

// var myEmitter = new events.EventEmitter();
// myEmitter.on('someEvent', (msg) => {
//   console.log(msg);
// })

// myEmitter.emit('someEvent', 'The event has been emitted');

var Person = function(name) {
  this.name = name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person('James');
var lanu = new Person('Lanu');
var kalu = new Person('Kalu');

var people = [james, lanu, kalu];

people.forEach((person) => {
  person.on('speak', (msg) => {
    console.log(person.name + ' said: ' + msg);
  });
})

james.emit('speak', 'hey dudes');
kalu.emit('speak', 'I want boobs');