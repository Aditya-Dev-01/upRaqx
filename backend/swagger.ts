import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDocs = {
  openapi: '3.0.0',
  info: {
    title: 'Movie API',
    version: '1.0.0',
    description: 'API documentation for the Movie application',
    contact: {
      name: 'Developer',
    },
  },
  servers: [
    {
      url: 'http://localhost:8080',
    },
  ],
  paths: {
    '/api/movies': {
      post: {
        summary: 'Create a new movie',
        tags: ['Movies'],
        requestBody: {
          required: true,
          content: {
            'multipart/form-data': {
              schema: {
                type: 'object',
                properties: {
                  title: { type: 'string' },
                  year: { type: 'string' }, 
                  poster: {
                    type: 'string',
                    format: 'binary',
                  },
                },
                required: ['title', 'year', 'poster'], 
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Movie created successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    id: { type: 'string' },
                    title: { type: 'string' },
                    year: { type: 'string' },
                    poster: { type: 'string' },
                    createdAt: { type: 'string', format: 'date-time' },
                    updatedAt: { type: 'string', format: 'date-time' },
                  },
                },
              },
            },
          },
          400: {
            description: 'Invalid input',
          },
        },
      },
      get: {
        summary: 'Get all movies',
        tags: ['Movies'],
        responses: {
          200: {
            description: 'A list of movies',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      id: { type: 'string' },
                      title: { type: 'string' },
                      year: { type: 'string' },
                      poster: { type: 'string' },
                      createdAt: { type: 'string', format: 'date-time' },
                      updatedAt: { type: 'string', format: 'date-time' },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/api/movies/{id}': {
      get: {
        summary: 'Get a movie by ID',
        tags: ['Movies'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        ],
        responses: {
          200: {
            description: 'A single movie',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    id: { type: 'string' },
                    title: { type: 'string' },
                    year: { type: 'string' },
                    poster: { type: 'string' },
                    createdAt: { type: 'string', format: 'date-time' },
                    updatedAt: { type: 'string', format: 'date-time' },
                  },
                },
              },
            },
          },
          404: {
            description: 'Movie not found',
          },
        },
      },
      put: {
        summary: 'Update a movie by ID',
        tags: ['Movies'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  title: { type: 'string' },
                  year: { type: 'string' }, 
                },
                required: ['title', 'year'], 
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Movie updated successfully',
          },
          404: {
            description: 'Movie not found',
          },
        },
      },
      delete: {
        summary: 'Delete a movie by ID',
        tags: ['Movies'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        ],
        responses: {
          200: {
            description: 'Movie deleted successfully',
          },
          404: {
            description: 'Movie not found',
          },
        },
      },
    },
  },
};

export default swaggerDocs;
