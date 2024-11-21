//initial declarations
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 9000;

//middleware for static files
app.use(express.static('public/images'));

//setup view engine
app.set("views", "./views");
app.set("view engine", "ejs");

//route handler that renders the view
app.get("/", (req, res) => {
    res.render('home');
});

//listening on port 8080
app.listen(PORT, () => {
    console.log(`Connected at port ${PORT}`);
});
