const mongoose = require('../config/database');
const { Schema } = mongoose;

const patientSchema = new Schema({

  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String },
  phoneNumber: { type: String },

  appointmentIds: { type: Schema.Types.ObjectId, ref: 'appointments' },
  appointments: [],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('patients', patientSchema);
