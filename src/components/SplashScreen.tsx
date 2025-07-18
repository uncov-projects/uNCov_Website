import React, { useEffect, useState } from "react";

const SplashScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 2500); // total 2.5 seconds splash (1s blank + 1.5s animation)

    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center animate-fadeIn">
        <img
          src="/public/Logo.png"
          alt="Uncov Logo"
          className="w-20 h-20 animate-bounce"
        />
        <h1 className="text-3xl font-bold text-gray-800 mt-4 animate-slideIn">
          Uncov.com
        </h1>
      </div>
    </div>
  );
};

export default SplashScreen;
