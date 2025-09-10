const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}


router.get("/", blogController.getAllBlogs);

router.get("/new", isLoggedIn, blogController.showNewBlogForm);

router.post("/new", isLoggedIn, blogController.createNewBlog);

router.post("/:id/like", isLoggedIn, blogController.likeBlog);

router.post("/:id/comment", isLoggedIn, blogController.commentOnBlog);

module.exports = router;
