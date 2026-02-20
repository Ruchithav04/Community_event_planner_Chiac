🎉 Community Event Planner

An end-to-end community event management platform that allows users to create, manage, and participate in events seamlessly. The platform provides role-based access, structured event handling, and secure backend integration using modern web technologies.

🚀 Overview

The Community Event Planner is a full-stack web application built to simplify event organization within communities.

It enables:

Event creation and management

User authentication & participation tracking

Secure backend with database integration

Scalable deployment-ready architecture

The project follows a separate frontend and backend architecture, ensuring maintainability and scalability.

✨ Features
👤 User Management

Secure user registration and login

Role-based access control

Personalized dashboard experience

📅 Event Creation & Management

Create and manage community events

Store structured event data

Organized event listing system

🗂 Database Integration

Structured relational database design

Managed using Prisma

Hosted using Aiven

Powered by PostgreSQL

🔐 Backend API

RESTful APIs built with Node.js

Database connection verification

Table initialization script included

💻 Responsive Frontend

Built with Next.js

Uses React

Fully responsive UI

Clean and user-friendly design

🛠️ Tech Stack
Technology	Purpose
Next.js	Frontend framework
React	UI library
Node.js	Backend runtime
Prisma	ORM for database management
PostgreSQL	Relational database
Aiven	Cloud-hosted PostgreSQL
Tailwind CSS	Styling
Vercel (Optional)	Deployment
📦 Project Structure
Community_event_planner_Chiac/
│
├── backend/
│   ├── server.js
│   ├── init-db.js
│   └── prisma/
│
└── frontend/
    └── (Next.js application)
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/Anitapatel12/Community_event_planner_Chiac.git
cd Community_event_planner_Chiac
🔧 Backend Setup

Navigate to backend folder:

cd backend
Install dependencies:
npm install
Create .env file inside backend folder:
DATABASE_URL=your_postgresql_connection_string
PORT=5432
FRONTEND_URL=http://localhost:3000

🔹 DATABASE_URL should be your Aiven PostgreSQL connection string.

Step 1: Test DB Connection
node server.js

If successful, you should see:

PostgreSQL connected successfully

Stop the server after confirmation.

Step 2: Initialize Database Tables
node init-db.js

This will create the required tables using Prisma.

Step 3: Start Backend Server
node server.js
💻 Frontend Setup

Navigate to frontend folder:

cd frontend
Install dependencies:
npm install
Run development server:
npm run dev

Frontend will run on:

http://localhost:3000
🔐 Environment Variables
Backend .env
DATABASE_URL=
PORT=5432
FRONTEND_URL=http://localhost:3000

Make sure:

PostgreSQL is properly configured in Aiven

Prisma is synced with your schema

Backend runs before frontend API calls

📊 Database Management

Database schema handled using Prisma

Hosted on Aiven cloud PostgreSQL

Tables initialized using init-db.js

Backend verifies database connection before starting

