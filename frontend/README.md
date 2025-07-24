# User Ranking System Frontend

This is the frontend part of the User Ranking System project built with React.js. It allows users to claim random points and dynamically displays user rankings.

## Getting Started

To get started with the frontend, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd user-ranking-system/frontend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

   This will start the development server and open the application in your default web browser.

## Project Structure

- **src/**: Contains all the source code for the frontend application.
  - **components/**: Contains reusable components such as `RankingList`, `ClaimPoints`, and `UserManager`.
  - **pages/**: Contains the main pages of the application, including `Home`.
  - **utils/**: Contains utility functions for API calls.

## Features

- Users can claim random points.
- Dynamic display of user rankings.
- User management functionality.

## API Integration

The frontend communicates with the backend API to fetch user data and handle point claims. Ensure that the backend server is running for the frontend to function correctly.

## License

This project is licensed under the MIT License.