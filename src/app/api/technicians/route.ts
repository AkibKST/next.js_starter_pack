import { NextResponse } from "next/server";

// GET /api/technicians - List all technicians
export async function GET() {
    // TODO: Implement technician listing
    return NextResponse.json({ message: "List of technicians" });
}

// POST /api/technicians - Create a new technician
export async function POST() {
    // TODO: Implement technician creation
    return NextResponse.json({ message: "Create technician" });
}
