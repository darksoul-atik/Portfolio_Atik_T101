import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atik Shahrear Ananto | Modern Portfolio",
  description:
    "A premium animated portfolio for Atik Shahrear Ananto, Frontend Developer and MERN Stack Developer from Dhaka, Bangladesh.",
  authors: [{ name: "Atik Shahrear Ananto" }],
  keywords: [
    "Atik Shahrear Ananto",
    "Frontend Developer",
    "MERN Stack Developer",
    "React Developer",
    "TypeScript",
    "Dhaka"
  ]
};

export const viewport: Viewport = {
  themeColor: "#050711",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
