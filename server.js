require('dotenv').config();

const express = require('express');
const { createPool } = require('mysql2/promise');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const pool = createPool({
  database: 'trabook_db',
  user: '4l0hol0292e9jss8lj1i',
  host: 'aws.connect.psdb.cloud',
  password: 'pscale_pw_fYHKE5yQWsM1cqaFjAIcJf9Zbor50KKVYh2ZVk1IHJ5',
  ssl: { rejectUnauthorized: false }
});


app.get('/', async (req, res) => {
  try {
    const consulta = 'SELECT * FROM cards';
    const [resultados] = await pool.query(consulta);
    res.json(resultados);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/bestvacation', async (req, res) => {
  try {
    const consulta = 'SELECT * FROM cards_bestvacation';
    const [resultados] = await pool.query(consulta);
    res.json(resultados);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/blog', async (req, res) => {
  try {
    const consulta = 'SELECT * FROM cards_blog';
    const [resultados] = await pool.query(consulta);
    res.json(resultados);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log('Ejecutado en el puerto ', port);
});
