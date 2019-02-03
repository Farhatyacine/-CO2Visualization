const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/carbon", (req, res) => {
  const number = Math.random() * (5000 - 350) + 350;
  res.send({ number });
  console.log(number);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
