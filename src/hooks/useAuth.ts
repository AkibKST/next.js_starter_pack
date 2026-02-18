// Custom hook for authentication state
"use client";

import { useState, useEffect } from "react";

export function useAuth() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check auth status on mount
        setLoading(false);
    }, []);

    return { isLoggedIn, user, loading };
}
