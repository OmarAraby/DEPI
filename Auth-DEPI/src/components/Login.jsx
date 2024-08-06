import React, { useState } from "react";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const getAuth = async (username, pass) => {
    await fetch("https://dummyjson.com/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: pass,
        expiresInMins: 30, // optional, defaults to 60
      }),
    })
      .then((res) => res.json())
      .then((json) => localStorage.setItem("token", json.token));
  };

  return (
    <>
      <div className="container">
        <h1>Login</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getAuth(userName, pass);
          }}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              UserName
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-secondary">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
