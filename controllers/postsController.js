const posts = require("../data/posts");

// INDEX
function index(req, res) {
  res.json(posts);
}

// SHOW
function show(req, res) {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);
  res.json(posts);
}

// CREATE
function store(req, res) {
  res.send("Creazione nuovo post");
}

// UPDATE
function update(req, res) {
  res.send("Modifica post");
}

// DELETE
function destroy(req, res) {
  res.send("Eliminazione post");
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
