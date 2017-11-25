const express = require('express');
const { Patient } = require('./models');

const PORT = process.env.PORT || 3030;

let app = express();

app.get('/patients', (req, res, next) => {
  Patient.find()
    .sort({ lastName: -1})
    .then((patients) => res.json(patients))
    .catch((error) => next(error));
});

app.listen(PORT, () => {
  console.log(`server is live on port ${PORT}`); //eslint-disable-line
});
