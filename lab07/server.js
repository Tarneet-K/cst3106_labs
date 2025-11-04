// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// API: roll 5 dice
app.get('/roll-dices', (_req, res) => {
  const values = Array.from({ length: 5 }, () => 1 + Math.floor(Math.random() * 6));
  res.json({ values });
});

// No wildcard route needed for this lab (avoids Express 5 path error)

app.listen(PORT, () => {
  console.log(`✅ Lab 07 server running at http://localhost:${PORT}`);
});
