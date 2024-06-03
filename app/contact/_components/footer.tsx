import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 h-auto w-full">
      <div className="flex lg:flex-row flex-col items-center lg:justify-between md:px-48 px-2 py-4 gap-2 md:pt-6 md:text-lg text-sm text-white opacity-90">
        <p>© 2024 Aman Yadav. All rights reserved.</p>
        <div className="flex gap-3 justify-center items-center">
          <Link key={1} href={"/contact"} target="_blank">
            <img
              src={"/assets/svgs/contact.svg"}
              alt={"contact"}
              className="w-6 h-6 object-contain"
            />
          </Link>
          <Link
            key={2}
            href={"https://github.com/aman-yadav13"}
            target="_blank"
          >
            <img
              src={"/assets/svgs/github.svg"}
              alt={"github"}
              className="w-6 h-6 object-contain"
            />
          </Link>
          <Link key={3} href={"https://linkedin.com"} target="_blank">
            <img
              src={"/assets/svgs/linkedin.svg"}
              alt={"linkedIn"}
              className="w-6 h-6 object-contain"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};
