const mongoose = require('mongoose');

const { Schema } = mongoose;

const patientSchema = new Schema({
  creatorId: 
    {
      type: String, required: true
    }, 
  creatorName: 
    {
      type: String, required: true
    }, 
  firstName: 
    {
    type: String, required: true
    }, 
  lastName: 
    {
    type: String, required: true
    }, 
  birthdate: 
    {
    type: date, required: true
    }, 
  zipcode: 
    {
    type: String, required: true
    }, 
  state: 
    {
    type: String, required: true
    }, 
  phoneNumber: 
    {
    type: String, required: true
    }, 
  createDate: 
    {
    type: date, default: Date.now
    }, 
  insuranceType: 
    {
    type: String, required: true
    }, 
  testType: 
    {
    type: String, required: true
    }, 
  doctorService: 
    {
    type: String, required: true
    }, 
  labName: 
    {
    type: String, required: true
    }, 
  sampleStatus: 
    {
    type: String, required: true
    }, 
});

const Patient = mongoose.model('patients', patientSchema);

module.exports = Patient;