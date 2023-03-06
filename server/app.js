const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const { OpenAIApi , Configuration } = require('openai');
const router = express.Router();
require('dotenv').config();


const app = express();

const PORT = process.env.PORT;

// const MONGODB_URI = process.env.MONGODB_URI
// mongoose.set('strictQuery', false); // set strictQuery to false

// mongoose.connect('mongodb+srv://slash12:R0NFJQXZu9TfSto4@investment.67bmwff.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
//   .then(() => console.log('Connected to database'))
//   .catch((err) => console.error('Could not connect to database', err));

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY
})

app.use(cors());
app.use(express.json());
app.use(router);

router.post('/message', async (req, res) => {
  const { message } = req.body;
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt: message,
    max_tokens: 7,
  });

  res.status(200).json({
    message: response.data.choices[0].text
  })
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
