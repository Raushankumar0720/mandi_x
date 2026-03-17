# Mandi_X Frontend

Mandi_X is a comprehensive agricultural marketplace platform that connects farmers directly with buyers, eliminating middlemen and ensuring fair prices for agricultural produce.

## Features

- **Modern Landing Page**: Attractive hero section with animated elements
- **Role-Based Dashboards**: Custom dashboards for farmers, buyers, agents, transporters, and admins
- **Marketplace**: Browse and filter crops by category, price, and location
- **Cluster Details**: View cluster information and farmer details
- **Authentication**: Secure login and registration with role selection
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **State Management**: Zustand for efficient state management

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Internationalization**: i18next

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000/api
```

## Project Structure

```
src/
├── components/
│   ├── auth/          # Authentication modals
│   ├── layout/        # Navbar, Footer
│   └── marketplace/  # Marketplace components
├── pages/
│   ├── admin/         # Admin dashboard
│   ├── agent/        # Agent dashboard
│   ├── buyer/        # Buyer dashboard
│   ├── farmer/       # Farmer dashboard
│   └── transporter/  # Transporter dashboard
├── store/            # Zustand stores
├── lib/              # Utility functions
└── i18n/             # Internationalization
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## User Dashboards

### Farmer Dashboard
- Add new crops
- View my crops
- Check market prices
- Track orders

### Buyer Dashboard
- Browse marketplace
- View active orders
- Track deliveries

### Agent Dashboard
- Manage farmers
- View cluster statistics
- Monitor crop listings

### Transporter Dashboard
- View available jobs
- Track active deliveries
- Update delivery status

### Admin Dashboard
- User management
- Approve new users
- View system statistics

## Login Credentials (After Seeding)

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@agrilink.com | admin123 |
| Agent | agent1@agrilink.com | agent123 |
| Farmer | farmer1@agrilink.com | farmer123 |
| Buyer | buyer1@agrilink.com | buyer123 |
| Transporter | transporter@agrilink.com | transporter123 |

## License

MIT License
