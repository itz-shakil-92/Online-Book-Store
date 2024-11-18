# Online Book Store - MERN Stack Project

This is a full-stack **Online Book Store** application built using the **MERN stack** (MongoDB, Express, React, Node.js). It allows users to browse, register, log in, and log out. The application also implements password encryption and decryption using the `bcryptjs` library. The backend is deployed on **Render** and the frontend on **Netlify**.

## Features

- User authentication (Sign Up, Log In, Log Out)
- Password encryption and decryption using `bcryptjs`
- Frontend deployed on **Netlify**
- Backend deployed on **Render**
- MongoDB Atlas for the database

## Tech Stack

- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Password Encryption**: bcryptjs
- **Deployment**: Render (Backend), Netlify (Frontend)

## Directory Structure

The project is divided into two main directories:

- **Frontend**: Contains all the client-side React application code.
- **Backend**: Contains the server-side Node.js and Express application code.

### Frontend

This directory contains all the React components, styles, and API calls required to render the client-side of the application.

1. **App.js** - The main component that manages the routing.
2. **Login.js** - The login page for user authentication.
3. **Signup.js** - The signup page for new users.
4. **Home.js** - The home page displaying the books.

To run the frontend locally:
Make a empty repository:
```bash
git init
```

Clone the repository:

```bash

git clone https://github.com/itz-shakil-92/Online-Book-Store.git
```

for frontend : -
```bash
cd Frontend
npm install
npm run dev
```

for backend : -
```bash
cd Backend
npm start
```


### Notes:

- Replace `"your-netlify-app-link"` and `"your-render-api-link"` with your actual deployed URLs for frontend and backend.
- Ensure your MongoDB Atlas connection string and JWT secret are correctly set in the `.env` file for the backend.
- The README includes steps to clone, set up, and run the project locally along with the required environment configurations.

This README should provide all the necessary information for users to set up, run, and deploy your **Online Book Store MERN project**.
