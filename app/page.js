"use client";

import { useRef, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Maincard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  const openCard = () => {
    setIsOpen(true);

    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play();
    }
  };

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
        <div className="bg-black/50 flex flex-col items-center justify-center h-screen">

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
              hover:scale-105
              transition-all
              duration-300
              cursor-pointer
            "
          >
            OPEN CARD
          </button>

        </div>
      )}

      {/* ================= CARD ================= */}
      {isOpen && (
        <div className="bg-black/50 flex flex-col items-center justify-center h-screen">

          <div
            className="
              w-[90%]
              max-w-4xl
              rounded-3xl
              border border-white/20
              bg-white/10
              p-10
              backdrop-blur-xl
              shadow-2xl
            "
          >
            <h1 className="text-4xl font-bold text-white">
              Your Content
            </h1>

            <p className="mt-4 text-white/80">
              This is your glassmorphism card.
            </p>

          </div>

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