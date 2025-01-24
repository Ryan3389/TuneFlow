// Import Mongoose + dotenv
const mongoose = require('mongoose');
require('dotenv').config();


// Connect to Database
mongoose.connect(process.env.DB_URL);

// Export Connection
module.exports = mongoose.connection;