"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface BookingModalOptions {
  initialRoomId?: string;
  initialProcedureId?: string;
}

interface BookingContextValue {
  isOpen: boolean;
  selectedRoomId: string;
  selectedProcedures: string[];
  openBookingModal: (options?: BookingModalOptions) => void;
  closeBookingModal: () => void;
  setRoomAndProcedure: (roomId: string, procedureName?: string) => void;
}

const BookingContext = createContext<BookingContextValue | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string>("sala-01");
  const [selectedProcedures, setSelectedProcedures] = useState<string[]>([]);

  const openBookingModal = useCallback((options?: BookingModalOptions) => {
    if (options?.initialRoomId) {
      setSelectedRoomId(options.initialRoomId);
    }
    if (options?.initialProcedureId) {
      setSelectedProcedures([options.initialProcedureId]);
    }
    setIsOpen(true);
  }, []);

  const closeBookingModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const setRoomAndProcedure = useCallback((roomId: string, procedureName?: string) => {
    setSelectedRoomId(roomId);
    if (procedureName) {
      setSelectedProcedures((prev) =>
        prev.includes(procedureName) ? prev : [...prev, procedureName]
      );
    }
  }, []);

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        selectedRoomId,
        selectedProcedures,
        openBookingModal,
        closeBookingModal,
        setRoomAndProcedure,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return ctx;
}
