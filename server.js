const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// CONNECT TO RDS
const db = mysql.createConnection({
  host: 'expense-db.cg5uywwywihm.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'admin123',
  database: 'expenses_db',
  port: 3306
});

// TEST CONNECTION
db.connect(err => {
  if (err) {
    console.log('Database error:', err);
  } else {
    console.log('Connected to RDS!');
  }
});

// ADD EXPENSE
app.post('/add-expense', (req, res) => {
  const { amount, category } = req.body;

  const sql = 'INSERT INTO expenses (amount, category) VALUES (?, ?)';

  db.query(sql, [amount, category], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send('Expense added!');
    }
  });
});

// GET EXPENSES
app.get('/expenses', (req, res) => {
  db.query('SELECT * FROM expenses', (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

// START SERVER
app.listen(3000, () => {
  console.log('Server running on port 3000');
});