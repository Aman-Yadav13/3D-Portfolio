"use client";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import React, { useEffect } from "react";

const navItems = [
  {
    name: "Home",
    link: "/",
  },

  {
    name: "About",
    link: "/about",
  },
  {
    name: "Work",
    link: "/work",
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
      <FloatingNav navItems={navItems} />

      {children}
    </>
  );
}
