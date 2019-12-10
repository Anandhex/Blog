var db = require("../models");

exports.signup = function(req, res, next) {
  db.User.create(req.body)
    .then(data => {
      console.log(data);
      res.send(data.toJSON());
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
};

exports.signin = async function(req, res, next) {
  await db.User.findOne({ email: req.body.email }, (err, result) => {
    if (err) {
      next(err);
    } else {
      if (result.password === req.body.password) res.send(result);
      else {
        let err = new Error("invalid password");
        err.status = "403";
        next(err);
      }
    }
  });
};
