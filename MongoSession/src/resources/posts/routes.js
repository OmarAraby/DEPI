const express = require("express");
const router = express.Router();
const {
  getPosts,
  createPost,
  deletePostById,
  getPostById,
  updatePostById,
} = require("./controller");

router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/", createPost);
router.delete("/:id", deletePostById);
router.patch("/:id", updatePostById);

module.exports = router;
