const express = require("express");
const router = express.Router();
const posts = require("../data/posts");

//INDEX
router.get("/", (req, res) => {
  res.json(posts);
});

//SHOW
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find((p) => p.id === id);
  if (!post) {
    return res.status(404).json({ error: "Post non trovato" });
  }

  res.json(post);
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
