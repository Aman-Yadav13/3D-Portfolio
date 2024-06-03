import { cn } from "@/lib/utils/cn";
import Link from "next/link";

interface NavbarProps {
  navItems: {
    name: string;
    link: string;
  }[];
}

export const Navbar = ({ navItems }: NavbarProps) => {
  return (
    <div
      className="fixed top-6 right-[50%] translate-x-[50%] z-[5000] px-4 py-2 rounded-md"
      style={{ backgroundColor: "rgb(4,7,29)" }}
    >
      <div className="flex items-center justify-center gap-4">
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-neutral-50 items-center flex space-x-1  hover:text-neutral-300 "
            )}
          >
            <span className="text-sm lg:text-xl">{navItem.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
