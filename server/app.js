const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const { OpenAIApi , Configuration } = require('openai');
const router = express.Router();
require('dotenv').config();
const { InworldClient } = require('@inworld/nodejs-sdk');
const cache = {};

const app = express();

const PORT = process.env.PORT;

// const MONGODB_URI = process.env.MONGODB_URI
// mongoose.set('strictQuery', false); // set strictQuery to false

// mongoose.connect('mongodb+srv://slash12:R0NFJQXZu9TfSto4@investment.67bmwff.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
//   .then(() => console.log('Connected to database'))
//   .catch((err) => console.error('Could not connect to database', err));

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY
});

app.use(cors());
app.use(express.json());
app.use(router);

// Create a single instance of OpenAIApi
const openai = new OpenAIApi(configuration);

const questions = [
  'Hi there! Do you have any experience with investing?', 
  'Great! What types of investments have you tried before?', 
  'That\'s interesting. Are you more interested in long-term or short-term investments?', 
  'That makes sense. Do you prefer investing in individual stocks or in diversified funds like ETFs or mutual funds?', 
  'Got it. How much risk are you willing to tolerate in your investments?', 
  'Very wise. Have you thought about investing in alternative assets like real estate or cryptocurrencies?', 
  'Good to know. How much time and effort are you willing to put into researching and monitoring your investments?', 
  'Okay. Do you have any specific investment goals or milestones you\'d like to achieve?', 
  'Thanks for sharing. Based on your responses, I can give you some investment recommendations. Would you like to hear them?'
];

let questionIndex = 0;

const getNextQuestion = () => {
  const nextQuestion = questions[questionIndex];
  questionIndex++;
  return nextQuestion;
};

router.post('/message', async (req, res) => {
  const { message } = req.body;

  if (cache[message]) {
    const response = cache[message];
    const aiResponse = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: response,
      temperature: 0.9,
      max_tokens: 50,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
    });
    const aiText = aiResponse.data.choices[0].text;
    const nextQuestion = getNextQuestion();
    cache[message] = nextQuestion;
    cache[nextQuestion] = aiText;
    res.status(200).json({
      message: aiText
    });
    return;
  }

  const response = getNextQuestion();
  cache[message] = response; // store the response in cache
  res.status(200).json({
    message: response
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
