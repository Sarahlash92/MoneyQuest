const express = require('express');
const mongoose = require('mongoose');
const gameRoutes = require('./routes/game');
const cors = require ('cors');
const Game = require('./models/Game');


const app = express();

const PORT = process.env.PORT || 5000;
// const MONGODB_URI = process.env.MONGODB_URI
mongoose.set('strictQuery', false); // set strictQuery to false

mongoose.connect('mongodb+srv://slash12:R0NFJQXZu9TfSto4@investment.67bmwff.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(() => console.log('Connected to database'))
  .catch((err) => console.error('Could not connect to database', err));

  Game.create(games, (err, createdGames) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Games added to the database:');
      console.log(createdGames);
    }
  });



app.use(cors());
app.use(express.json());

app.use('/api/game', gameRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
