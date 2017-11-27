const request = require('superagent');
const patients = require('./fixtures/patients.json');

const createUrl = (path) => {
  return `${process.env.HOST || `http://localhost:${process.env.PORT || 3030}`}${path}`;
};

return patients.map((patient) => {
  return request
    .post(createUrl('/patients'))
    .send(patient)
    .then((res) => {
      console.log('Patient seeded', res.body.firstName) //eslint-disable-line
    })
    .catch((err) => {
      console.error('Error seeding patient', err) //eslint-disable-line
    });
});
