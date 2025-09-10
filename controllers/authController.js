const passport = require("passport");


exports.googleLogin = passport.authenticate("google", {
  scope: ["profile", "email"],
});


exports.googleCallback = passport.authenticate("google", {
  failureRedirect: "/",
});

exports.redirectAfterLogin = (req, res) => {
  res.redirect("/blogs");
};


exports.logoutUser = (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect("/");
  });
};

