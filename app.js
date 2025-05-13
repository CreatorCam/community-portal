// app.js

const express = require("express");
const bodyParser = require('body-parser')
const path = require("path");
const pageRoutes = require("./routes/pageRoutes");

const app = express();
const port = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Set EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/pages'));

// Routes
app.use('/', pageRoutes);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views", "pages"));

app.use("/", pageRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});














