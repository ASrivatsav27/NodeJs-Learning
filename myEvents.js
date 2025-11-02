const EventEmitter = require('events'); // importing events module
const eventEmitter = new EventEmitter()

eventEmitter.on('greet', (username) => {
    console.log(`Hello ${username} , welcome to events in NodeJS`);
})

eventEmitter.once("pushnotify", () => {
    console.log("This event will run only once");
})
const myListener = () => console.log('I am a test listener');
eventEmitter.on("test", myListener)
eventEmitter.emit("test")
// Emit the event
eventEmitter.emit('greet', "srivatsav");


eventEmitter.emit('pushnotify');


const list = () => { console.log("testing") }

eventEmitter.on("test1", list)

eventEmitter.emit('test1')