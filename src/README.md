# TS-NODE-MONGO-API

A scalable, type-safe RESTful API built using **Node.js**, **TypeScript**, **Express.js**, and **MongoDB**.  
This API fetches and stores data from JSONPlaceholder, supports user and post management, and follows best practices with modular architecture and environment configuration.

---

## Dependencies

- express
- mongoose
- dotenv
- cors
- body-parser

### Development Dependencies

- typescript
- ts-node-dev
- @types/express
- @types/node
- @types/cors
- @types/body-parser

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ts-node-mongo-api.git
cd ts-node-mongo-api


## Set environment variables

Create a .env file in the root directory :

PORT=5000
MONGO_URI=mongodb://localhost:27017/db-name

Replace your-db-name with your MongoDB database name or your MongoDB Atlas connection string.


## Start the development server

npm run dev



## Project Structure

src/
├── config/             # Database connection (db.ts)
├── controllers/        # Business logic controllers
├── models/             # Mongoose schemas/models
├── routes/             # Express route handlers
├── utils/              # Helper functions
├── server.ts           # Application entry point
.env                    # Environment variables



## API Usage & Testing Instructions

1. Load Data from JSONPlaceholder
Fetch users, posts, and comments from JSONPlaceholder and store them in your MongoDB collections with appropriate relations.

Endpoint:
GET http://localhost:5000/load

Expected Result:
Status 200 OK with a message confirming data load success.


### Get user by ID :

GET http://localhost:5000/users/1


### Add a new user

POST http://localhost:5000/users


{
  "id": 11,
  "name": "Jaya Kumar",
  "email": "jayakumar@example.com",
  "posts": []
}


### Delete user by ID

DELETE http://localhost:5000/users/1


### Delete all users

DELETE http://localhost:5000/users


How to test:
Used Postman

