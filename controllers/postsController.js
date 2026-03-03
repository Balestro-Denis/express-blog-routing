// INDEX
function index(req, res) {
  res.json(posts);
}

// SHOW
function show(req, res) {
  res.send("Show post");
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
