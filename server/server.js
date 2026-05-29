import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Orufy API Running");
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});