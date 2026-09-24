import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { passcode } = await req.json();

    const expectedPasscode =
      process.env.DEV_PASSCODE ||
      process.env.NEXT_PUBLIC_DEV_PASSCODE;

    if (!expectedPasscode) {
      return NextResponse.json(
        { success: false, valid: false, error: "Dev passcode not configured on server." },
        { status: 500 }
      );
    }

    if (passcode && passcode.trim() === expectedPasscode.trim()) {
      return NextResponse.json({ success: true, valid: true });
    }

    return NextResponse.json(
      { success: false, valid: false, error: "Incorrect passcode." },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, valid: false, error: "Server error during verification." },
      { status: 500 }
    );
  }
}
