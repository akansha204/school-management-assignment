// index.js
const express = require('express');
const dotenv = require('dotenv');
const schoolRoutes = require('./routes/schoolRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/', schoolRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
