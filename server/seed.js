const sequelize = require('./db'); // Assuming your database configuration is in "db.js"
const Item = require('./models/Item'); // Assuming you have a model for Item

// Define your seed data
const seedData = [
  { name: 'Item 1', description: 'Description 1', price: 10.99, category: 'Category 1', image: 'image1.jpg' },
  { name: 'Item 2', description: 'Description 2', price: 19.99, category: 'Category 2', image: 'image2.jpg' },
  // Add more items as needed
];

// Function to seed the data
const seedDatabase = async () => {
  try {
    // Sync the models with the database
    await sequelize.sync({ force: true }); // Use "force: true" to drop existing tables and recreate them

    // Create the items in the database
    await Item.bulkCreate(seedData);

    console.log('Database seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the database connection
    await sequelize.close();
  }
};

// Invoke the seed function
seedDatabase();
