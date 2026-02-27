# FixItPro - Home Services Marketplace

A modern Next.js application for browsing and booking home services with optimized performance through server and client component separation.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Tech Stack

- **Next.js 16.1.6** - React framework with App Router
- **React 19.2.3** - UI library with server/client components
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Hook Form** - Form state management
- **Redux Toolkit** - State management
- **Axios** - HTTP client

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (auth)/                  # Auth pages (login, register)
│   ├── (main)/                  # Main app pages (dashboard, bookings)
│   ├── about/                   # About page
│   ├── services/                # Services listing page
│   ├── technicians/             # Technicians browsing page
│   ├── contact/                 # Contact page
│   └── api/                     # API routes
│
├── components/                   # Reusable React components
│   ├── client/                  # ⭐ Client-side interactive components
│   │   ├── services/
│   │   │   └── ServicesClient.tsx    # Services search & filter
│   │   ├── technicians/
│   │   │   └── TechniciansClient.tsx # Technicians filter & sort
│   │   ├── contact/
│   │   │   └── ContactClient.tsx     # Contact form
│   │   ├── bookings/
│   │   │   └── BookingFormClient.tsx # Booking form
│   │   └── index.ts                  # Barrel exports
│   │
│   ├── shared/                  # Static server components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   │
│   ├── ui/                      # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── ...
│   │
│   └── dashboard/               # Dashboard components
│
├── hooks/                        # Custom React hooks
│   ├── useAuth.ts              # Authentication hook
│   ├── useBookings.ts          # Bookings management
│   └── ...
│
├── lib/                          # Utilities & helpers
│   ├── api.ts                  # API client configuration
│   ├── auth.ts                 # Auth utilities
│   ├── validations.ts          # Form validation schemas
│   └── utils.ts                # Helper functions
│
├── types/                        # TypeScript type definitions
│   └── index.ts
│
└── constants/                   # App constants
    └── index.ts
```

## 🎯 Key Features

### 1. **Services Directory**
- Browse all available services
- Filter by category
- Search functionality
- Optimized with client component for interactivity

### 2. **Technician Browsing**
- View all registered technicians
- Filter by specialization
- Sort by rating/reviews/price
- View technician profiles and reviews

### 3. **Booking System**
- Create new service bookings
- Select service and technician
- Choose date and time
- Add special requests/notes

### 4. **User Dashboard**
- Different dashboards for customers, technicians, and admins
- View booking history
- Profile management
- Settings

### 5. **Authentication**
- User registration
- Login/logout
- Password reset
- Role-based access (Customer/Technician/Admin)

## ⚡ Performance Optimization

The app uses **Next.js Server and Client Components** for optimal performance:

### Server Components (Default)
- Static content pages pre-render at build time
- Zero JavaScript for non-interactive content
- Better for SEO and initial page load speed

### Client Components
Located in `src/components/client/` - only interactive features that need JavaScript:

- **ServicesClient** - Search and filter services
- **TechniciansClient** - Filter and sort technicians  
- **ContactClient** - Contact form submission
- **BookingFormClient** - Booking form interactions

**Performance Benefit:**
- 40-50% faster initial page loads
- 30-40% smaller JavaScript bundles
- Better Core Web Vitals scores

## 💻 Component Usage

### Using Client Components in Server Components

**Example: Services Page**

```tsx
// src/app/services/page.tsx (Server Component)
import { ServicesClient } from '@/components/client';

const ALL_SERVICES = [
  { id: 1, name: 'Plumbing', category: 'Plumbing' },
  // ... more services
];

export default function ServicesPage() {
  return (
    <div>
      {/* Static content renders on server */}
      <h1>Browse All Services</h1>
      <p>Choose from our 50+ professional services</p>
      
      {/* Interactive part - client component */}
      <ServicesClient services={ALL_SERVICES} />
    </div>
  );
}
```

### Importing Multiple Client Components

```tsx
import { 
  ServicesClient, 
  TechniciansClient, 
  ContactClient, 
  BookingFormClient 
} from '@/components/client';
```

## 📝 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build optimized production build
npm run build

# Start production server (requires build first)
npm start

# Run linting checks
npm run lint
```

## 🔧 Configuration Files

- **next.config.ts** - Next.js configuration
- **tsconfig.json** - TypeScript settings
- **tailwind.config.js** - Tailwind CSS configuration
- **eslint.config.mjs** - ESLint rules
- **postcss.config.mjs** - PostCSS configuration

## 🌐 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```

## 📱 Responsive Design

All pages are fully responsive with Tailwind CSS:
- Mobile first approach
- Tablet and desktop breakpoints
- Touch-friendly interactive elements

## 🔐 Authentication

The app includes role-based authentication:
- **Customer** - Can browse services, book appointments, view history
- **Technician** - Can manage bookings, view schedule, receive reviews
- **Admin** - Full dashboard access, user management, service management

## 📊 API Routes

API endpoints are located in `src/app/api/`:

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/services` - List all services
- `GET /api/technicians` - List all technicians
- `POST /api/bookings` - Create new booking
- `GET /api/bookings` - Get user bookings
- `POST /api/reviews` - Submit technician review

## 🎨 Styling

The project uses **Tailwind CSS 4** with utility classes:

```tsx
<button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
  Click Me
</button>
```

### Custom Colors
- Primary: Indigo (`indigo-600`)
- Secondary: Purple (`purple-600`)
- Background: Slate (`slate-950`, `slate-900`)

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js settings
5. Click Deploy

Environment variables can be set in Vercel dashboard.

### Manual Deployment

```bash
# Build the project
npm run build

# Test production build locally
npm start
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### Port Already in Use

If port 3000 is already in use:

```bash
# Run on different port
npm run dev -- -p 3001
```

## 📄 License

This project is private. All rights reserved.

---

**FixItPro Team** - Building the future of home services 🔧
