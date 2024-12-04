const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Enable CORS to allow the frontend to communicate with the backend
app.use(cors());

// Sample in-memory database of items
let items = [
  { id: 1, name: 'Apple', description: 'A red fruit' },
  { id: 2, name: 'Banana', description: 'A yellow fruit' },
  { id: 3, name: 'Carrot', description: 'An orange vegetable' },
  { id: 4, name: 'Grape', description: 'A small purple fruit' },
  { id: 5, name: 'Lemon', description: 'A sour yellow fruit' }
];

// API endpoint to get all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
