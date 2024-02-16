# Real Estate Application

This is a modern real estate marketplace application built with React.js for the frontend and Express.js/Node.js for the backend. It provides users with the ability to buy, sell, or rent properties.

## Project Overview

### Objective:
Build a comprehensive real estate platform with the following features:
- User registration and authentication with JWT tokens
- CRUD operations for property listings
- User interactions including messaging between users
- Responsive and user-friendly frontend design

### Target Audience:
Users interested in buying, selling, or renting properties.

## Features

- **Authentication:** Secure user registration and login using JWT tokens.
- **Listing Management:** Create, update, view, and delete property listings with detailed information.
- **User Interaction:** Contact landlords, send messages, and receive notifications for new interactions.
- **Frontend Rendering:** Responsive and intuitive UI design using React.js and Tailwind CSS.
- **Deployment & Hosting:** Deployed to a hosting service (e.g., Render) for accessibility to users over the internet.

## Technology Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Express.js, Node.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT tokens
- **State Management:** Redux Toolkit

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd real-estate-website`
3. Install dependencies:
   - Frontend: `cd frontend && npm install`
   - Backend: `npm install`
4. Configure environment variables:
   - Create a `.env` file in the `backend` directory and set up MongoDB connection URI, JWT secret, etc.
5. Start the development server:
   - Frontend: `cd client && npm start`
   - Backend: `npm start`
6. Access the application in your browser at `http://localhost:3000`.

## Deployment

The application can be deployed to a hosting service such as Render for production use. Follow the hosting provider's instructions for deployment.

## Contributors

- Omkar (@omkar930)
- Jane Smith (@Abhay-Riyal)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
