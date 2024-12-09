### Author: Ali Rajabi

## Overview

This project provides a RESTful API for managing users and their associated companies. It demonstrates how to:
- Define and use Mongoose schemas for Users and Companies.
- Establish one-to-many relationships between Users and Companies.
- Create CRUD operations for Users.
- Integrate Swagger for API documentation (available at: [http://localhost:3000/api](http://localhost:3000/api))

## Features

- **User Management:**  
  - Create new users with `POST /user/create`.
  - Retrieve user details (including associated companies) with `GET /user/:userId`.
  
- **Company Management:**  
  - Associate multiple companies with a single user.
  - Retrieve a user's associated companies through virtual population.

## Getting Started

### Prerequisites

- **Node.js** (version 14 or later recommended)
- **npm** or **yarn**
- **MongoDB** (running locally or remotely accessible)

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:aliraj313/Nestjs-simple-project.git

### Running the Project


1. **Clone the repository:**
   ```bash
   npm run start:dev
### Set up environment variables
 Create an .env file in the project root with the required variables:

**env example:**
 ```bash
MONGO_CONNECTION_LINK=mongodb://admin:password@localhost:27018