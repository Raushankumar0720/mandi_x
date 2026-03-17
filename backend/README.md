# Mandi_X Backend

Mandi_X is a comprehensive agricultural marketplace platform that connects farmers directly with buyers, eliminating middlemen and ensuring fair prices for agricultural produce.

## Features

- **User Authentication**: Secure JWT-based authentication for farmers, buyers, agents, transporters, and admins
- **Role-Based Access Control**: Different dashboards and permissions for each user role
- **Marketplace**: Browse and purchase crops directly from farmers
- **Cluster Management**: Organize farmers into clusters for better coordination
- **Order Management**: Complete order lifecycle from placement to delivery
- **Weather Integration**: Real-time weather data for agricultural planning
- **Notification System**: SMS notifications via Twilio for order updates

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Atlas)
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Zod
- **SMS**: Twilio

## Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account
- Twilio account (for SMS notifications)
- OpenWeatherMap API key (for weather data)

## Installation

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Start production server
npm start
```

## Environment Variables

Create a `.env` file in the root directory:

```env
# Server
PORT=5000
NODE_ENV=development
# MongoDB
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mandi_x
# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=30d
# Twilio (for SMS)
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=+1234567890
# OpenWeatherMap
OPENWEATHER_API_KEY=your_openweather_api_key
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Users
- `GET /api/users` - Get all users (admin)
- `PUT /api/users/:id/approve` - Approve user (admin)

### Crops
- `GET /api/crops` - Get all crops
- `POST /api/crops` - Add new crop (farmer)
- `PUT /api/crops/:id` - Update crop
- `DELETE /api/crops/:id` - Delete crop

### Orders
- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id/status` - Update order status

### Clusters
- `GET /api/clusters` - Get all clusters
- `POST /api/clusters` - Create cluster (agent)
- `GET /api/clusters/:id` - Get cluster details

### Mandi Prices
- `GET /api/mandi/prices` - Get current mandi prices
- `GET /api/mandi/prices/history` - Get price history

### Weather
- `GET /api/weather/:district` - Get weather for district

## User Roles

| Role | Description |
|------|-------------|
| Admin | Full system access, user approval |
| Agent | Manage farmer clusters |
| Farmer | List and sell crops |
| Buyer | Purchase crops |
| Transporter | Handle deliveries |

## Seeding Data

```bash
# Seed database
npm run seed
```

## License

MIT License
