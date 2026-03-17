🌿 AgriLink — Smart Agri Supply Chain Platform

AgriLink is a full-stack marketplace that directly connects farmers, buyers, agents, and transporters, eliminating middlemen inefficiencies and enabling transparent, data-driven agricultural trade.

This isn’t just CRUD + dashboard. It’s a multi-role, logistics-aware system with clustering intelligence, real-time pricing, and delivery orchestration.

🚀 Core Value Proposition

Farmers don’t sell blindly → cluster-based aggregation increases bargaining power

Buyers don’t guess supply → structured marketplace with verified inventory

Logistics isn’t chaotic → transport jobs + shipment tracking

Decisions aren’t random → mandi prices + weather intelligence

🧠 Key Features
🔗 Smart Crop Clustering Engine

Groups farmers based on:

Geo proximity (≤ 20km)

Harvest window (±3 days)

Creates bulk supply clusters → improves pricing power

🛒 Marketplace System

Buyers can:

Browse clusters

View aggregated supply

Place bulk orders

🚚 Logistics + Transport Layer

Auto-generated transport jobs

Transporters accept jobs based on:

Distance

Capacity

Real-time shipment tracking

💰 Escrow-Based Order Flow

Payment lifecycle:

pending → escrow → released/refunded
📊 Mandi Price Intelligence

Tracks last 30 days of crop prices

Shows trends and comparisons

Enables price alerts

🌦 Weather Risk Engine

Forecast-based risk scoring:

High (heavy rainfall)

Medium (extreme heat)

Low

🔔 Notification System

SMS alerts via Twilio:

Order confirmation

Pickup reminders

Delivery updates

Price alerts

🏗 Tech Stack
Frontend

React (Vite)

TailwindCSS

ShadCN UI

Zustand (state management)

React Query

React Router v6

Backend

Node.js + Express

MongoDB + Mongoose

Zod (validation)

JWT Authentication

Redis (caching + queues)

Bull (job processing)

Node-cron (schedulers)

External Services

OpenWeather API

Twilio SMS

Agmarknet (Mandi prices / fallback mock)

📁 Project Structure
agrilink/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── main.jsx
│
└── backend/
    ├── config/
    ├── models/
    ├── controllers/
    ├── routes/
    ├── services/
    ├── middleware/
    ├── utils/
    └── server.js
🔐 User Roles
Role	Capabilities
Farmer	List crops, join clusters, track orders
Agent	Manage farmers, list crops on their behalf
Buyer	Browse marketplace, place orders
Transporter	Accept delivery jobs, update shipment status
Admin	Approvals, analytics, dispute resolution
⚙️ Environment Variables
Backend (.env)
PORT=5000
MONGO_URI=
JWT_SECRET=
JWT_EXPIRES_IN=7d
NODE_ENV=development

OPENWEATHER_API_KEY=

TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=

REDIS_URL=
CORS_ORIGIN=http://localhost:5173
Frontend (.env)
VITE_API_URL=http://localhost:5000
🛠 Installation & Setup
1. Clone Repository
git clone <your-repo-url>
cd agrilink
2. Backend Setup
cd backend
npm install
npm run dev
3. Frontend Setup
cd frontend
npm install
npm run dev
🔄 Full System Flow
Farmer → Adds Crop
        ↓
Cluster Engine → Groups crops
        ↓
Marketplace → Buyer places order
        ↓
Order → Shipment → Transport Job
        ↓
Transporter → Accepts → Delivers
        ↓
Escrow → Released
🧪 Testing (Seed Data)

Run:

node seeds/seedData.js

Creates:

Admin

Agents

Farmers

Crops

Clusters

Buyers

Orders

Transport jobs

📡 API Overview
Auth
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/profile
PUT    /api/auth/profile
Crops
POST   /api/crops
GET    /api/crops
GET    /api/crops/:id
PUT    /api/crops/:id
DELETE /api/crops/:id
Clusters
GET    /api/clusters
GET    /api/clusters/:id
Orders
POST   /api/orders
GET    /api/orders
PATCH  /api/orders/:id/status
Transport Jobs
GET    /api/transport-jobs
POST   /api/transport-jobs/:id/accept
⚠️ Reality Check (What Most People Miss)

Let’s be blunt — your architecture is strong, but execution risk is high:

1. Cluster Logic is NOT trivial

Haversine + time window grouping = performance bottleneck

Needs optimization (batch jobs, indexing, maybe geospatial aggregation)

2. Multi-role auth will break if sloppy

Role-based access MUST be airtight

One weak middleware = full system compromise

3. State management complexity

Zustand + React Query misuse → inconsistent UI

You must clearly separate:

server state (React Query)

client state (Zustand)

4. Logistics flow is fragile

Order → Shipment → TransportJob must stay in sync

Missing one update = corrupted system state

5. External APIs WILL fail

You must:

cache aggressively (Redis)

fallback to mock data

never block UI

🚀 Deployment

Backend → Render

Frontend → Vercel

Database → MongoDB Atlas

✅ Final Checklist

 All roles can login and access correct dashboards

 Crop → Cluster → Order → Delivery flow works

 No console errors

 API errors handled properly

 Responsive UI across devices

 Dark mode working

 Lighthouse score acceptable

🧭 What This Project Actually Demonstrates

If built correctly, this is not a “student project”.

It proves:

System design thinking

Multi-actor architecture handling

Real-world logistics modeling

Scalable backend structuring

Production-grade frontend discipline

If built poorly, it becomes:

another CRUD app with 5 dashboards and broken flows.

📌 Final Note

This project is only impressive if the flows are airtight.

Not UI. Not features.
Flow correctness = credibility.
