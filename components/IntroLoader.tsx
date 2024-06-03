"use client";

import { Html } from "@react-three/drei";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const IntroLoader = () => {
  const [introTimer, setIntroTimer] = useState(false);
  useEffect(() => {
    setTimeout(() => setIntroTimer(true), 2000);
  });

  return (
    <>
      {introTimer ? (
        <Html>
          <div className="-translate-x-[50%] -translate-y-[50%] w-full flex items-center justify-center bg-gray-900">
            <div className="w-20 h-20 border-4 border-opacity-50 border-blue-500 border-t-blue-800 rounded-full animate-spin"></div>
          </div>
        </Html>
      ) : null}
    </>
  );
};
