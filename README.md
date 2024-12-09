
### **Author:** Ali Rajabi

## Overview

This project provides a RESTful API for managing users and their associated companies. It demonstrates how to:
- Define and use Mongoose schemas for Users and Companies.
- Establish one-to-many relationships between Users and Companies.
- Create CRUD operations for Users.
- Integrate Swagger for API documentation.
  
## Features

- **User Management:**  
  - Create new users with `POST /user/create`.
  - Retrieve user details (including associated companies) with `GET /user/:userId`.
  
- **Company Management:**  
  - Associate multiple companies with a single user.
  - Retrieve a user's associated companies by populating the `companies` virtual field.

## Getting Started

### Prerequisites

- **Node.js** (version 14 or later recommended)
- **npm** or **yarn**
- **MongoDB** (running locally or accessible via a connection URI)

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:aliraj313/Nestjs-simple-project.git
