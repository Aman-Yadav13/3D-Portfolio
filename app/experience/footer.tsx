import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 md:h-[40vh] h-auto w-full mt-16">
      <hr className="bg-gray-500 w-[80vw] mx-auto" />
      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-2 md:px-48 px-2 py-8 md:py-16">
        <div className="flex flex-col items-center text-white lg:font-semibold text-lg font-semibold lg:text-3xl opacity-80">
          <p className="">Have a project in mind?</p>
          <p>Let's build something together.</p>
        </div>
        <button className="mt-2 md:mt-0 flex items-center justify-center px-2 py-2 md:px-4 md:py-2 bg-blue-700 rounded-md text-white font-semibold text-sm md:text-md w-fit md:hover:scale-105 md:transition-all md:duration-200">
          <Link className="text-white" href={"/contact"}>
            Contact
          </Link>
        </button>
      </div>
      <hr className="bg-gray-500 w-[80vw] mx-auto md:mt-8 mt-4" />
      <div className="flex lg:flex-row flex-col items-center lg:justify-between md:px-48 px-2 py-4 gap-2 md:py-6 md:text-lg text-sm text-white opacity-90">
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
