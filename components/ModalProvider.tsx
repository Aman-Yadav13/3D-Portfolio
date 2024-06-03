"use client";

import { useEffect, useState } from "react";
import { ResumeModal } from "./modals/ResumeModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ResumeModal />
    </>
  );
};
