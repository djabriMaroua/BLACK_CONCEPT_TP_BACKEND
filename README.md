# Product API Backend

This is a Node.js and Express-based backend API for managing a list of products. No database is used; all data is stored in variables within the server.

## Features

- **GET** `/api/product/list` - Returns a list of products.
- **GET** `/api/product/:id` - Returns the details of a specific product by ID.
- **POST** `/api/product/add` - Adds a new product.
- **PUT** `/api/product/edit` - Updates a product's details using the product ID.
- **DELETE** `/api/product/delete/:id` - Deletes a product by ID.
- Handles 404 errors for non-existing routes, returning a 404 HTTP status.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
