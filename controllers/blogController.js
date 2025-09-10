const Blog = require("../models/Blog");
const Comment = require("../models/Comment");
const Like = require("../models/Like");

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author");
    res.render("blogs", { user: req.user, blogs });
  } catch (err) {
    console.error(err);
    res.redirect("/");
  }
};

exports.showNewBlogForm = (req, res) => {
  res.render("newBlog", { user: req.user });
};


exports.createNewBlog = async (req, res) => {
  try {
    await Blog.create({
      title: req.body.title,
      content: req.body.content,
      author: req.user._id,
    });
    res.redirect("/blogs");
  } catch (err) {
    console.error(err);
    res.redirect("/blogs");
  }
};


exports.likeBlog = async (req, res) => {
  try {
    await Like.create({ user: req.user._id, blog: req.params.id });
    res.redirect("/blogs");
  } catch (err) {
    console.error(err);
    res.redirect("/blogs");
  }
};


exports.commentOnBlog = async (req, res) => {
  try {
    await Comment.create({
      text: req.body.text,
      author: req.user._id,
      blog: req.params.id,
    });
    res.redirect("/blogs");
  } catch (err) {
    console.error(err);
    res.redirect("/blogs");
  }
};

