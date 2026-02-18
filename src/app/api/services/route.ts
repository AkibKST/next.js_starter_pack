import { NextResponse } from "next/server";

// GET /api/services - List services
export async function GET() {
    // TODO: Implement services listing
    return NextResponse.json({ message: "List of services" });
}
