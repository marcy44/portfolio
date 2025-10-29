import { useEffect, useState } from "react";

const NameAnimation = ({ onFinish }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [];

    
    timers.push(setTimeout(() => setStep(1), 300)); 

    timers.push(setTimeout(() => setStep(2), 2000));

    timers.push(setTimeout(() => setStep(3), 3500));

    timers.push(setTimeout(() => onFinish && onFinish(), 5500));

    return () => timers.forEach(clearTimeout);
  }, [onFinish]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black overflow-hidden">
      <h1
        className={`
          text-[4rem] sm:text-[5rem] md:text-[6rem] font-light
          text-[#f9f7f3] select-none
          transition-all duration-[2000ms] ease-[cubic-bezier(0.45,0,0.55,1)]
          ${step === 0 ? "opacity-80 scale-[1.6] tracking-[1em]" : ""}
          ${step === 1 ? "opacity-100 scale-[1] tracking-[0.5em]" : ""}
          ${step === 3 ? "opacity-0 scale-[0.9] duration-[2000ms]" : ""}
        `}
      >
        Marcy&nbsp;Sabry
      </h1>

      <div className="relative mt-2 h-[2px] w-[100%] flex justify-center">
        <div
          className={`
            h-[2px] bg-[#8C867A] rounded-sm
            transition-all duration-[1200ms] ease-[cubic-bezier(0.45,0,0.55,1)]
            ${step < 2 ? "w-0" : "w-[14ch]"}
          `}
        />

        <div
          className={`
            absolute h-[2px] bg-[#8C867A] top-0 left-1/2 -translate-x-1/2
            transition-all duration-[2000ms] ease-[cubic-bezier(0.45,0,0.55,1)]
            ${step >= 2 ? "w-[100vw]" : "w-0"}
          `}
        />
      </div>
    </div>
  );
};

export default NameAnimation;
