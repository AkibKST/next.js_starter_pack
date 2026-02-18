import { NextResponse } from "next/server";

// GET /api/bookings - List bookings
export async function GET() {
    // TODO: Implement booking listing
    return NextResponse.json({ message: "List of bookings" });
}

// POST /api/bookings - Create a new booking
export async function POST() {
    // TODO: Implement booking creation
    return NextResponse.json({ message: "Create booking" });
}
