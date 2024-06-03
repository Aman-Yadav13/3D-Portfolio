"use client";

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-screen bg-gray-900 flex flex-col space-y-4 items-center justify-center text-slate-200">
      <p className="text-sm lg:text-xl">Something went wrong!</p>
      <button className="px-4 py-2 rounded-md bg-teal-800">
        <Link href="/">Go back home</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
