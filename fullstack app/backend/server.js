// Requires
require("dotenv").config();
const fs = require("fs");
const cors = require("cors");
const express = require("express");
const app = express();

// Vars
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  fs.readFile("database.json", "utf8", (err, data) => {
    if (err) console.log(err);
    if (data) {
      const parsedData = JSON.parse(data);
      let userData = parsedData["users"].map(({ password, ...reset }) => reset);
      res.status(200).json({
        data: userData,
      });
    }
  });
});

app.post("/", (req, res) => {
  const { name, email, password } = req.body;
  fs.readFile("database.json", "utf8", (err, data) => {
    if (err) console.log(err);
    if (data) {
      const parsedData = JSON.parse(data);
      const last_id = parsedData["last_id"] + 1;
      let users = parsedData["users"];
      users.push({
        id: last_id,
        name,
        email,
        password,
      });

      fs.writeFile(
        "database.json",
        JSON.stringify({
          users,
          last_id,
        }),
        (err) => {
          if (err) {
            console.log(err);
          } else {
            res.status(201).json({ msg: "User has been added" });
          }
        }
      );
    }
  });
});

// get specific user

app.get("/:id", (req, res) => {
  const id = req.params.id;
  fs.readFile("database.json", "utf8", (err, data) => {
    if (err) console.log(err);
    if (data) {
      const parsedData = JSON.parse(data);
      // creates a new array userData where each user object no longer includes the password field
      let userData = parsedData["users"].map(({ password, ...reset }) => reset);
      const user = userData.filter((e) => e.id == id);
      res.status(200).json({ data: user });
    }
  });
});

//  delete
app.delete("/:id", (req, res) => {
  const id = req.params.id;
  fs.readFile("database.json", "utf8", (err, data) => {
    if (err) console.log(err);
    if (data) {
      const parsedData = JSON.parse(data);
      // Iterates over the users array and removes the user whose id matches the provided id
      // users now contains all users except the one with the specified id
      const users = parsedData["users"].filter((e) => e.id != id);
      const last_id = parsedData["last_id"];

      fs.writeFile(
        "database.json",
        JSON.stringify({ users, last_id }),
        (err) => {
          if (err) console.log(err);
          res.status(201).json({ msg: "user has deleted" });
        }
      );
    }
  });
});

// PUT
app.put("/:id", (req, res) => {
  const id = req.params.id;
  const updateUserData = req.body;

  fs.readFile("database.json", "utf8", (err, data) => {
    if (err) console.log(err);
    if (data) {
      const parsedData = JSON.parse(data);
      const users = parsedData["users"];
      // find user index that match with provided id
      const userIndex = users.findIndex((user) => user.id == id);
      if (userIndex !== -1) {
        // update user dataa
        users[userIndex] = { ...users[userIndex], ...updateUserData };
        fs.writeFile(
          "database.json",
          JSON.stringify({ users, last_id: parsedData["last_id"] }),
          (err) => {
            if (err) console.log(err);
            res.status(200).json({ msg: "User has been updated" });
          }
        );
      } else {
        res.status(404).json({ msg: "User not found" });
      }
    }
  });
});

// Server
app.listen(port, () => console.log(`Server is running on port ${port}`));
