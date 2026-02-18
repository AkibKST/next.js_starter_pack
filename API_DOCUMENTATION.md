# FixItPro - API Documentation

## 📋 Table of Contents

1. [Overview](#overview)
2. [Authentication](#authentication)
3. [API Endpoints](#api-endpoints)
4. [Request/Response Format](#requestresponse-format)
5. [Error Handling](#error-handling)
6. [Rate Limiting](#rate-limiting)
7. [Code Examples](#code-examples)

---

## 🔐 Overview

The FixItPro API provides RESTful endpoints for managing:

- User authentication and profiles
- Service bookings
- Technician management
- Service listings
- Reviews and ratings
- User preferences

**Base URL:** `http://localhost:3000/api`  
**API Version:** v1  
**Authentication:** Bearer Token (JWT)

---

## 🔒 Authentication

### Authentication Methods

#### 1. Email/Password Login

Users authenticate with email and password to receive a JWT token.

#### 2. JWT Bearer Token

Include token in Authorization header:

```
Authorization: Bearer <jwt_token>
```

#### 3. Session Cookies

Sessions are maintained via secure HTTP-only cookies.

### Token Structure

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5...",
  "token_type": "Bearer",
  "expires_in": 86400,
  "user": {
    "id": "user-123",
    "email": "user@example.com",
    "role": "customer"
  }
}
```

---

## 🔗 API Endpoints

### Authentication Endpoints

#### POST /api/auth/register

Register a new user account.

**Request:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePassword123!",
  "phone": "+1 (555) 000-0000",
  "role": "customer"
}
```

**Response (201 Created):**

```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user-123",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1 (555) 000-0000",
      "role": "customer",
      "createdAt": "2026-02-18T10:30:00Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5..."
  },
  "message": "User registered successfully"
}
```

**Error Response (400 Bad Request):**

```json
{
  "success": false,
  "error": "Email already exists",
  "message": "This email is already associated with an account"
}
```

---

#### POST /api/auth/login

Authenticate user and receive JWT token.

**Request:**

```json
{
  "email": "john@example.com",
  "password": "SecurePassword123!"
}
```

**Response (200 OK):**

```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user-123",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "customer"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5..."
  },
  "message": "Login successful"
}
```

**Error Response (401 Unauthorized):**

```json
{
  "success": false,
  "error": "Invalid credentials",
  "message": "Email or password is incorrect"
}
```

---

### Booking Endpoints

#### GET /api/bookings

Retrieve all bookings for authenticated user.

**Query Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `status` | string | Filter by status (pending, accepted, in-progress, completed, cancelled) |
| `page` | number | Pagination page (default: 1) |
| `limit` | number | Items per page (default: 10) |
| `sortBy` | string | Sort field (createdAt, scheduledDate, totalPrice) |
| `sortOrder` | string | asc or desc |

**Request:**

```
GET /api/bookings?status=completed&sortBy=createdAt&sortOrder=desc
Authorization: Bearer <token>
```

**Response (200 OK):**

```json
{
  "success": true,
  "data": {
    "bookings": [
      {
        "id": "booking-123",
        "customerId": "user-456",
        "technicianId": "tech-789",
        "serviceId": "svc-123",
        "status": "completed",
        "scheduledDate": "2026-02-15T10:00:00Z",
        "scheduledTime": "10:00 AM",
        "location": {
          "address": "123 Main St",
          "city": "San Francisco",
          "state": "CA",
          "zipCode": "94102"
        },
        "description": "Fixed leaky kitchen faucet",
        "totalPrice": 150.0,
        "paymentStatus": "paid",
        "createdAt": "2026-02-14T08:30:00Z",
        "updatedAt": "2026-02-15T11:45:00Z"
      }
    ],
    "pagination": {
      "total": 24,
      "page": 1,
      "limit": 10,
      "totalPages": 3
    }
  }
}
```

---

#### POST /api/bookings

Create a new service booking.

**Request:**

```json
{
  "technicianId": "tech-789",
  "serviceId": "svc-123",
  "scheduledDate": "2026-02-20",
  "scheduledTime": "14:00",
  "location": {
    "address": "123 Main St",
    "city": "San Francisco",
    "state": "CA",
    "zipCode": "94102"
  },
  "description": "Need plumbing repair for kitchen sink",
  "notes": "Please call before arrival"
}
```

**Response (201 Created):**

```json
{
  "success": true,
  "data": {
    "id": "booking-456",
    "customerId": "user-123",
    "technicianId": "tech-789",
    "serviceId": "svc-123",
    "status": "pending",
    "scheduledDate": "2026-02-20T14:00:00Z",
    "totalPrice": 200.0,
    "paymentStatus": "unpaid",
    "createdAt": "2026-02-18T15:30:00Z"
  },
  "message": "Booking created successfully"
}
```

---

#### GET /api/bookings/:id

Get details of a specific booking.

**Request:**

```
GET /api/bookings/booking-123
Authorization: Bearer <token>
```

**Response (200 OK):**

```json
{
  "success": true,
  "data": {
    "id": "booking-123",
    "customerId": "user-456",
    "technicianId": "tech-789",
    "serviceId": "svc-123",
    "status": "completed",
    "scheduledDate": "2026-02-15T10:00:00Z",
    "location": {
      "address": "123 Main St",
      "city": "San Francisco",
      "state": "CA",
      "zipCode": "94102"
    },
    "description": "Fixed leaky kitchen faucet",
    "totalPrice": 150.0,
    "paymentStatus": "paid",
    "technician": {
      "id": "tech-789",
      "name": "Mike Johnson",
      "rating": 4.9,
      "totalReviews": 243
    },
    "service": {
      "id": "svc-123",
      "name": "Plumbing",
      "basePrice": 100.0
    },
    "createdAt": "2026-02-14T08:30:00Z"
  }
}
```

---

#### PUT /api/bookings/:id

Update an existing booking.

**Request:**

```json
{
  "scheduledDate": "2026-02-21",
  "scheduledTime": "15:00",
  "description": "Also need to fix bathroom leak"
}
```

**Response (200 OK):**

```json
{
  "success": true,
  "data": {
    "id": "booking-123",
    "status": "pending",
    "scheduledDate": "2026-02-21T15:00:00Z",
    "description": "Also need to fix bathroom leak",
    "updatedAt": "2026-02-18T16:00:00Z"
  },
  "message": "Booking updated successfully"
}
```

---

#### DELETE /api/bookings/:id

Cancel a booking.

**Query Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `reason` | string | Cancellation reason |
| `refundFull` | boolean | Request full refund |

**Response (200 OK):**

```json
{
  "success": true,
  "data": {
    "id": "booking-123",
    "status": "cancelled",
    "refund": {
      "amount": 150.0,
      "status": "processed",
      "processedAt": "2026-02-18T16:05:00Z"
    }
  },
  "message": "Booking cancelled successfully"
}
```

---

### Service Endpoints

#### GET /api/services

Retrieve all available services.

**Query Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `category` | string | Filter by category |
| `search` | string | Search by name/description |
| `priceMin` | number | Minimum price |
| `priceMax` | number | Maximum price |
| `isActive` | boolean | Only active services |

**Request:**

```
GET /api/services?category=Plumbing&priceMax=500
```

**Response (200 OK):**

```json
{
  "success": true,
  "data": {
    "services": [
      {
        "id": "svc-123",
        "name": "Plumbing",
        "description": "Professional plumbing repairs and installations",
        "category": "Home Repair",
        "basePrice": 100.0,
        "estimatedDuration": "1-2 hours",
        "image": "https://cdn.example.com/plumbing.jpg",
        "isActive": true,
        "technicians": 324,
        "avgRating": 4.8
      }
    ],
    "total": 45
  }
}
```

---

#### POST /api/services

Create a new service (Admin only).

**Request:**

```json
{
  "name": "Smart Home Installation",
  "description": "Install and configure smart home devices",
  "category": "Technology",
  "basePrice": 250.0,
  "estimatedDuration": "3-4 hours"
}
```

**Response (201 Created):**

```json
{
  "success": true,
  "data": {
    "id": "svc-789",
    "name": "Smart Home Installation",
    "description": "Install and configure smart home devices",
    "category": "Technology",
    "basePrice": 250.0,
    "estimatedDuration": "3-4 hours",
    "isActive": true,
    "createdAt": "2026-02-18T10:30:00Z"
  },
  "message": "Service created successfully"
}
```

---

#### GET /api/services/:id

Get details of a specific service.

**Request:**

```
GET /api/services/svc-123
```

**Response (200 OK):**

```json
{
  "success": true,
  "data": {
    "id": "svc-123",
    "name": "Plumbing",
    "description": "Professional plumbing repairs and installations",
    "category": "Home Repair",
    "basePrice": 100.0,
    "estimatedDuration": "1-2 hours",
    "technicians": [
      {
        "id": "tech-789",
        "name": "Mike Johnson",
        "rating": 4.9,
        "hourlyRate": 85.0,
        "availability": "available"
      }
    ],
    "avgRating": 4.8,
    "totalReviews": 523
  }
}
```

---

### Technician Endpoints

#### GET /api/technicians

Retrieve all technicians.

**Query Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `skills` | string | Filter by skill (comma-separated) |
| `minRating` | number | Minimum rating (0-5) |
| `location` | string | Filter by city |
| `availability` | string | available, busy, offline |
| `sortBy` | string | rating, experience, hourlyRate |

**Request:**

```
GET /api/technicians?skills=Plumbing&minRating=4.5&sortBy=rating
```

**Response (200 OK):**

```json
{
  "success": true,
  "data": {
    "technicians": [
      {
        "id": "tech-789",
        "name": "Mike Johnson",
        "bio": "15 years of plumbing experience",
        "skills": ["Plumbing", "General Maintenance"],
        "experience": 15,
        "rating": 4.9,
        "totalReviews": 243,
        "hourlyRate": 85.0,
        "availability": "available",
        "location": {
          "city": "San Francisco",
          "state": "CA"
        },
        "certifications": ["Master Plumber", "EPA Certified"],
        "completedJobs": 1250
      }
    ],
    "total": 342
  }
}
```

---

#### POST /api/technicians

Register as a technician.

**Request:**

```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+1 (555) 987-6543",
  "password": "SecurePass123!",
  "bio": "Certified electrician with 10 years experience",
  "skills": ["Electrical", "General Maintenance"],
  "experience": 10,
  "hourlyRate": 95.0,
  "certifications": ["Master Electrician", "OSHA Certified"],
  "location": {
    "city": "San Francisco",
    "state": "CA"
  }
}
```

**Response (201 Created):**

```json
{
  "success": true,
  "data": {
    "id": "tech-999",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "role": "technician",
    "availability": "available",
    "createdAt": "2026-02-18T11:00:00Z"
  },
  "message": "Technician profile created successfully"
}
```

---

#### GET /api/technicians/:id

Get technician profile and reviews.

**Request:**

```
GET /api/technicians/tech-789
```

**Response (200 OK):**

```json
{
  "success": true,
  "data": {
    "id": "tech-789",
    "name": "Mike Johnson",
    "bio": "15 years of plumbing experience",
    "skills": ["Plumbing", "General Maintenance"],
    "experience": 15,
    "rating": 4.9,
    "totalReviews": 243,
    "hourlyRate": 85.0,
    "completedJobs": 1250,
    "reviews": [
      {
        "id": "review-123",
        "customerId": "user-456",
        "rating": 5,
        "comment": "Excellent work! Highly recommended.",
        "createdAt": "2026-02-15T12:00:00Z"
      }
    ],
    "certifications": ["Master Plumber", "EPA Certified"]
  }
}
```

---

### Review Endpoints

#### POST /api/reviews

Create a review for a completed booking.

**Request:**

```json
{
  "bookingId": "booking-123",
  "technicianId": "tech-789",
  "rating": 5,
  "comment": "Excellent service! The technician was professional and thorough."
}
```

**Response (201 Created):**

```json
{
  "success": true,
  "data": {
    "id": "review-456",
    "bookingId": "booking-123",
    "customerId": "user-123",
    "technicianId": "tech-789",
    "rating": 5,
    "comment": "Excellent service! The technician was professional and thorough.",
    "createdAt": "2026-02-18T17:30:00Z"
  },
  "message": "Review created successfully"
}
```

---

#### GET /api/reviews

Get reviews for a technician or service.

**Query Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `technicianId` | string | Filter by technician |
| `serviceId` | string | Filter by service |
| `rating` | number | Filter by rating (1-5) |
| `sortBy` | string | recent, helpful, rating |

**Request:**

```
GET /api/reviews?technicianId=tech-789&sortBy=recent
```

**Response (200 OK):**

```json
{
  "success": true,
  "data": {
    "reviews": [
      {
        "id": "review-123",
        "customerId": "user-456",
        "technicianId": "tech-789",
        "rating": 5,
        "comment": "Excellent work! Highly recommended.",
        "helpful": 24,
        "createdAt": "2026-02-15T12:00:00Z"
      }
    ],
    "avgRating": 4.9,
    "totalReviews": 243
  }
}
```

---

## 📦 Request/Response Format

### Standard Request Headers

```
Content-Type: application/json
Authorization: Bearer <jwt_token>
User-Agent: FixItPro-Client/1.0
```

### Standard Response Format

```json
{
  "success": true|false,
  "data": {},           // Response data
  "message": "string",  // Optional message
  "error": "string",    // Error message if success=false
  "timestamp": "2026-02-18T12:00:00Z"
}
```

### Pagination Format

```json
{
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10,
    "hasNext": true,
    "hasPrev": false
  }
}
```

---

## 🚨 Error Handling

### Error Response Format

```json
{
  "success": false,
  "error": "error_code",
  "message": "Human readable error message",
  "details": {
    "field": "error_details"
  },
  "timestamp": "2026-02-18T12:00:00Z"
}
```

### HTTP Status Codes

| Code | Meaning                                 |
| ---- | --------------------------------------- |
| 200  | OK - Request successful                 |
| 201  | Created - Resource created              |
| 204  | No Content - Successful deletion        |
| 400  | Bad Request - Invalid parameters        |
| 401  | Unauthorized - Invalid/missing token    |
| 403  | Forbidden - No permission               |
| 404  | Not Found - Resource not found          |
| 409  | Conflict - Resource already exists      |
| 422  | Unprocessable - Validation failed       |
| 429  | Too Many Requests - Rate limit exceeded |
| 500  | Server Error - Internal error           |

### Common Error Codes

```json
{
  "INVALID_EMAIL": "Email format is invalid",
  "EMAIL_EXISTS": "Email already registered",
  "INVALID_CREDENTIALS": "Email or password is incorrect",
  "TOKEN_EXPIRED": "JWT token has expired",
  "INSUFFICIENT_PERMISSIONS": "User lacks required permissions",
  "RESOURCE_NOT_FOUND": "Requested resource does not exist",
  "VALIDATION_ERROR": "One or more fields failed validation",
  "BOOKING_CONFLICT": "Technician unavailable at selected time",
  "PAYMENT_FAILED": "Payment processing failed"
}
```

---

## ⏱️ Rate Limiting

### Rate Limit Headers

```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1645189200
```

### Rate Limits by Endpoint Type

| Endpoint Type  | Requests/Hour | Requests/Day |
| -------------- | ------------- | ------------ |
| Authentication | 10            | 50           |
| Bookings       | 100           | 1000         |
| Services       | 1000          | 10000        |
| Technicians    | 1000          | 10000        |
| Reviews        | 100           | 500          |

### Rate Limit Response

```json
{
  "success": false,
  "error": "RATE_LIMIT_EXCEEDED",
  "message": "Too many requests. Please try again after 3600 seconds.",
  "retryAfter": 3600
}
```

---

## 💻 Code Examples

### JavaScript/TypeScript

#### Authentication

```typescript
// Register
const response = await fetch("/api/auth/register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "John Doe",
    email: "john@example.com",
    password: "SecurePassword123!",
    phone: "+1 (555) 000-0000",
    role: "customer",
  }),
});
const { data } = await response.json();
localStorage.setItem("token", data.token);

// Login
const loginResponse = await fetch("/api/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email: "john@example.com",
    password: "SecurePassword123!",
  }),
});
const loginData = await loginResponse.json();
localStorage.setItem("token", loginData.data.token);
```

#### Booking Creation

```typescript
const token = localStorage.getItem("token");
const response = await fetch("/api/bookings", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({
    technicianId: "tech-789",
    serviceId: "svc-123",
    scheduledDate: "2026-02-20",
    scheduledTime: "14:00",
    location: {
      address: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94102",
    },
    description: "Kitchen sink repair",
  }),
});
const booking = await response.json();
console.log("Booking created:", booking.data);
```

#### Fetching Technicians

```typescript
const response = await fetch(
  "/api/technicians?skills=Plumbing&minRating=4.5&sortBy=rating",
);
const { data } = await response.json();
console.log("Available technicians:", data.technicians);
```

#### Submitting Review

```typescript
const token = localStorage.getItem("token");
const response = await fetch("/api/reviews", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({
    bookingId: "booking-123",
    technicianId: "tech-789",
    rating: 5,
    comment: "Excellent service!",
  }),
});
const review = await response.json();
```

---

## 📚 Related Documentation

- [APP_DOCUMENTATION.md](./APP_DOCUMENTATION.md) - Full app overview
- [FEATURE_GUIDE.md](./FEATURE_GUIDE.md) - Service preferences feature
- [API Response Examples](./api-examples.json) - Complete response samples

---

**Last Updated:** February 18, 2026  
**API Version:** 1.0.0  
**Status:** ✅ Fully Implemented
