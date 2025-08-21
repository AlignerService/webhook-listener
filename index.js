const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Webhook endpoint
app.post("/webhook", (req, res) => {
  console.log("📩 Incoming webhook:", req.body);

  // For now, just return OK
  res.status(200).send({ success: true, received: req.body });
});

// Health check
app.get("/", (req, res) => {
  res.send("✅ Webhook listener is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
