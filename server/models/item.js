const { Sequelize, DataTypes } = window.Sequelize;

const sequelize = new Sequelize('database', 'name', 'description', 'price', 'category', 'image', {
  host: 'localhost',
  dialect: 'mysql',
 
});


const Item = sequelize.define('Item', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Create a new item
const newItem = await Item.create({
  name: 'Sample Item',
  description: 'This is a sample item',
  price: 10.99,
  category: 'Sample Category',
  image: 'sample.jpg',
});

// Retrieve all items
const allItems = await Item.findAll();

// Example: Updating an item
const itemToUpdate = await Item.findByPk(itemId);
if (itemToUpdate) {
  itemToUpdate.name = 'Updated Item Name';
  await itemToUpdate.save();
}

// Deleting an item
const itemToDelete = await Item.findByPk(itemId);
if (itemToDelete) {
  await itemToDelete.destroy();
}
