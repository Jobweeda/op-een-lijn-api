const router = require('express').Router();
const { Patient } = require('../models');

router.get('/patients', (req, res, next) => {
  Patient.find()
    .sort({ lastName: -1 })
    .then((patients) => res.json(patients))
    .catch((error) => next(error));
})
  .get('./patients/:id', (req, res, next) => {
    const id = req.params.id;

    Patient.findById(id)
      .then((patient) => {
        if (!patient) { return next() } //eslint-disable-line
        res.json(patient);
      })
      .catch((error) => next(error));
  })
  .post('/patients', (req, res, next) => {
    let newPatient = req.body;

    Patient.create(newPatient)
      .then((patient) => res.json(patient))
      .catch((error) => next(error));
  });

module.exports = router;
