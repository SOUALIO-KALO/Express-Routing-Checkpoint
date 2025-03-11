const express = require("express");
const path = require("path");
const router = require("./routes/routes");

const app = express();
const port = 3000;

app.use(express.static("public"));

// Configuration du moteur de template Pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Mon middleware pour vérifier les heures de travail
const verifyDate = (req, res, next) => {
  const now = new Date();
  const day = now.getDay(); // renvoie un entier entre 0-6(dimanche:0 & samedi:6)
  const hour = now.getHours(); // Heures de 0 à 23
  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next();
  } else {
    res.render("closed");
  }
};

app.use(verifyDate);

app.use("/", router);

app.listen(port, () => {
  console.log(`server running on localhost:${port}`);
});
