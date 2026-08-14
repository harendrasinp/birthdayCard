"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const Maincard = () => {

  return (
    <div
      className="w-full bg-no-repeat bg-center bg-fixed"
      style={{
        backgroundImage: "url('/images/bg1.png')",
        minHeight: "100vh",
        height: "100%",
        backgroundSize: "100% 100%",
      }}
    ><div className="bg-black/5 backdrop-blur-sm flex flex-col items-center justify-center h-screen">

    </div>
      {/* ----------------------------flower shawer----------------------------- */}
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
  
    </div>
  )
};

export default Maincard;