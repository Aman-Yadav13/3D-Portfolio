import React from "react";
import { useModal } from "@/hooks/useModal";
import Lottie from "react-lottie";
import animationData from "../../public/assets/yellow_tick.json";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const ResumeModal = () => {
  const { isOpen, onOpen, onClose } = useModal();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed h-full w-full bg-opacity-60 bg-transparent z-[2000] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex items-center justify-center bg-slate-800 transition-all">
      <div className="relative h-fit w-fit px-6 py-4 modal-box rounded-lg border">
        <div className="flex flex-row items-center gap-2">
          <Lottie options={defaultOptions} height={75} width={75} />
          <p className="text-white text-xl font-semibold ">
            Thank you for downloading, will love to work together.
            <br /> Meanwhile keep exploring.
          </p>
        </div>

        <IoIosCloseCircleOutline
          onClick={onClose}
          size={25}
          fill={"white"}
          className="absolute right-0 top-0 translate-x-[50%] -translate-y-[50%] z-[2001] cursor-pointer"
        />
      </div>
      {/* <div className="bg-white p-4 rounded shadow-md">
        <Lottie options={defaultOptions} height={400} width={400} />
        <button
          className="mr-2 px-4 py-2 bg-gray-300 rounded"
          onClick={onClose}
        >
          Cancel
        </button>
      </div> */}
    </div>
  );
};
