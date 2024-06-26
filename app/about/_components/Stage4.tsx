import { LitUpBorderButton } from "@/components/ui/LitUpBorderButton";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { useModal } from "@/hooks/useModal";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const Stage4 = ({
  currentStage,
  matches,
}: {
  currentStage: number | null;
  matches: boolean;
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/contact");
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
            Ready to Innovate and{" "}
            <span className="text-lime-300">Collaborate</span>
          </p>
          <p className="text-white text-lg">
            <TextGenerateEffect
              words="As I look forward to the next steps in my career, I am eager to collaborate with dynamic teams to develop cutting-edge applications. I believe in the power of teamwork and continuous learning to drive innovation and achieve remarkable results. Let's connect and create something amazing together!"
              className="text-center"
            />
          </p>
          <LitUpBorderButton
            onClick={handleClick}
            text="Let's Connect"
            className="cursor-pointer"
          />
        </div>
      </div>
    </motion.div>
  );
};
