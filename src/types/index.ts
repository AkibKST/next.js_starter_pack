// ============================================
// User Types
// ============================================

export interface IUser {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: "customer" | "technician" | "admin";
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
}

// ============================================
// Technician Types
// ============================================

export interface ITechnician extends IUser {
    bio: string;
    skills: string[];
    experience: number; // years
    rating: number;
    totalReviews: number;
    hourlyRate: number;
    availability: "available" | "busy" | "offline";
    location: ILocation;
    certifications: string[];
    completedJobs: number;
}

// ============================================
// Service Types
// ============================================

export interface IService {
    id: string;
    name: string;
    description: string;
    category: string;
    basePrice: number;
    estimatedDuration: string;
    image?: string;
    isActive: boolean;
}

// ============================================
// Booking Types
// ============================================

export interface IBooking {
    id: string;
    customerId: string;
    technicianId: string;
    serviceId: string;
    status: BookingStatus;
    scheduledDate: Date;
    scheduledTime: string;
    location: ILocation;
    description: string;
    totalPrice: number;
    paymentStatus: PaymentStatus;
    createdAt: Date;
    updatedAt: Date;
}

export type BookingStatus =
    | "pending"
    | "accepted"
    | "in-progress"
    | "completed"
    | "cancelled";

export type PaymentStatus = "unpaid" | "paid" | "refunded";

// ============================================
// Review Types
// ============================================

export interface IReview {
    id: string;
    bookingId: string;
    customerId: string;
    technicianId: string;
    rating: number;
    comment: string;
    createdAt: Date;
}

// ============================================
// Common Types
// ============================================

export interface ILocation {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    lat?: number;
    lng?: number;
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
    error?: string;
}

export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
