# FixItPro - Complete Application Documentation

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Features](#features)
5. [User Roles](#user-roles)
6. [API Routes](#api-routes)
7. [Components Overview](#components-overview)
8. [Pages & Routes](#pages--routes)
9. [Installation & Setup](#installation--setup)
10. [Configuration](#configuration)
11. [Contributing](#contributing)

---

## 🎯 Project Overview

**FixItPro** is a modern, full-featured web application that connects customers with verified, professional technicians for home services. The platform provides an easy-to-use marketplace where customers can book services and technicians can manage their professional profiles.

### Core Mission

Make home services effortless by providing quick access to trustworthy, skilled professionals without the hassle of endless searching and uncertainty.

### Key Highlights

- **15,000+** Happy Customers
- **2,000+** Verified Technicians
- **50+** Service Categories
- **4.9★** Average Rating
- **24/7** Customer Support
- **100%** Satisfaction Guarantee

---

## 💻 Technology Stack

### Frontend Framework

- **Next.js 16.1.6** - React framework with App Router (file-based routing)
- **React 19.2.3** - UI library
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS 4** - CSS processing

### Development Tools

- **ESLint 9** - Code linting and quality
- **Node.js** - JavaScript runtime

### Package Structure

```json
{
  "dependencies": {
    "next": "16.1.6",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    "typescript": "^5",
    "eslint": "^9",
    "eslint-config-next": "16.1.6"
  }
}
```

---

## 📁 Project Structure

```
my_nextjs_app/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── globals.css               # Global styles
│   │   ├── layout.tsx                # Root layout wrapper
│   │   ├── page.tsx                  # Home page
│   │   ├── (auth)/                   # Authentication routes (auth layout group)
│   │   │   ├── layout.tsx            # Auth layout
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── register/
│   │   │   │   └── page.tsx
│   │   │   └── forgot-password/
│   │   │       └── page.tsx
│   │   ├── (main)/                   # Main app routes (main layout group)
│   │   │   ├── layout.tsx            # Main layout with sidebar/navbar
│   │   │   ├── dashboard/            # Dashboard pages
│   │   │   │   ├── admin/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── bookings/
│   │   │   │   │   ├── services/
│   │   │   │   │   └── users/
│   │   │   │   ├── customer/
│   │   │   │   └── technician/
│   │   │   ├── bookings/             # Booking management
│   │   │   │   ├── page.tsx
│   │   │   │   ├── [id]/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── new/
│   │   │   │       └── page.tsx
│   │   │   ├── profile/              # User profile
│   │   │   │   ├── page.tsx
│   │   │   │   └── settings/
│   │   │   │       └── page.tsx
│   │   │   ├── services/             # Service browsing
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   └── technicians/          # Technician browsing
│   │   │       ├── page.tsx
│   │   │       └── [id]/
│   │   │           ├── page.tsx
│   │   │           └── reviews/
│   │   ├── api/                      # API routes
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   │   └── route.ts
│   │   │   │   └── register/
│   │   │   │       └── route.ts
│   │   │   ├── bookings/
│   │   │   │   └── route.ts
│   │   │   ├── reviews/
│   │   │   │   └── route.ts
│   │   │   ├── services/
│   │   │   │   └── route.ts
│   │   │   └── technicians/
│   │   │       └── route.ts
│   │   ├── blog/                     # Blog section
│   │   │   ├── page.tsx
│   │   │   ├── [blogId]/
│   │   │   │   └── page.tsx
│   │   │   └── [...slug]/
│   │   │       └── page.tsx
│   │   ├── about/                    # About page
│   │   │   └── page.tsx
│   │   ├── contact/                  # Contact page
│   │   │   └── page.tsx
│   │   ├── counter/                  # Demo counter page
│   │   │   └── page.tsx
│   │   └── dashboard/                # Legacy dashboard
│   │       ├── page.tsx
│   │       ├── profile/
│   │       └── settings/
│   │
│   ├── components/                   # React components
│   │   ├── bookings/
│   │   │   ├── BookingCard.tsx
│   │   │   ├── BookingForm.tsx
│   │   │   └── PreferenceCard.tsx    # NEW: Topic preferences
│   │   ├── dashboard/
│   │   │   ├── RecentActivity.tsx
│   │   │   └── StatsCard.tsx
│   │   ├── services/
│   │   │   └── ServiceCard.tsx
│   │   ├── shared/
│   │   │   ├── Footer.tsx
│   │   │   ├── Loading.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── technicians/
│   │   │   ├── ReviewCard.tsx
│   │   │   ├── TechnicianCard.tsx
│   │   │   └── TechnicianFilter.tsx
│   │   └── ui/
│   │       ├── Avatar.tsx
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       └── Modal.tsx
│   │
│   ├── constants/                    # Constants and configuration
│   │   └── index.ts
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useBookings.ts
│   │   ├── useTechnicians.ts
│   │   └── usePreferences.ts         # NEW: User preferences hook
│   │
│   ├── lib/                          # Utilities and helpers
│   │   ├── api.ts                    # API client
│   │   ├── auth.ts                   # Authentication logic
│   │   ├── utils.ts                  # General utilities
│   │   └── validations.ts           # Form validations
│   │
│   └── types/                        # TypeScript type definitions
│       └── index.ts
│
├── public/                           # Static assets
├── package.json                      # Dependencies
├── tsconfig.json                     # TypeScript configuration
├── next.config.ts                    # Next.js configuration
├── tailwind.config.mjs               # Tailwind configuration
├── postcss.config.mjs                # PostCSS configuration
├── eslint.config.mjs                 # ESLint configuration
└── README.md                         # Quick start guide
```

---

## ✨ Features

### 1. **Service Discovery & Browsing**

- Browse 50+ service categories
- View detailed service descriptions
- Filter by category and availability
- Service ratings and reviews
- Responsive service cards

**Available Services:**

- 🚰 Plumbing
- ⚡ Electrical
- 🌡️ HVAC
- 🔨 Carpentry
- 🎨 Painting
- 🔧 Appliance Repair

### 2. **Technician Marketplace**

- Browse verified technicians
- View technician profiles with:
  - Skills and certifications
  - Experience level
  - Hourly rates
  - Availability status
  - Customer reviews and ratings
  - Location information
- Filter technicians by specialty and rating
- Direct booking capability

### 3. **Booking Management**

- Easy booking process (<2 minutes)
- Multiple pricing tiers:
  - **Basic**: $29/visit - Single service visits
  - **Pro**: $79/month - Unlimited requests
  - **Enterprise**: $199/month - Multi-property support
- Schedule changes and cancellations (up to 2 hours before)
- Same-day service for Pro/Enterprise customers
- Booking history and tracking
- Transparent pricing (no hidden fees)

### 4. **User Authentication**

- Customer registration and login
- Technician registration and login
- Admin authentication
- Password reset (forgot-password)
- Secure session management
- Email verification

### 5. **Profile & Preferences Management**

- **User Profiles**: Complete profile information for all user types
- **Topic Preferences**: Select preferred service categories
- **Profile Settings**: Update personal information
- **Service History**: Track completed jobs and bookings
- **Ratings & Reviews**: View customer feedback
- **Availability Calendar**: Technicians can manage availability

### 6. **Review System**

- Rate completed services (1-5 stars)
- Written reviews and comments
- Technician ratings aggregation
- Customer feedback visibility
- Review moderation features

### 7. **Dashboard**

- **Customer Dashboard**: View bookings, upcoming appointments, saved preferences
- **Technician Dashboard**: Manage job requests, active bookings, performance stats
- **Admin Dashboard**:
  - User management
  - Booking oversight
  - Service management
  - Platform analytics
  - Technician verification

### 8. **Content Management**

- Blog section with articles
- About page with company information
- Contact form for inquiries
- FAQ section with common questions
- Static and dynamic blog routing

### 9. **Search & Filtering**

- Search bar for services and technicians
- Advanced filters by specialty, rating, price
- Location-based search
- Availability filters

### 10. **Additional Features**

- 24/7 emergency dispatch (Pro/Enterprise)
- 100% satisfaction guarantee
- Background-checked technicians
- Responsive design (mobile/tablet/desktop)
- Real-time notifications
- Payment processing integration

---

## 👥 User Roles

### 1. **Customer**

- Browse and book services
- Manage personal bookings
- Set service preferences
- Leave reviews and ratings
- Access dashboard with booking history
- Update profile and payment methods

**Accessible Routes:**

- `/dashboard/customer`
- `/bookings`
- `/bookings/new`
- `/profile`
- `/profile/settings`

### 2. **Technician**

- Create professional profile
- List available services
- Manage bookings and schedules
- Respond to job requests
- View earnings and history
- Receive customer reviews

**Accessible Routes:**

- `/dashboard/technician`
- `/dashboard/technician/[id]/reviews`

### 3. **Admin**

- Manage all platform content
- Verify technicians
- Monitor bookings
- View platform statistics
- User account management
- Service management
- Dispute resolution

**Accessible Routes:**

- `/dashboard/admin`
- `/dashboard/admin/bookings`
- `/dashboard/admin/services`
- `/dashboard/admin/users`

---

## 🔗 API Routes

All API endpoints follow RESTful conventions and are located in `src/app/api/`.

### Authentication Routes

```
POST /api/auth/register     - Register new user
POST /api/auth/login        - Login user
POST /api/auth/logout       - Logout (optional)
POST /api/auth/forgot-password - Password reset request
```

### Bookings Routes

```
GET    /api/bookings        - Get all bookings (with filters)
POST   /api/bookings        - Create new booking
GET    /api/bookings/[id]   - Get booking details
PUT    /api/bookings/[id]   - Update booking
DELETE /api/bookings/[id]   - Cancel booking
```

### Services Routes

```
GET    /api/services        - List all services
POST   /api/services        - Create service (admin)
GET    /api/services/[id]   - Get service details
PUT    /api/services/[id]   - Update service (admin)
DELETE /api/services/[id]   - Delete service (admin)
```

### Technicians Routes

```
GET    /api/technicians     - List all technicians
POST   /api/technicians     - Register as technician
GET    /api/technicians/[id] - Get technician profile
PUT    /api/technicians/[id] - Update technician profile
```

### Reviews Routes

```
GET    /api/reviews         - Get all reviews
POST   /api/reviews         - Create review
GET    /api/reviews/[id]    - Get review details
PUT    /api/reviews/[id]    - Update review
DELETE /api/reviews/[id]    - Delete review
```

---

## 🧩 Components Overview

### Shared Components

| Component   | Purpose                      |
| ----------- | ---------------------------- |
| `Navbar`    | Main navigation bar          |
| `Footer`    | Application footer           |
| `Sidebar`   | Side navigation for main app |
| `SearchBar` | Global search functionality  |
| `Loading`   | Loading spinner/skeleton     |

### Booking Components

| Component        | Purpose                            |
| ---------------- | ---------------------------------- |
| `BookingCard`    | Display booking information        |
| `BookingForm`    | Form for creating/editing bookings |
| `PreferenceCard` | Topic preference selection         |

### Service Components

| Component     | Purpose                     |
| ------------- | --------------------------- |
| `ServiceCard` | Display service information |

### Technician Components

| Component          | Purpose                      |
| ------------------ | ---------------------------- |
| `TechnicianCard`   | Professional technician card |
| `TechnicianFilter` | Filter technicians           |
| `ReviewCard`       | Display technician reviews   |

### Dashboard Components

| Component        | Purpose                   |
| ---------------- | ------------------------- |
| `StatsCard`      | Display key metrics       |
| `RecentActivity` | Show recent user activity |

### UI Components

| Component | Purpose                   |
| --------- | ------------------------- |
| `Button`  | Reusable button component |
| `Input`   | Reusable input field      |
| `Modal`   | Modal dialog component    |
| `Avatar`  | User avatar display       |
| `Badge`   | Status/category badge     |

---

## 📄 Pages & Routes

### Public Routes

| Route             | Component  | Purpose                               |
| ----------------- | ---------- | ------------------------------------- |
| `/`               | `page.tsx` | Home page with services, pricing, FAQ |
| `/about`          | `page.tsx` | About company information             |
| `/contact`        | `page.tsx` | Contact form and info                 |
| `/blog`           | `page.tsx` | Blog listing                          |
| `/blog/[blogId]`  | `page.tsx` | Individual blog post                  |
| `/blog/[...slug]` | `page.tsx` | Dynamic blog routes                   |

### Authentication Routes (auth group)

| Route              | Component  | Purpose           |
| ------------------ | ---------- | ----------------- |
| `/login`           | `page.tsx` | User login        |
| `/register`        | `page.tsx` | User registration |
| `/forgot-password` | `page.tsx` | Password recovery |

### Main App Routes (main group)

| Route                       | Component  | Purpose                                   |
| --------------------------- | ---------- | ----------------------------------------- |
| `/dashboard/customer`       | `page.tsx` | Customer dashboard                        |
| `/dashboard/technician`     | `page.tsx` | Technician dashboard                      |
| `/dashboard/admin`          | `page.tsx` | Admin dashboard                           |
| `/dashboard/admin/bookings` | `page.tsx` | Admin bookings management                 |
| `/dashboard/admin/services` | `page.tsx` | Admin services management                 |
| `/dashboard/admin/users`    | `page.tsx` | Admin users management                    |
| `/bookings`                 | `page.tsx` | Customer bookings list                    |
| `/bookings/new`             | `page.tsx` | Create new booking                        |
| `/bookings/[id]`            | `page.tsx` | Booking details                           |
| `/profile`                  | `page.tsx` | User profile                              |
| `/profile/settings`         | `page.tsx` | **NEW** Profile settings with preferences |
| `/services`                 | `page.tsx` | Services listing                          |
| `/services/[id]`            | `page.tsx` | Service details                           |
| `/technicians`              | `page.tsx` | Technicians listing                       |
| `/technicians/[id]`         | `page.tsx` | Technician profile                        |
| `/technicians/[id]/reviews` | `page.tsx` | Technician reviews                        |

---

## 🚀 Installation & Setup

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager
- Git (for version control)

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/fixitpro.git
cd fixitpro
```

### Step 2: Install Dependencies

```bash
npm install
# or
yarn install
```

### Step 3: Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_APP_NAME=FixItPro
NEXT_PUBLIC_APP_DESCRIPTION=Find & Hire Expert Technicians in Minutes
```

### Step 4: Run Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

### Step 5: Build for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

---

## ⚙️ Configuration

### Next.js Configuration (`next.config.ts`)

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.example.com",
      },
    ],
  },
  // Redirects and rewrites can be added here
};

export default nextConfig;
```

### TypeScript Configuration (`tsconfig.json`)

- Strict mode enabled
- Target: ES2020
- Module: ESNext
- JSX: preserve

### Tailwind CSS Configuration (`tailwind.config.mjs`)

- Extend default theme with custom colors
- Custom spacing values
- Font configurations
- Plugin support

### ESLint Configuration (`eslint.config.mjs`)

- Next.js recommended rules
- TypeScript support
- React best practices

---

## 📚 Development Guidelines

### Code Style

- Use TypeScript for all files
- Follow React hooks conventions
- Use functional components
- Props should be typed interfaces
- Components should have proper JSDoc comments

### Component Structure

```typescript
// Example component structure
import React from 'react';
import { IComponent } from '@/types';

interface ComponentProps {
  prop1: string;
  prop2?: number;
}

/**
 * ComponentName
 * @component
 * Description of what this component does
 */
export const ComponentName: React.FC<ComponentProps> = ({
  prop1,
  prop2
}) => {
  return (
    <div className="component">
      {/* Component JSX */}
    </div>
  );
};

export default ComponentName;
```

### File Naming Conventions

- **Components**: PascalCase (e.g., `BookingCard.tsx`)
- **Pages**: lowercase or PascalCase in app directory
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Types**: PascalCase (e.g., `User.ts`) or in shared `index.ts`

### Styling

- Use Tailwind CSS utility classes
- Create custom CSS modules when needed
- Follow mobile-first responsive design
- Use CSS custom properties for theme variables

---

## 🤝 Contributing

### Steps to Contribute

1. Create a feature branch: `git checkout -b feature/feature-name`
2. Make your changes and commit: `git commit -m "Add feature description"`
3. Push to the branch: `git push origin feature/feature-name`
4. Open a Pull Request

### Best Practices

- Write meaningful commit messages
- Test your changes thoroughly
- Follow the existing code style
- Update documentation as needed
- Add types for new functionality

---

## 🐛 Troubleshooting

### Common Issues

**Port 3000 is already in use**

```bash
# Kill the process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:3000 | xargs kill -9
```

**Node modules not installing**

```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors**

```bash
# Run TypeScript check
npx tsc --noEmit

# Fix common issues
npm run lint -- --fix
```

---

## 📞 Support & Resources

### Documentation Links

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Getting Help

- File an issue on GitHub
- Email: support@fixitpro.com
- Phone: +1 (555) 123-4567

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Last Updated:** February 18, 2026
**Version:** 1.0.0
