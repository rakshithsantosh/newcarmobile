import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookingProvider } from "@/components/BookingProvider";
import FloatingActions from "@/components/FloatingActions";

export const metadata: Metadata = {
  title: "New Car Mobile | Premium Chauffeur & Fleet Management Bangalore",
  description: "Bangalore's premium chauffeur and fleet management company. Corporate cabs, employee transportation, self-drive cars, and luxury tourist transport.",
  keywords: "corporate cabs bangalore, employee transportation, luxury car rental bangalore, chauffeur service, New Car Mobile",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ overflowX: 'hidden' }}>
        <BookingProvider>
          <Navbar />
          {children}
          <Footer />
          <FloatingActions />
        </BookingProvider>
      </body>
    </html>
  );
}
