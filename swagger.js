const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0', 
    info: {
      title: 'IMF Gadget API',
      version: '1.0.0',
      description: 'API documentation for IMF Gadget Management',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local Server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/*.js'],  
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
module.exports = swaggerSpec;
