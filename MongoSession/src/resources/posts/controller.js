const Post = require("./models");

// get all posts
exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ data: posts });
  } catch (e) {
    next(e);
  }
};

// create post

exports.createPost = async (req, res, next) => {
  const { title, body } = req.body;
  try {
    const newPost = await Post.create({
      title,
      body,
    });
    res.status(201).json({
      msg: "post created successfully",
      data: newPost,
    });
  } catch (e) {
    next(e);
  }
};

// get specific post
exports.getPostById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const post = await Post.findById(id);
    res.status(200).json({ data: post });
  } catch (e) {
    next(e);
  }
};

// delete post

exports.deletePostById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const post = await Post.findByIdAndDelete(id);
    res.status(200).json({ msg: " Post Deleted successfully" });
  } catch (e) {
    next(e);
  }
};

// update
exports.updatePostById = async (req, res, next) => {
  const id = req.params.id;
  const { title, body, tags } = req.body;
  try {
    const updatePost = await Post.findByIdAndUpdate(
      id,
      { title, body, tags },
      { new: true }
    );
    res
      .status(200)
      .json({ msg: " Post updated successfully", data: updatePost });
  } catch (e) {
    next(e);
  }
};
