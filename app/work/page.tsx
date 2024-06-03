"use client";

import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Image, ScrollControls, useScroll } from "@react-three/drei";
import { easing } from "maath";
import "./_components/util";
import "./styles.css";
import { useMediaQuery } from "usehooks-ts";
import { Footer } from "@/components/Footer";
import BackgroundIntro from "@/components/BgLayer";
import { IntroLoader } from "@/components/IntroLoader";
import { useRouter } from "next/navigation";

const linkMappedImages: any = {
  "0": "https://learnsm.vercel.app",
  "1": "https://nexusnet.vercel.app",
  "2": "https://streampulse-sp.vercel.app",
  "3": "https://github.com/aman-yadav13/Travel-Guide",
  "4": "https://github.com/aman-yadav13/React-Admin-Portal",
  "5": "https://ay-disney-hotstar-clone.vercel.app",
  "6": "https://github.com/aman-yadav13/CampusEase",
};

const WorkPage = () => {
  const matches = useMediaQuery("(max-width: 376px)");
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <BackgroundIntro />
      <main className="h-full w-full relative bg-gray-900">
        <div className="h-[100px]" />
        <div className="top-20 left-2 absolute lg:top-10 lg:left-16 z-10 flex items-center justify-center mx-5 lg:px-36 md:py-10 md:px-32 px-2">
          <div className="flex flex-col">
            <p className="text-white font-bold lg:text-5xl md:text-4xl text-3xl">
              My{" "}
              <span className="bg-gradient-to-r from-[#cd22e6] to-[#df97e8] bg-clip-text text-transparent">
                Projects
              </span>
            </p>
            <p className="text-slate-500 lg:mt-4 mt-2 leading-relaxed text-xs md:text-lg">
              I've embarked on numerous projects throughout my time in web
              development, but these are the ones I hold closest to my heart.
              Many of them are open-source and available on my github, so if you
              come across something that piques your interest, feel free to
              explore the codebase and contribute your ideas for further
              enhancements. Your collaboration is highly valued!
            </p>
          </div>
        </div>
        <Canvas
          id="carouselCanvas"
          className={`h-screen w-full bg-transparent overflow-hidden`}
          camera={{ position: [0, 0, 50], fov: 15 }}
        >
          <color attach="background" args={["#111827"]} />
          <Suspense fallback={<IntroLoader />}>
            <fog attach="fog" args={["#a79", 8.5, 12]} />
            <ScrollControls
              pages={4}
              infinite
              style={{ scrollbarWidth: "none" }}
            >
              <Rig rotation={[0, 0, 0.15]}>
                <Carousel matches={matches} radius={matches ? 0.7 : 1.4} />
              </Rig>
            </ScrollControls>
          </Suspense>
        </Canvas>
        <Footer />
      </main>
    </>
  );
};

function Rig({
  rotation,
  children,
}: {
  rotation: [number, number, number];
  children: React.ReactNode;
}) {
  const ref = useRef<THREE.Group>(null);
  const scroll = useScroll();
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y = -scroll.offset * (Math.PI * 2);
    }
    //@ts-ignore
    state.events.update();
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
      0.3,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });
  return (
    <group ref={ref} rotation={rotation}>
      {children}
    </group>
  );
}

function Carousel({
  radius = 1.4,
  count = 7,
  matches,
}: {
  radius?: number;
  count?: number;
  matches: boolean;
}) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <Card
          matches={matches}
          index={i}
          key={i}
          url={`/assets/images/img${Math.floor(i % 7) + 1}.png`}
          //@ts-ignore
          position={[
            Math.sin((i / count) * Math.PI * 2) * radius,
            0,
            Math.cos((i / count) * Math.PI * 2) * radius,
          ]}
          rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
        />
      ))}
    </>
  );
}

function Card({
  url,
  matches,
  index,
  ...props
}: {
  url: string;
  matches: boolean;
  index: number;
}) {
  const router = useRouter();
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, hover] = useState(false);
  const currentHoveredIndex = useRef<number | null>(null);

  const pointerOver = (e: THREE.Event) => {
    //@ts-ignore
    e.stopPropagation();
    hover(true);
    currentHoveredIndex.current = index;
  };

  const pointerOut = () => {
    hover(false);
    currentHoveredIndex.current = null;
  };

  const handleCardClick = () => {
    if (currentHoveredIndex.current !== null) {
      router.push(linkMappedImages[currentHoveredIndex.current]);
    }
  };

  useFrame((state, delta) => {
    if (ref.current) {
      easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
      easing.damp(
        ref.current.material,
        "radius",
        hovered ? 0.25 : 0.1,
        0.2,
        delta
      );
      easing.damp(ref.current.material, "zoom", hovered ? 1 : 0.9, 0.2, delta);
    }
  });

  return (
    <Image
      ref={ref}
      url={url}
      transparent
      side={THREE.DoubleSide}
      onPointerOver={pointerOver}
      onClick={handleCardClick}
      onPointerOut={pointerOut}
      {...props}
    >
      <planeGeometry args={matches ? [0.6, 0.5] : [1.2, 1]} />
    </Image>
  );
}

export default WorkPage;
