const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc'); 
const app = express();
const port = 3001; 

const db = require('./db/baza');
const automobiliRoutes = require('./routes/automobili');
app.use(express.json());
app.use(cors());
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentation for API',
    },
  },
  apis: ['./routes/*.js'], 
};

const specs = swaggerJsdoc(options);

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api/automobili', automobiliRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = specs;
