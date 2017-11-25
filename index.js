const express = require('express');

const PORT = process.env.PORT || 3030;

let app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express');
});

app.listen(PORT, () => {
  console.log(`server is live on port ${PORT}`); //eslint-disable-line
});
