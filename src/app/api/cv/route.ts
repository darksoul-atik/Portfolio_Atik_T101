import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("cv") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No CV file uploaded." },
        { status: 400 }
      );
    }

    if (!file.name.endsWith(".pdf") && file.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Only PDF files are allowed." },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const publicDir = path.join(process.cwd(), "public");
    const cvPath = path.join(publicDir, "resume-atik-shahrear-ananto.pdf");

    fs.writeFileSync(cvPath, buffer);

    return NextResponse.json(
      {
        success: true,
        message: "CV updated successfully!",
        filename: "resume-atik-shahrear-ananto.pdf",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("CV upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload CV." },
      { status: 500 }
    );
  }
}
