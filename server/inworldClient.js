const { InworldClient } = require('@inworld/core');

class InworldClientWrapper {
  constructor() {
    this.client = new InworldClient();
    this.client.setApiKey({
  
    key: 't3hIk1GR6ruRVHqccmCUxzhduCT1ZOOf',
    secret:'1ZUDPp2cWxg31FmVB1AnWSqTsWecbhX13sqCyhzTocHw9nF2sMRMRmCkbjWoz5S5',
})
  // Setup a user name.
  // It allows character to call you by name.
  this.client.setUser({ fullName: 'Your name' });

this.client.setConfiguration({ capabilities: { audio: false, emotions: true } });
this.client.setScene('workspaces/default-w5pin-cntlbebptkhe0fwa/scenes/the_caterpillars_mushroom');
this.client.setOnError((err) => console.error(err));
}

async sendText(text) {
await this.client.sendText(text);
}

setOnMessage(onMessage) {
this.client.setOnPacket((packet) => {
  if (packet.type === 'chat') {
    const text = packet.payload.text;
    onMessage({ sender: 'character', text });
  }
});
}

close() {
this.client.close();
}
}

module.exports = InworldClientWrapper;


// const express = require('express');
// const { InworldClient } = require('@inworld/nodejs-sdk');
// const cors = require ('cors');


// const app = express();


// app.use(cors());


// const client = new InworldClient();
// client.setApiKey({
//   key: 't3hIk1GR6ruRVHqccmCUxzhduCT1ZOOf',
//   secret:'1ZUDPp2cWxg31FmVB1AnWSqTsWecbhX13sqCyhzTocHw9nF2sMRMRmCkbjWoz5S5',
// });
// client.setUser({
//   fullName: 'Slash',
// });
// client.setConfiguration({
//   capabilities: { audio: false, emotions: true },
// });
// client.setScene('workspaces/default-w5pin-cntlbebptkhe0fwa/scenes/the_caterpillars_mushroom');

// client.setOnError((err) => {
//   console.error(err);
// });

// client.setOnMessage((packet) => {
//   if(packet.text && packet.text.text){
//     return packet.text.text;
//   }

// });

// const connection = client.build();

// // Send a message to the InworldClient and log the response message to the console
// async function sendMessage(message) {
//   console.log(message)
//   await connection.sendText(message);
// }

// await connection.sendText('is this working now');

// const character = connection.getCurrentCharacter();

// async function charactersName(){
  
//   await console.log(character.getDisplayName());
// }

// // Express route to send a message to the InworldClient and log the response message to the console

// // app.post('/', async (req, res) => {
// //   const message = req.body.message;
// //   console.log(message);
// //   await sendMessage(message);

// // });

// app.get('/', async (req, res) => {

//   const characterMsg = await setOnMessage();
//   const characterName = await charactersName();


// })


// // Start the Express server
// app.listen(3001, () => {
//   console.log('Server started on port 3001');
// });
