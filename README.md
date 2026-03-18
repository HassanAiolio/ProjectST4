# Movie Recommendation Application

Welcome to the Movie Recommendation Application! This application provides recommendations for movies based on user preferences.
## Setup

### 1. Clone the repo
```bash
git clone https://github.com/HassanAiolio/ProjectST4
cd ProjectST4
```

### 2. Install dependencies
```bash
cd frontend && npm install
cd ../backend && npm install
```

### 3. Configure environment variables

In `backend/`, create a `.env` file file based on `.env.example`.

In `frontend/`, create a `.env` file based on `.env.example`.

### 4. Seed the database
```bash
cd backend
node -r dotenv/config seedMovies.js
```
This fetches movies and populates the database. Wait for it to complete before running the app.

### 5. Install NLP language package
```bash
cd backend
npm install @nlpjs/lang-en
```

## Running the App

In one terminal:
```bash
cd backend && npm run dev
```

In another terminal:
```bash
cd frontend && npm run dev
```

Then open http://localhost:3000

## Usage

Once the application is running, you can use it to discover and receive recommendations for movies based on your preferences. Explore the various features and functionalities to find the movies you love!

## Credits

This project was developed by students from CentraleSupélec during the EI week.
