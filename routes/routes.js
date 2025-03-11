const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("accueil", { title: "Accueil" });
});
router.get("/service", (req, res) => {
  res.render("services", { title: "Nos services" });
});
router.get("/contact", (req, res) => {
  res.render("contact", { title: "Nous contacter" });
});

module.exports = router;
