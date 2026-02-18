// Custom hook for searching and filtering technicians
"use client";

import { useState } from "react";

export function useTechnicians() {
    const [technicians, setTechnicians] = useState([]);
    const [filters, setFilters] = useState({});
    const [loading, setLoading] = useState(false);

    return { technicians, filters, setFilters, loading };
}
