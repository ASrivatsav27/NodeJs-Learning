const ChatRoom = require("./chatRoom.js")

const chat = new ChatRoom();

chat.on('join', (user) => {
    console.log(`${user} has joined the chat`);
});

chat.on("message", (user,message) => {
    console.log(`${user} : ${message}`);
})

chat.on("leave", (user) => {
    console.log(`${user} has left the chat`)
})

// simulating the chat

chat.join('luffy')
chat.join('zoro')

chat.sendMessage('luffy', 'Oye Zoro,Hello to everyone');
chat.sendMessage('zoro', 'Luffyyy,Hello to everyone');

chat.leave('luffy')
chat.sendMessage('luffy', 'this message wont be sent')
chat.leave('zoro');