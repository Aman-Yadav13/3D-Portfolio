"use client";

import { Navbar } from "@/components/Navbar";
import React, { useEffect } from "react";

const navItems = [
  {
    name: "Home",
    link: "/",
  },

  {
    name: "Work",
    link: "/work",
  },
  {
    name: "Experience",
    link: "/experience",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {};

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar navItems={navItems} />
      {children}
    </>
  );
}
