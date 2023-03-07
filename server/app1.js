const express = require('express');
const bodyParser = require('body-parser');
const { InworldClient } = require('@inworld/nodejs-sdk');
const cors = require ('cors');
const { Router } = require('express');

const app = express();
const port = 3000;
const KEY = process.env.INWORLD_KEY;
const SECRET = process.env.INWORLD_SECRET;


app.use(bodyParser.json());
app.use(cors());

const client = new InworldClient();
client.setApiKey({KEY, SECRET});
client.setScene(process.env.INWORLD_SCENE);

const connection = client.build();


Router.post('/message', async (req, res) => {
  const {text} = req.body;

  // connection.setOnMessage((msg) => {
  //   res.send(msg.text.text);
  // });
  const response = await connection.sendText(req.body);

  console.log(response)
  console.log(res)
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
