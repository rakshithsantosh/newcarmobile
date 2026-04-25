"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import InquiryModal from "./InquiryModal";

interface BookingContextType {
  openBooking: (vehicleId?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<string | undefined>(undefined);

  const openBooking = (vehicleId?: string) => {
    setSelectedVehicle(vehicleId);
    setIsOpen(true);
  };

  const closeBooking = () => setIsOpen(false);

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      {children}
      <InquiryModal 
        isOpen={isOpen} 
        onClose={closeBooking} 
        selectedVehicle={selectedVehicle} 
      />
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBooking must be used within a BookingProvider");
  return context;
};
