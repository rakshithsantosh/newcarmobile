"use client";

import React, { createContext, useContext, useState } from "react";
import BookingWizard from "./BookingWizard";
import { AnimatePresence } from "framer-motion";

interface BookingContextType {
  isOpen: boolean;
  openBooking: (vehicleId?: string) => void;
  closeBooking: () => void;
  selectedVehicleId?: string;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | undefined>();

  const openBooking = (vehicleId?: string) => {
    setSelectedVehicleId(vehicleId);
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
    setSelectedVehicleId(undefined);
  };

  return (
    <BookingContext.Provider value={{ isOpen, openBooking, closeBooking, selectedVehicleId }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <BookingWizard 
            isOpen={isOpen} 
            onClose={closeBooking} 
            selectedVehicleId={selectedVehicleId} 
          />
        )}
      </AnimatePresence>
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};
