"use client";

import { FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface startInfoInterface {
  lights: Boolean;
  onClick: () => void;
  matches: boolean;
  globalLights: boolean;
}

export const StartInfo = ({
  onClick,
  lights,
  matches,
  globalLights,
}: startInfoInterface) => {
  const startVariants = {
    start: {
      x: matches ? "-100vw" : "-30vw",
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
    end: {
      x: "0",
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };

  return (
    <>
      {!globalLights && (
        <motion.div
          className="top-5 left-20 absolute lg:top-8 lg:left-8 z-10 flex items-center justify-center mx-5"
          variants={startVariants}
          initial="start"
          animate={lights ? "start" : "end"}
        >
          <div className="relative flex text-white flex-col justify-center items-center gap-3 max-w-2xl neo-brutalism-blue md:pt-4 md:pb-4 py-2 px-4 md:px-8 rounded-md bg-blue-600">
            <p className="font-medium md:text-xl text-center text-xs">
              Seems like it's too dark.
            </p>
            <button
              className="px-4 py-2 w-fit flex items-center gap-2 rounded-md bg-blue-500"
              onClick={onClick}
            >
              <p className="text-xs md:text-xl">Turn on lights</p>
              <FaLightbulb color="yellow" />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};
