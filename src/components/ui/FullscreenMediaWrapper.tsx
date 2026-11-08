"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface FullscreenMediaWrapperProps {
  children: React.ReactNode;
  src: string;
  type: "image" | "video";
  className?: string;
}

export function FullscreenMediaWrapper({
  children,
  src,
  type,
  className = "",
}: FullscreenMediaWrapperProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Escape key handler
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    },
    []
  );

  // Scroll lock + keyboard listener — only when modal is open
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const handleOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(true);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={handleOpen} className={`cursor-zoom-in ${className}`}>
        {children}
      </div>

      {/* Lazy Portal — only mounts when isOpen is true */}
      {isOpen &&
        typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 md:p-8"
              onClick={handleClose}
            >
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[10000]"
                aria-label="Fechar visualização (Esc)"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {type === "video" ? (
                  <video
                    src={src}
                    autoPlay
                    controls
                    playsInline
                    className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain outline-none ring-0"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={src}
                    alt="Visualização em tela cheia"
                    className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
                  />
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
