const express = require("express");
const bodyParser = require("body-parser");
const { GPT4 } = require("./index.js");

const app = express();
app.use(bodyParser.json());

app.post("/gpt4", async (req, res) => {
  const message = req.body;
  try {
    const response = await GPT4(message);
    res.status(200).json({ response });
  } catch (e) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});