const express = require("express");
const app = express();

let books = require("./booksdb.js");
const general_routes = require("./routes/general.js").general;
const auth_routes = require("./routes/auth_users.js").authenticated;

app.use(express.json());

// General user routes
app.use("/", general_routes);

// Registered user routes
app.use("/customer", auth_routes);

app.listen(5000, () => console.log("Server running on port 5000"));
