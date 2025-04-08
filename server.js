const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', "ejs");
app.set("views engine", "ejs");

const userRouter = require("./routers/users");
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.redirect("/users");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
