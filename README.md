# User Ranking System

This project is a user ranking system that allows users to claim random points, dynamically display rankings, and manage user data using a Node.js backend and a React.js frontend. The backend is connected to a MongoDB database to store user information and claim history.

## Project Structure

```
user-ranking-system
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── controllers
│   │   │   └── userController.js
│   │   ├── models
│   │   │   └── user.js
│   │   ├── routes
│   │   │   └── userRoutes.js
│   │   └── utils
│   │       └── ranking.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── App.js
│   │   ├── components
│   │   │   ├── RankingList.js
│   │   │   ├── ClaimPoints.js
│   │   │   └── UserManager.js
│   │   ├── pages
│   │   │   └── Home.js
│   │   └── utils
│   │       └── api.js
│   ├── package.json
│   └── README.md
└── README.md
```

## Backend Setup

1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your MongoDB connection in `app.js`.
4. Start the server:
   ```
   npm start
   ```

## Frontend Setup

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## Features

- Users can claim random points.
- Rankings are dynamically updated and displayed.
- User data is managed and stored in a MongoDB database.

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- React
- Axios

## License

This project is licensed under the MIT License.