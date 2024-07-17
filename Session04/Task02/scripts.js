"use strick";

class User {
    #amount;
    constructor(email, password, amount) {
        this.email = email;
        this.password = password;
        this.#amount = amount;
    }

    login(email, password) {
        return this.email === email && this.password === password;
    }

    inquiry() {
        return this.#amount;
    }
}

const users = [
    new User("user1@gmail.com", "123456", 8000),
    new User("user2@gmail.com", "123456", 9000),
    new User("user3@gmail.com", "123456", 10000),
    new User("user4@gmail.com", "123456", 12000),
];

const form = document.getElementById("loginForm");
const msg = document.querySelector(".msg");
const userName = document.getElementById("userName");
const userAmount = document.getElementById("userAmount");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = users.find((user) => user.login(email, password));
    if (user) {
        userName.textContent = email;
        userAmount.textContent = `$${user.inquiry()}`;

        form.style.display = "none";
        msg.style.display = "block";
    } else {
        alert("Incorrect email or password. Please try again.");
    }
});
