# Inventory Management Tool (Backend)

This is the backend server for an inventory management application, providing REST APIs to manage users and products. The server is built with Node.js, Express, and MongoDB.

## Features

- User registration and JWT-based authentication.
- Two user roles: `admin` and `user`.
- Admin-only privileges for adding and updating products.
- All authenticated users can view products.
- Paginated product fetching.

## Prerequisites

- Node.js (v14 or higher)
- npm
- MongoDB
- Docker

## Setup Instructions

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/adityaranjan06/inventory-management.git
    cd inventory-management/backend
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Create an environment file:**
    Create a file named `.env` in the root of the `backend` directory.

4.  **Add environment variables:**
    Open the `.env` file and add the following variables. Replace the placeholder with your MongoDB connection string.
    ```
    PORT=8080
    MONGODB_URI=your_mongodb_connection_string_goes_here
    JWT_SECRET=thisisasecretkey
    ```

## How to Run the Server

### Running with Node.js
To start the server directly with Node.js, run the following command from the `backend` directory:
```sh
npm start
The server will be running on http://localhost:8080.

Running with Docker
You can also run the application inside a Docker container.

Build the Docker image:

Bash

docker build -t inventory-backend .
Run the Docker container:

Bash

docker run -p 8080:8080 inventory-backend
The server will be running on http://localhost:8080.

A default admin user is created automatically on first run with username admin and password adminpassword.

API Endpoints
A full OpenAPI specification is available in the openapi.yaml file.