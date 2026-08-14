"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Maincard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

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

    // 1 second baad message start hoga
    setTimeout(() => {
      setShowMessage(true);
    }, 1000);
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
    }, 4000);

    return () => clearInterval(interval);
  }, [isOpen]);

  return (
    <div
      className="
        w-full
        min-h-screen
        bg-no-repeat
        bg-center
        bg-fixed
        overflow-hidden
      "
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
        <div
          className="
            bg-black/50
            flex
            items-center
            justify-center
            h-screen
          "
        >
          <button
            onClick={openCard}
            className="
              px-10
              py-4
              rounded-full
              border
              border-white/30
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

      {/* ================= PHOTO ================= */}

      {isOpen && (
        <div
          className="
            relative
            flex
            items-center
            justify-center
            h-screen
            bg-black/30
          "
        >

          {/* ================= PHOTO SLIDER ================= */}

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
                max-h-[75vh]
                object-contain
                shadow-2xl
              "
            />

          </AnimatePresence>


          {/* ================= MOVIE STYLE MESSAGE ================= */}

          <AnimatePresence>

            {showMessage && (

              <motion.div

                /*
                  Message screen ke bilkul
                  bottom ke neeche se start hoga.
                */

                initial={{
                  y: "100%",
                }}

                animate={{
                  y: "-100%",
                }}

                transition={{
                  duration: 45,
                  ease: "linear",
                }}

                onAnimationComplete={() => {

                  // Message complete hone ke baad
                  // hide hoga

                  setShowMessage(false);

                  // Thoda gap ke baad
                  // dobara bottom se start hoga

                  setTimeout(() => {
                    setShowMessage(true);
                  }, 500);

                }}

                className="
                  fixed
                  left-1/2
                  -translate-x-1/2
                  bottom-0
                  w-[90%]
                  max-w-3xl
                  text-center
                  z-40
                  pointer-events-none
                "
              >

                {/* ================= TITLE ================= */}

                <h1
                  className="
                    text-4xl
                    md:text-6xl
                    font-bold
                    text-white
                    drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]
                  "
                >
                  🎂 Happy Birthday! 🎉
                </h1>


                {/* ================= FIRST MESSAGE ================= */}

                <p
                  className="
                    mt-8
                    text-xl
                    md:text-3xl
                    leading-relaxed
                    text-white
                    font-medium
                    drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]
                  "
                >
                  Wishing you a beautiful birthday
                  filled with happiness, love,
                  laughter and countless beautiful
                  moments. ❤️
                </p>


                {/* ================= WISH ================= */}

                <p
                  className="
                    mt-10
                    text-2xl
                    md:text-4xl
                    font-bold
                    text-white
                    drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]
                  "
                >
                  May all your dreams come true! ✨
                </p>


                {/* ================= SMILE ================= */}

                <p
                  className="
                    mt-10
                    text-xl
                    md:text-3xl
                    font-semibold
                    text-white
                    drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]
                  "
                >
                  Keep smiling, keep shining and
                  keep being amazing. 💖
                </p>


                {/* ================= BIRTHDAY ================= */}

                <p
                  className="
                    mt-16
                    text-3xl
                    md:text-5xl
                    font-bold
                    text-white
                    drop-shadow-[0_4px_10px_rgba(0,0,0,1)]
                  "
                >
                  ❤️ Happy Birthday ❤️
                  <br />
                  ❤️ Dear Darshana ❤️
                </p>


                {/* ================= LETTER ================= */}

                <p
                  className="
                    mt-10
                    text-xl
                    md:text-3xl
                    leading-relaxed
                    text-white
                    font-medium
                    drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]
                  "
                >
                  Dear Darshana, ❤️

                  <br />
                  <br />

                  Some people make ordinary moments
                  special just by being there.
                  You are one of those people in my life.
                </p>


                {/* ================= MEMORIES ================= */}

                <p
                  className="
                    mt-8
                    text-xl
                    md:text-3xl
                    leading-relaxed
                    text-white
                    font-medium
                    drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]
                  "
                >
                  Thank you for all the smiles,
                  memories, silly jokes and beautiful
                  moments. 🫶

                  <br />
                  <br />

                  I wish you endless happiness,
                  success, love and countless reasons
                  to smile. ✨

                  <br />
                  <br />

                  Never stop shining and always stay
                  the amazing person you are. 💖
                </p>


                {/* ================= FINAL BIRTHDAY ================= */}

                <p
                  className="
                    mt-16
                    text-3xl
                    md:text-5xl
                    font-bold
                    text-white
                    drop-shadow-[0_4px_10px_rgba(0,0,0,1)]
                  "
                >
                  Happy Birthday, Darshana! 🎂❤️
                </p>


                {/* ================= FINAL WISH ================= */}

                <p
                  className="
                    mt-8
                    text-xl
                    md:text-3xl
                    leading-relaxed
                    text-white
                    font-medium
                    drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]
                  "
                >
                  Stay happy.
                  <br />
                  Stay blessed.
                  <br />
                  Stay amazing. 🌸
                </p>


                {/* ================= SIGNATURE ================= */}

                <p
                  className="
                    mt-16
                    text-3xl
                    md:text-5xl
                    font-bold
                    text-white
                    drop-shadow-[0_4px_10px_rgba(0,0,0,1)]
                  "
                >
                  With lots of best wishes,
                  <br />
                  Your Best Friend ❤️Nishan
                </p>


                {/* Extra space */}

                <div className="h-[40vh]" />

              </motion.div>

            )}

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