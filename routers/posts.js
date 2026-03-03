const express = require("express");
const router = express.Router();
const posts = require("../data/posts");
const postsController = require("../controllers/postsController");

// router.get("/", (req, res) => {
//   res.json(posts);
// });

// router.get("/:id", (req, res) => {
//   const id = parseInt(req.params.id);

//   const post = posts.find((p) => p.id === id);
//   if (!post) {
//     return res.status(404).json({ error: "Post non trovato" });
//   }

//   res.json(post);
// });

// router.post("/", (req, res) => {
//   res.send("Creazione nuovo post");
// });

// router.put("/:id", (req, res) => {
//   res.send("Modifica del post" + req.params.id);
// });

// router.delete("/:id", (req, res) => {
//   res.send("Cancellazione del post" + req.params.id);
// });

// module.exports = router;

router.get("/", postsController.index);
router.get("/:id", postsController.show);
router.post("/", postsController.store);
router.put("/:id", postsController.update);
router.delete("/:id", postsController.destroy);

module.exports = router;
