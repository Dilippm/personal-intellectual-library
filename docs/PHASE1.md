# Phase 1 — Foundation Setup (Week 1–2)

## AI-Powered Personal Intellectual Library

---

# Goal of Phase 1

Build the basic foundation of the application.

By the end of this phase, you should have:

* Project structure ready
* Backend server running
* Database connected
* Authentication working
* Book CRUD APIs working
* Frontend connected to backend
* Basic UI for adding and viewing books
* Deployment setup started

This phase is mainly about building a strong base.

---

# Recommended Tech Stack

## Frontend

* react-vite
* material-ui or anyother easier
* 

## Backend

* Node.js
* Express.js

## Database

* PostgreSQL

## ORM

* Prisma

## Authentication

* Clerk OR Auth.js

## Deployment

* Vercel (frontend)
* Railway / Render / EC2 (backend)

## AI (Later Phases)

* OpenAI APIs
* Vector DB
* RAG pipeline

---

# Architecture Overview

```text
Frontend (Next.js)
       ↓
Backend API (Express)
       ↓
PostgreSQL Database
```

Later:

```text
Books → Embeddings → Vector DB → AI Recommendations/RAG
```

---

# Folder Structure

## Frontend

```bash
frontend/
 ├── app/
 ├── components/
 ├── lib/
 ├── services/
 ├── styles/
 └── utils/
```

## Backend

```bash
backend/
 ├── src/
 │   ├── controllers/
 │   ├── routes/
 │   ├── middleware/
 │   ├── services/
 │   ├── prisma/
 │   └── server.js
 └── package.json
```

---

# Phase 1 Features

## 1. User Authentication

Users can:

* Sign up
* Login
* Logout
* Access personal library

### Suggested Libraries

Frontend:

* Clerk
  OR
* NextAuth/Auth.js

Backend:

* JWT authentication

---

# 2. Book Management System

Users can:

* Add books
* Edit books
* Delete books
* View library
* Search books

## Book Fields

```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "genre": "Self Help",
  "status": "Reading",
  "rating": 5,
  "notes": "Excellent habit framework"
}
```

---

# 3. Database Design

## User Table

```sql
User
- id
- name
- email
- password
- createdAt
```

## Books Table

```sql
Book
- id
- title
- author
- genre
- status
- rating
- notes
- userId
- createdAt
```

---

# 4. Backend APIs

## Authentication APIs

```bash
POST /auth/register
POST /auth/login
GET  /auth/me
```

## Book APIs

```bash
GET    /books
POST   /books
PUT    /books/:id
DELETE /books/:id
GET    /books/:id
```

---

# 5. Frontend Pages

## Public Pages

* Landing page
* Login page
* Signup page

## Protected Pages

* Dashboard
* My Library
* Add Book
* Book Details

---

# 6. UI Components

Create reusable components:

* Navbar
* Sidebar
* Book Card
* Search Bar
* Add Book Modal
* Rating Component

---

# Daily Plan

# Day 1 — Project Initialization

## Tasks

### Frontend

```bash
npx create-next-app@latest frontend
```

Install:

```bash
npm install tailwindcss shadcn-ui axios
```

### Backend

```bash
mkdir backend
npm init -y
```

Install:

```bash
npm install express cors dotenv prisma @prisma/client bcrypt jsonwebtoken
```

Dev dependencies:

```bash
npm install -D nodemon
```

---

# Day 2 — Database Setup

## Tasks

* Install PostgreSQL
* Create database
* Setup Prisma
* Create User model
* Create Book model
* Run migrations

## Commands

```bash
npx prisma init
npx prisma migrate dev
```

---

# Day 3 — Authentication

## Tasks

* Register API
* Login API
* JWT token generation
* Password hashing
* Protected routes

---

# Day 4 — Book CRUD APIs

## Tasks

* Create book API
* Get books API
* Update book API
* Delete book API

Test using:

* Postman
  OR
* Thunder Client

---

# Day 5 — Frontend Pages

## Tasks

Build:

* Login page
* Signup page
* Dashboard
* Library page

---

# Day 6 — Frontend + Backend Integration

## Tasks

* Connect APIs
* Add authentication flow
* Display books dynamically
* Add forms

---

# Day 7 — Polish + Deployment

## Tasks

* Error handling
* Toast notifications
* Loading states
* Responsive design
* Deploy frontend
* Deploy backend

---

# Minimum Viable Product (MVP)

At the end of Phase 1:

Users should be able to:

✅ Create account
✅ Login
✅ Add books
✅ View books
✅ Edit books
✅ Delete books
✅ Search books

This is your FIRST working product.

---

# Important Engineering Practices

## Use Git Properly

```bash
git init
git add .
git commit -m "initial setup"
```

Commit after every major feature.

---

# Environment Variables

## Backend

```env
DATABASE_URL=
JWT_SECRET=
PORT=5000
```

## Frontend

```env
NEXT_PUBLIC_API_URL=
```

---

# Recommended Learning While Building

Learn these deeply during Phase 1:

* REST APIs
* JWT Authentication
* Database relations
* React state management
* API integration
* Prisma ORM
* Error handling
* Project structure

---

# Common Mistakes to Avoid

❌ Building AI features too early
❌ Skipping authentication
❌ Poor folder structure
❌ Hardcoding secrets
❌ Not using Git commits
❌ Not testing APIs

---

# Deliverables of Phase 1

By completion, you should have:

* GitHub repository
* Working frontend
* Working backend
* PostgreSQL database
* Authentication system
* CRUD functionality
* Basic deployed app

---

# What Comes in Phase 2

After this foundation:

* OCR book scanning
* Upload shelf image
* AI book recommendations
* Semantic search
* Quote extraction
* Reading analytics
* RAG system
* AI librarian assistant

---

# Final Advice

Do NOT rush.

Your biggest advantage is:

* Consistency
* Shipping features
* Learning deeply
* Building real systems

Treat this like a startup product from Day 1.
