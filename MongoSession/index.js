require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
// const Post = require("./src/resources/posts/models");
// Vars
const app = express();
const port = process.env.PORT || 6000;
const db_url = process.env.DB_URL;

//  middlewares
app.use(express.json()); // json middleware
app.use(morgan("dev"));
app.use(cors());

// Routes
require("./src/routes")(app);

app.all("*", (req, res, next) => {
  res.status(404).json({ msg: "Error" });
});

// handle errors
app.use((err, req, res, next) => {
  console.log(err);
  res.status(400).json({ errer: err.message });
});

//   const { title, body } = req.body;
//   try {
//     const newPost = await Post.create({
//       title,
//       body,
//     });
//     res.status(201).json({
//       msg: "post created successfully",
//       data: newPost,
//     });
//   } catch (e) {
//     console.log(e);
//   }
// });

// DB connections and Server
mongoose.connect(db_url).then(() => {
  app.listen(port, () => console.log(`Server is running on port ${port}`));
});
