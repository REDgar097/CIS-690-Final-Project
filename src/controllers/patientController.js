const Patient = require('../models/patient');

exports.create = async function(req, res) {
  let patient = new Patient({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    creatorId: req.body.creatorId,
    creatorName: req.body.creatorName,
    birthdate: req.body.birthdate,
    zipcode: req.body.zipcode,
    state: req.body.state,
    phoneNumber: req.body.phoneNumber,
    createDate: req.body.createDate,
    insuranceType": req.body.insuranceType,
    testType: req.body.testType,
    doctorService": req.body.doctorService,
    labName: req.body.labName,
    sampleStatus": req.body.sampleStatus
  });

  try {
    await patient.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

exports.update_get = async function(req, res) {
  var patient = await Patient.findOne({ _id: req.query.id });
  res.render('update', patient);
}

exports.update = async function(req, res) {
  const updateData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    creatorId: req.body.creatorId,
    creatorName: req.body.creatorName,
    birthdate: req.body.birthdate,
    zipcode: req.body.zipcode,
    state: req.body.state,
    phoneNumber: req.body.phoneNumber,
    createDate: req.body.createDate,
    insuranceType": req.body.insuranceType,
    testType: req.body.testType,
    doctorService": req.body.doctorService,
    labName: req.body.labName,
    sampleStatus": req.body.sampleStatus
  };

  var result = await Patient.findOneAndUpdate({ _id: req.body.id }, updateData)
  res.redirect('/');
}

exports.delete = async function(req, res) {
  console.log(req.query);
  await User.findOneAndDelete({ _id: req.query.id });
  res.redirect('/');
}

exports.getall = async function(req, res) {
  try {
    var returnedPatients = await Patient.find({});
    console.log(returnedPatients);
    res.render('index', { persons: returnedPatients });
  } catch (err) {
    console.log(err);
  }
};