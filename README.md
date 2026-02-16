Finvoke is a full-stack simulation platform where users can register, log in, manage virtual funds, buy stocks, and track orders and positions through a React-based dashboard interface.
The project is deployed as three separate apps using Render: backend API, authentication frontend, and trading dashboard.
This was built to learn JWT cookie auth, cross-origin session handling, REST API structuring, MongoDB modeling, Vite + React integration, and multi-deployment strategies.

Live Links:  

Backend: https://finvoke.onrender.com  
Frontend (Auth UI): https://finvoke-1.onrender.com  
Dashboard (Trading UI): https://finvoke-2.onrender.com 

Tech used: React, Vite, Tailwind CSS, Axios, React Router, Node.js, Express, MongoDB, Mongoose, JWT, cookie-parser, dotenv, Render.

Features include:  
- Secure cookie-based login system using JWT  
- Signup and login pages as a separate React app  
- A full dashboard for trading: buy stocks, track orders, manage funds  
- Public holdings and positions (same for all users)  
- Each order is user-specific, stored with user ID  
- Uses context to manage global user state and open modals  
- Buy action triggers both fund deduction and order placement  
- Cross-origin cookie support for login sessions  
- Three different deployed apps working in sync  

To run locally:

Clone repo:  
git clone https://github.com/Mandeep-codes/FInvoke.git  
cd FInvoke

Install dependencies:  
cd backend && npm install  
cd ../frontend && npm install  
cd ../dashboardfrontend && npm install

Set .env files:  
backend/.env → MONGO_URL and JWT_SECRET  
frontend/.env and dashboardfrontend/.env → VITE_API_BASE_URL=http://localhost:5000

Run all servers:  
cd backend && nodemon index.js  
cd ../frontend && npm run dev  
cd ../dashboardfrontend && npm run dev

What I learned from this:  
- Setting up JWT-based cookie authentication with httpOnly + SameSite=None  
- Solving CORS issues with frontend and dashboard on separate domains  
- Handling environment-based routing with Vite  
- Creating REST API structure and error handling  
- Designing a draggable order window in React  
- Using useContext for shared state like userId  
- How to connect multiple UIs to one shared backend  
- Dealing with deployment-specific bugs like integrity SRI errors and missing favicon routes  
- How to debug cookie issues when cookies don’t flow across origins  
- Render deployment configs for 3 apps with their own envs  
- Making user fallback logic (via URL param) when cookie is missing  

Folder structure:

backend → Express server with routes: /auth, /orders, /funds  
frontend → login/signup app  
dashboardfrontend → full trading dashboard

No license restrictions.
Built by Mandeep Nehra
