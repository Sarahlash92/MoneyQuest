const express = require('express');
const { InworldClient } = require('@inworld/nodejs-sdk');
const cors = require ('cors');


const app = express();


app.use(cors());


const client = new InworldClient();
client.setApiKey({
  key: 't3hIk1GR6ruRVHqccmCUxzhduCT1ZOOf',
  secret:'1ZUDPp2cWxg31FmVB1AnWSqTsWecbhX13sqCyhzTocHw9nF2sMRMRmCkbjWoz5S5',
});
client.setUser({
  fullName: 'Slash',
});
client.setConfiguration({
  capabilities: { audio: false, emotions: true },
});
client.setScene('workspaces/default-w5pin-cntlbebptkhe0fwa/scenes/the_caterpillars_mushroom');

client.setOnError((err) => {
  console.error(err);
});

client.setOnMessage((packet) => {
  if(packet.text && packet.text.text){
    return packet.text.text;
  }

});

const connection = client.build();

// Send a message to the InworldClient and log the response message to the console
async function sendMessage(message) {
  console.log(message)
  await connection.sendText(message);
}

await connection.sendText('is this working now');

const character = connection.getCurrentCharacter();

async function charactersName(){
  
  await console.log(character.getDisplayName());
}

// Express route to send a message to the InworldClient and log the response message to the console

// app.post('/', async (req, res) => {
//   const message = req.body.message;
//   console.log(message);
//   await sendMessage(message);

// });

app.get('/', async (req, res) => {

  const characterMsg = await setOnMessage();
  const characterName = await charactersName();


})


// Start the Express server
app.listen(3001, () => {
  console.log('Server started on port 3001');
});
















// import { InworldClient } from '@inworld/nodejs-sdk';
// import cors from 'cors';
// import express from 'express';

// const PORT = 4000;

// if (!process.env.INWORLD_KEY) {
//   throw new Error('INWORLD_KEY env variable is required');
// }

// if (!process.env.INWORLD_SECRET) {
//   throw new Error('INWORLD_SECRET env variable is required');
// }

// const client = new InworldClient().setApiKey({
//   key: 't3hIk1GR6ruRVHqccmCUxzhduCT1ZOOf',
//   secret: '1ZUDPp2cWxg31FmVB1AnWSqTsWecbhX13sqCyhzTocHw9nF2sMRMRmCkbjWoz5S5',
// });

// const app = express();

// app.use(cors());

// app.get('/', async (_, res) => {
//   const token = await client.generateSessionToken();

//   res.setHeader('Content-Type', 'application/json');
//   res.end(JSON.stringify(token));
// });

// app.listen(PORT, () => {
//   console.log(`Listening to port ${PORT}`);
// });