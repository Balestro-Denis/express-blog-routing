const express = require("express");
const app = express();

const postRouter = require("./routers/posts");
const port = 3000;

app.use("/posts", postRouter);

app.get("/", (req, res) => {
  res.send("Server attivo");
});

app.listen(port, () => {
  console.log(`Server attivo su http://localhost:${port}`);
});
