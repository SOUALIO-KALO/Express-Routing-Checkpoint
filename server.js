const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("accueil", { title: "Accueil" });
});
app.get("/service", (req, res) => {
  res.render("services", { title: "Nos services" });
});
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Nous contacter" });
});

app.listen(port, () => {
  console.log(`server running on localhost:${port}`);
});
