"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Maincard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const audioRef = useRef(null);

  // ================= PHOTOS =================
  const photos = [
    "/images/bg4.png",
    "/images/bg5.jpeg",
    "/images/bg6.jpeg",
    "/images/bg7.jpeg",
  ];

  // ================= OPEN CARD =================
  const openCard = () => {
    setIsOpen(true);

    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play();
    }
  };

  // ================= PHOTO SLIDER =================
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setCurrentPhoto((prev) => {
        if (prev === photos.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 4000); // 4 second baad next photo

    return () => clearInterval(interval);
  }, [isOpen, photos.length]);

  return (
    <div
      className="w-full min-h-screen bg-no-repeat bg-center bg-fixed"
      style={{
        backgroundImage: "url('/images/bg1.png')",
        backgroundSize: "100% 100%",
      }}
    >
      {/* ================= AUDIO ================= */}

      <audio
        ref={audioRef}
        src="/music/bd.mp3"
        loop
      />

      {/* ================= OPEN BUTTON ================= */}

      {!isOpen && (
        <div className="bg-black/50 flex items-center justify-center h-screen">

          <button
            onClick={openCard}
            className="
              px-10 py-4
              rounded-full
              border border-white/30
              bg-white/10
              backdrop-blur-xl
              text-white
              text-xl
              font-semibold
              shadow-2xl
              hover:bg-white/20
              hover:scale-110
              transition-all
              duration-300
              cursor-pointer
            "
          >
            OPEN
          </button>

        </div>
      )}

      {/* ================= PHOTO SLIDESHOW ================= */}

      {isOpen && (
        <div className="bg-black/30 flex items-center justify-center h-screen">

          <AnimatePresence mode="wait">

            <motion.img
              key={currentPhoto}
              src={photos[currentPhoto]}
              alt="Birthday Girl"
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 1.05,
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="
                max-w-[85%]
                max-h-[80vh]
                object-contain
                shadow-2xl
              "
            />

          </AnimatePresence>

        </div>
      )}

      {/* ================= FLOWER SHOWER ================= */}

      {isOpen && (
        <DotLottieReact
          src="https://lottie.host/577a639a-d5d6-4107-9f6b-8a601b772fe5/hEXNKn4fUY.lottie"
          loop
          autoplay
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 50,
            pointerEvents: "none",
            opacity: 0.8,
          }}
        />
      )}
    </div>
  );
};

export default Maincard;