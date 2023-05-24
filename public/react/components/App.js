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

// Handle form submission
const itemForm = document.getElementById('item-form');
itemForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Retrieve form values
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const price = parseFloat(document.getElementById('price').value);
  const category = document.getElementById('category').value;
  const image = document.getElementById('image').value;

  try {
    // Create a new item using Sequelize
    const newItem = await Item.create({
      name,
      description,
      price,
      category,
      image,
    });

    console.log('New item created:', newItem);

    // Reset the form
    itemForm.reset();
  } catch (error) {
    console.error('Error creating item:', error);
  }
});
