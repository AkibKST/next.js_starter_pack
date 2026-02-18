// Custom hook for managing bookings
"use client";

import { useState } from "react";

export function useBookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);

    return { bookings, loading };
}
