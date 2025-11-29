
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;


const pool = new Pool({
  host: '127.0.0.1',
  port: 5432,
  user: 'postgres',
  password: 'Tarneet@123', 
  database: 'emergency_waitlist',
});

// GET /patients – return all rows from PATIENTS table
app.get('/patients', async (req, res) => {
  let client;

  try {
    client = await pool.connect();
    const result = await client.query('SELECT * FROM patients');
    res.json(result.rows);
  } catch (err) {
    console.error('Database error:', err.stack);
    res.status(500).send('Server error');
  } finally {
    if (client) {
      client.release();
    }
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/patients`);
});
