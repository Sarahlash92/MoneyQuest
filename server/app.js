const express = require('express');
const app = express();


const PORT = 3001;

app.get("/" , (req, res) => {
  
  res.send("Working");
})

app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`)
})