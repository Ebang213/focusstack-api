const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let products = [
  {
    id: 1,
    name: "Noise-Canceling Headphones",
    description: "Block out distractions and improve focus.",
    url: "https://amzn.to/3example",
    image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg"
  },
  {
    id: 2,
    name: "Time Timer MOD",
    description: "A visual timer that helps with time blindness.",
    url: "https://amzn.to/3example2",
    image: "https://m.media-amazon.com/images/I/61eZfGqKTVL._AC_SL1500_.jpg"
  },
  {
    id: 3,
    name: "Notion Productivity Template",
    description: "Organize your tasks, goals, and routines in one neurodivergent-friendly dashboard.",
    url: "https://gumroad.com/l/focusstacktemplate",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    name: "Fidget Cube",
    description: "Helps stay focused during meetings or deep work.",
    url: "https://amzn.to/3example4",
    image: "https://m.media-amazon.com/images/I/61S8V4T9exL._AC_SL1500_.jpg"
  }
];

// Routes
app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const newProduct = { id: Date.now(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
