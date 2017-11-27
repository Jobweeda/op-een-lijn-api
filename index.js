const express = require('express');
const bodyParser = require('body-parser');
const { patients } = require('./routes');

const PORT = process.env.PORT || 3030;

let app = express();

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(patients)
  .use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  })
   .use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: app.get('env') === 'development' ? err : {}
    });
  })
  .listen(PORT, () => {
    console.log(`server is live on port ${PORT}`); //eslint-disable-line
  });
