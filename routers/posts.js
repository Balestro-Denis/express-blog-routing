const express = require("express");
const router = express.Router();

//INDEX
router.get("/", (req, res) => {
  res.send("Lista dei post");
});

//SHOW
router.get("/:id", (req, res) => {
  res.send("Dettaglio del post" + req.params.id);
});

//CREATE
router.post("/", (req, res) => {
  res.send("Creazione nuovo post");
});

//UPDATE
router.put("/:id", (req, res) => {
  res.send("Modifica del post" + req.params.id);
});

//DELETE
router.delete("/:id", (req, res) => {
  res.send("Cancellazione del post" + req.params.id);
});

module.exports = router;
