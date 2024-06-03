"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const BackgroundIntro = ({ loading = false }: { loading?: boolean }) => {
  const pathname = usePathname();
  const [title, setTitle] = useState("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setAnimate(true);
    }, 800);
    setTimeout(() => {
      document.body.style.overflow = "visible";
    }, 2000);
  });

  useEffect(() => {
    const segments = pathname.split("/");
    const lastSegment = segments.filter(Boolean).pop();
    setTitle(lastSegment || "HOME");
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {loading ? (
          <div className="absolute inset-0 h-screen bg-black w-full z-[5000] text-white"></div>
        ) : animate ? null : (
          <motion.div
            initial={{ y: 0 }}
            exit={{
              y: "-120vh",
              transition: {
                type: "tween",
                duration: 0.7,
                delay: 0.5,
              },
            }}
            className="absolute inset-0 h-screen w-full bg-black flex items-center justify-center z-[5000] text-white"
          >
            <p className="lg:text-6xl md:text-5xl text-4xl uppercase">
              {title}
            </p>
            <div className="absolute -bottom-[90px] left-0 w-full overflow-hidden leading-none z-[90]">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="relative block w-[calc(100%+1.3px)] h-[96px]"
                style={{
                  filter: "drop-shadow(5px 5px 5px rgba(17, 24, 39, 0.5))",
                }}
              >
                <path
                  d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default BackgroundIntro;
