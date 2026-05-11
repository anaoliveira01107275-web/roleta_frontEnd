"use client";

import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import Confetti from "react-confetti";

export default function Home() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const data = [
    { option: "Ana" },
    { option: "João" },
    { option: "Maria" },
    { option: "Carlos" },
    { option: "Julia" },
    { option: "Pedro" },
    { option: "Fernanda" },
    { option: "Lucas" },
  ];

  function girarRoleta() {
    const numeroAleatorio = Math.floor(Math.random() * data.length);

    setPrizeNumber(numeroAleatorio);
    setMustSpin(true);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-10 relative">

    
      <div className="absolute w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl top-0 left-0"></div>
      <div className="absolute w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-3xl bottom-0 right-0"></div>

      
      {showConfetti && <Confetti />}

     
      <h1 className="text-6xl font-black text-yellow-400 drop-shadow-[0_0_15px_gold] animate-pulse mb-10 z-10 text-center">
        👀 ROLETA 
      </h1>

      
      <div className="relative bg-black/40 border-4 border-yellow-400 backdrop-blur-xl p-10 rounded-full shadow-[0_0_60px_rgba(255,215,0,0.6)] z-10">

        
        <div className="absolute inset-0 rounded-full border-[6px] border-transparent border-t-yellow-300 animate-spin"></div>

       
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={[
            "#ef4444",
            "#3b82f6",
            "#22c55e",
            "#f59e0b",
            "#ec4899",
            "#8b5cf6",
          ]}
          textColors={["#ffffff"]}
          outerBorderColor="#facc15"
          outerBorderWidth={12}
          radiusLineColor="#ffffff"
          radiusLineWidth={3}
          innerBorderColor="#facc15"
          innerBorderWidth={6}
          fontSize={17}
          spinDuration={0.8}
          onStopSpinning={() => {
            setMustSpin(false);

            setShowConfetti(true);

            setTimeout(() => {
              setShowConfetti(false);
            }, 5000);
          }}
        />
      </div>

    
      <button
        onClick={girarRoleta}
        disabled={mustSpin}
        className="mt-10 bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 hover:scale-110 disabled:opacity-50 disabled:hover:scale-100 text-black font-black text-2xl px-10 py-5 rounded-2xl shadow-[0_0_30px_gold] transition-all duration-300 z-10"
      >
        {mustSpin ? "GIRANDO..." : "🎡 GIRAR ROLETA"}
      </button>

      
      {!mustSpin && (
        <div className="mt-8 bg-black/40 border border-yellow-400 px-8 py-4 rounded-2xl backdrop-blur-md shadow-[0_0_20px_rgba(255,215,0,0.5)] z-10">
          <p className="text-white text-3xl font-bold text-center">
            🎉 Resultado:
          </p>

          <p className="text-yellow-300 text-5xl font-black text-center mt-2 drop-shadow-[0_0_15px_gold]">
            {data[prizeNumber].option}
          </p>
        </div>
      )}
    </div>
  );
}