IMF Gadget API
Secure API for managing IMF's mission gadgets, built with Node.js, Express, Prisma, and PostgreSQL.

Project Overview
The IMF Gadget API helps the Impossible Missions Force (IMF) securely manage and track their sophisticated gadgets for global missions. It includes features like gadget inventory, self-destruct simulations, and user authentication with JWT.

Tech Stack

Node.js with Express - Backend framework

PostgreSQL - Database

Prisma ORM - Database ORM

JWT Authentication - API Security

Swagger - API Documentation

Features

Gadget Endpoints

GET /gadgets : List all gadgets with random success probability

GET /gadgets?status=Available : Filter gadgets by status

POST /gadgets : Add a new gadget (with codename)

PATCH /gadgets/:id : Update gadget details

DELETE /gadgets/:id : Mark gadget as Decommissioned

POST /gadgets/:id/self-destruct : Trigger gadget self-destruct sequence

Auth Endpoints

POST /auth/register : Register a new user

POST /auth/login : Login and get JWT token

Authentication
All /gadgets routes are protected.
Use /auth/login to obtain a JWT token and pass it in the Authorization header:

Authorization: Bearer <token>

API Documentation
Swagger UI available at:
https://imf-gadget-api-ywda.onrender.com/docs

Setup & Run Locally
Prerequisites:

Node.js

PostgreSQL

Railway DB URL (or local Postgres)

Steps:

Clone the repository:
git clone https://github.com/kavin0831/IMF-Gadget-API.git

Navigate to the project directory:
cd IMF-Gadget-API

Install dependencies:
npm install

Generate Prisma client:
npx prisma generate

Run database migrations:
npx prisma migrate dev

Seed the database:
npx prisma db seed

Start the server:
node src/server.js

Deployed Link
https://imf-gadget-api-ywda.onrender.com

Author
Kavin Sasikumar
GitHub: https://github.com/kavin0831
