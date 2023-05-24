const express = require('express');
const Item = require('./Item.js'); // Import the Item model

const app = express();
const port = 3000; // Set the port number

// Define the routes

// GET route to retrieve all items
app.get('/items', async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    console.error('Error retrieving items:', error);
    res.status(500).json({ error: 'Error retrieving items' });
  }
});

// GET route to retrieve a single item
app.get('/items/:itemId', async (req, res) => {
  const itemId = req.params.itemId;

  try {
    const item = await Item.findByPk(itemId);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    console.error('Error retrieving item:', error);
    res.status(500).json({ error: 'Error retrieving item' });
  }
});

// POST route to add a new item
app.post('/items', async (req, res) => {
  const { name, description, price, category, image } = req.body;

  try {
    const newItem = await Item.create({ name, description, price, category, image });
    res.json(newItem);
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).json({ error: 'Error creating item' });
  }
});

// DELETE route to remove an item
app.delete('/items/:itemId', async (req, res) => {
  const itemId = req.params.itemId;

  try {
    const item = await Item.findByPk(itemId);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    await item.destroy();
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ error: 'Error deleting item' });
  }
});

// PUT route to update an item
app.put('/items/:itemId', async (req, res) => {
  const itemId = req.params.itemId;
  const { name, description, price, category, image } = req.body;

  try {
    const item = await Item.findByPk(itemId);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    await item.update({ name, description, price, category, image });
    res.json(item);
  } catch (error) {
    console.error('Error updating item:', error);
    res.status(500).json({ error: 'Error updating item' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
