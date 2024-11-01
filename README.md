# Pub-Sub Application

## Overview

The Pub-Sub Application is a full-stack project consisting of a backend service built with Nest.js, TypeScript, MongoDB, and a frontend built with React. This application facilitates a publish-subscribe messaging pattern to manage notifications for machines and their statuses. 

### Directories

- **pub-sub-app**: Contains the backend service code, including the API for managing machines and sending notifications.
- **pub-sub-frontend**: Contains the frontend code built with React, providing a user interface for machine management.
- **docker-compose**: Configuration for running MongoDB as a service.

## Features

### Backend Features

- **Machine Management**: 
  - Create, read, update (stock only), and delete machines.
  - Update stock using a PATCH request.

- **Notifications**:
  - Publish messages for machine events.
  - Subscribe to events and log to the console.

### Frontend Features

- **Machine Form**: 
  - A form for adding new machines, including name, stock fields.
  
- **Machine List**:
  - Displays a list of machines with options to update stock and delete machines.
  - Provides buttons to trigger stock updates and deletion.

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB
- Docker (for running MongoDB using Docker Compose)

### Backend Setup

1. Navigate to the `pub-sub-app` directory:

    ```bash
    cd pub-sub-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file based on `.env.example` to configure environment variables.

4. Start the backend service:

    ```bash
    npm run start
    ```

### Frontend Setup

1. Navigate to the `pub-sub-frontend` directory:

    ```bash
    cd pub-sub-frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the frontend application:

    ```bash
    npm start
    ```

### Running MongoDB with Docker Compose

1. Navigate to the `docker-compose` directory:

    ```bash
    cd docker-compose
    ```

2. Run the following command to start MongoDB:

    ```bash
    docker-compose up -d
    ```

## API Endpoints

- **POST** `/machines`: Create a new machine.
- **GET** `/machines`: Retrieve all machines.
- **PATCH** `/machines/:id/stock`: Update the stock of a specific machine.
- **DELETE** `/machines/:id`: Delete a specific machine.