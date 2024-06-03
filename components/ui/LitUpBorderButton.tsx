import { cn } from "@/lib/utils/cn";

interface LitUpBorderButtonProps {
  className?: string;
  text: string;
  onClick?: () => void;
}

export const LitUpBorderButton = ({
  text,
  className,
  onClick,
}: LitUpBorderButtonProps) => {
  return (
    <button
      className="p-[3px] absolute -bottom-8 left-[50%] -translate-x-[50%] -md:-bottom-12 md:left-[50%] md:translate-y-[50%] md:-translate-x-[50%]"
      onClick={onClick}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg",
          className
        )}
      />
      <div className="md:px-8 md:py-2 py-1 px-2 bg-indigo-800 rounded-[6px] text-xs font-semibold md:font-semibold md:text-xl relative group transition duration-200 text-white hover:bg-transparent">
        {text}
      </div>
    </button>
  );
};
