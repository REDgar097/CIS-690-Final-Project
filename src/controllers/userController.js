const User = require('../models/user');

exports.create = async function(req, res) {
  let user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    role: req.body.role
  });

  try {
    await user.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

exports.update_get = async function(req, res) {
  var user = await User.findOne({ _id: req.query.id });
  res.render('update', user);
}

exports.update = async function(req, res) {
  const updateData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    role: req.body.role
  };

  var result = await User.findOneAndUpdate({ _id: req.body.id }, updateData)
  res.redirect('/');
}

exports.delete = async function(req, res) {
  console.log(req.query);
  await User.findOneAndDelete({ _id: req.query.id });
  res.redirect('/');
}

exports.getall = async function(req, res) {
  try {
    var returnedUsers = await User.find({});
    console.log(returnedUsers);
    res.render('index', { persons: returnedUsers });
  } catch (err) {
    console.log(err);
  }
};