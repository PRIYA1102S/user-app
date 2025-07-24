# User Ranking System Backend

## Overview
This backend application is part of the User Ranking System project. It provides an API for managing users, allowing them to claim random points and dynamically updating their rankings.

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose

## Setup Instructions

### Prerequisites
- Node.js installed on your machine
- MongoDB database (local or cloud)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd user-ranking-system/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Configuration
- Create a `.env` file in the backend directory to store your MongoDB connection string:
  ```
  MONGODB_URI=<your-mongodb-connection-string>
  ```

### Running the Application
To start the backend server, run:
```
npm start
```
The server will run on `http://localhost:5000` by default.

## API Endpoints
- `GET /api/users`: Fetches the list of users.
- `POST /api/users/claim`: Awards random points to a selected user.

## Folder Structure
- `src/app.js`: Entry point of the application.
- `src/controllers/userController.js`: Contains user-related logic.
- `src/models/user.js`: Defines the User model.
- `src/routes/userRoutes.js`: Sets up API routes.
- `src/utils/ranking.js`: Contains ranking and logging utilities.

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.