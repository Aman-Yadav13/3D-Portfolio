import { LitUpBorderButton } from "@/components/ui/LitUpBorderButton";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { useModal } from "@/hooks/useModal";
import { motion } from "framer-motion";

export const Stage2 = ({
  currentStage,
  matches,
}: {
  currentStage: number | null;
  matches: boolean;
}) => {
  const { onOpen, onClose } = useModal();

  const handleDownloadClick = () => {
    onOpen("resumeDownloaded");
    const link = document.createElement("a");
    link.href = "/assets/aman_yadav_resume.pdf";
    link.download = "Aman_Yadav_Resume.pdf";
    link.click();
  };

  return (
    <motion.div
      initial={!matches && { y: "100%", x: "-25vw", opacity: 0 }}
      //@ts-ignore
      whileInView={!matches && { y: "0", x: "-25vw", opacity: 1 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      className="absolute top-[40%] left-[50%] min-w-[80vw] md:min-w-fit md:top-[25%] md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%] -translate-x-[50%] -translate-y-[50%] z-[1000] "
    >
      <div className="flex items-center px-1 py-1 md:px-8 md:py-4 pb-4 info-box rounded-md border transition-all">
        <div className="flex flex-col select-none relative">
          <p className="text-white font-semibold text-md md:text-3xl text-center">
            Hi, I am <span className="text-lime-300">Aman</span>
          </p>
          <p className="text-white text-lg">
            <TextGenerateEffect
              words="A Web Enthusiast from India. As a web developer in the early
                stages of my career, I bring a strong adaptability to both
                independent learning and collaborative environments."
              className="text-center"
            />
          </p>
          <LitUpBorderButton
            text={"Download Resume"}
            onClick={handleDownloadClick}
            className="cursor-pointer"
          />
        </div>
      </div>
    </motion.div>
  );
};
