// Application-wide constants

// ============================================
// Navigation Links
// ============================================
export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Technicians", href: "/technicians" },
    { label: "My Bookings", href: "/bookings" },
] as const;

// ============================================
// Service Categories
// ============================================
export const SERVICE_CATEGORIES = [
    "Plumbing",
    "Electrical",
    "HVAC",
    "Carpentry",
    "Painting",
    "Appliance Repair",
    "Roofing",
    "Landscaping",
    "Cleaning",
    "Pest Control",
] as const;

// ============================================
// Booking Status Labels & Colors
// ============================================
export const BOOKING_STATUS_MAP = {
    pending: { label: "Pending", color: "#f59e0b" },
    accepted: { label: "Accepted", color: "#3b82f6" },
    "in-progress": { label: "In Progress", color: "#8b5cf6" },
    completed: { label: "Completed", color: "#10b981" },
    cancelled: { label: "Cancelled", color: "#ef4444" },
} as const;

// ============================================
// Pagination
// ============================================
export const DEFAULT_PAGE_SIZE = 10;
export const PAGE_SIZE_OPTIONS = [5, 10, 20, 50] as const;
