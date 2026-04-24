import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AstraDrive | Premium Car Rentals",
  description:
    "Book premium cars with transparent pricing, verified vehicles, and round-the-clock support.",
  metadataBase: new URL("https://astradrive.example.com")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
