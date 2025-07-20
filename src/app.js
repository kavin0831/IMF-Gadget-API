require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('IMF Gadget API is running 🚀');
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

const gadgetRoutes = require('./routes/gadgetRoutes');
app.use('/gadgets', gadgetRoutes);

module.exports = app;
