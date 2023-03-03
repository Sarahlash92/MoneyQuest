const express = require('express');
const { InworldClient } = require('@inworld/nodejs-sdk');

const app = express();

const client = new InworldClient();
client.setApiKey({
  key: 't3hIk1GR6ruRVHqccmCUxzhduCT1ZOOf',
  secret:'1ZUDPp2cWxg31FmVB1AnWSqTsWecbhX13sqCyhzTocHw9nF2sMRMRmCkbjWoz5S5',
});
client.setUser({
  fullName: 'Slash',
});
client.setConfiguration({
  capabilities: { audio: true, emotions: true },
});
client.setScene('workspaces/default-w5pin-cntlbebptkhe0fwa/scenes/the_caterpillars_mushroom');

client.setOnError((err) => {
  console.error(err);
});

client.setOnMessage((packet) => {
  if(packet.text && packet.text.text){
    console.log("this is the msg text", packet.text.text);
  }

});

const connection = client.build();

// Send a message to the InworldClient and log the response message to the console
async function sendMessage(message) {
  await connection.sendText(message);
}

const character = connection.getCurrentCharacter();

async function charactersName(){
  await character.getDisplayName();
}

// Express route to send a message to the InworldClient and log the response message to the console
app.get('/', async (req, res) => {
  const message = 'Hey, how are you?';
  await sendMessage(message);
  res.send('Message sent successfully.');
});

// Start the Express server
app.listen(3001, () => {
  console.log('Server started on port 3001');
});