// page.tsx
"use client";

import { useTexture } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Destiny_Island } from "@/models/Destiny_Island";
import * as THREE from "three";
import { Stages } from "./_components/Stages";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import {
  IoIosCloseCircleOutline,
  IoIosInformationCircleOutline,
} from "react-icons/io";

import "./styles.css";
import { cn } from "@/lib/utils/cn";
import { IoClose } from "react-icons/io5";
import { useMediaQuery } from "usehooks-ts";
import { IntroLoader } from "@/components/IntroLoader";
import BackgroundIntro from "@/components/BgLayer";

function CameraLookAt({ targetPosition }: { targetPosition: THREE.Vector3 }) {
  const { camera } = useThree();
  useFrame(() => {
    camera.lookAt(targetPosition.x, targetPosition.y, targetPosition.z);
  });
  return null;
}

function RotatingEnvironment() {
  const environmentRef = useRef<THREE.Mesh>(null);
  const texture = useTexture("/assets/images/neonbg3.jpg");

  useEffect(() => {
    if (!texture) {
      console.error("Texture failed to load");
    } else {
      console.log("Texture loaded successfully", texture);
    }
  }, [texture]);

  useFrame(() => {
    if (environmentRef.current) {
      environmentRef.current.rotation.y += 0.002; // Adjust the speed as needed
      environmentRef.current.rotation.x += 0.002; // Adjust the speed as needed
      environmentRef.current.rotation.z += 0.002; // Adjust the speed as needed
    }
  });

  if (!texture) {
    return null; // Return null if the texture is not loaded
  }

  return (
    <mesh ref={environmentRef}>
      <sphereGeometry args={[50, 60, 40]} />
      <shaderMaterial
        uniforms={{
          texture1: { value: texture },
          resolution: {
            value: new THREE.Vector2(window.innerWidth, window.innerHeight),
          },
          direction: { value: new THREE.Vector2(1.0, 0.0) },
          radius: { value: 10.0 },
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D texture1;
  uniform vec2 resolution;
  uniform vec2 direction;
  uniform float radius;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    vec4 sum = vec4(0.0);
    float blurRadius = radius / resolution.x;
    vec2 texOffset = direction * blurRadius;

    for (float i = -4.0; i <= 4.0; i++) {
      sum += texture2D(texture1, uv + texOffset * i) * 0.111;
    }
    
    gl_FragColor = sum;
  }
`;

const AboutPage = () => {
  const [currentStage, setCurrentStage] = useState<number | null>(null);
  const [isRotating, setIsRotating] = useState(false);
  const [eventSource, setEventSource] = useState<HTMLElement | null>(null);
  const [leftKey, setLeftKey] = useState(false);
  const [rightKey, setRightKey] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const matches = useMediaQuery("(max-width: 376px)");

  const handleKeyDown = (event: any) => {
    if (event.key === "ArrowLeft") {
      setLeftKey(true);
    } else if (event.key === "ArrowRight") {
      setRightKey(true);
    } else {
    }
  };

  const handleKeyUp = (event: any) => {
    if (event.key === "ArrowLeft") {
      setLeftKey(false);
    } else if (event.key === "ArrowRight") {
      setRightKey(false);
    } else {
    }
  };

  const handleInfoClick = () => {
    setShowInfo((prevInfo) => !prevInfo);
  };

  const handleClose = () => {
    setShowInfo(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setEventSource(document.getElementById("root"));
    }
  }, []);

  return (
    <>
      <BackgroundIntro />
      <main className="h-full w-full relative bg-gray-900">
        <div
          className={cn(
            "absolute top-2 left-2 md:left-4 md:top-4 z-[3000] cursor-pointer",
            !showInfo && "animate-growShrink"
          )}
          onClick={handleInfoClick}
        >
          <IoIosInformationCircleOutline size={25} fill={"white"} />
        </div>
        {showInfo && (
          <div className="absolute top-8 left-8 md:left-10 md:top-10 rounded-md md:px-4 md:py-2 py-2 px-3 z-[5001] bg-purple-700 max-w-[70vw] md:max-w-[250px] text-sm md:text-lg text-white">
            <IoClose
              onClick={handleClose}
              size={20}
              fill={"white"}
              className="absolute right-0 top-0 z-[2001] cursor-pointer hover:scale-[1.1]"
            />
            Explore the island and find out the secrets about me!
          </div>
        )}
        {!matches && (
          <div className="absolute top-2 left-2 md:top-12 md:left-16 z-[3000] flex items-center justify-between gap-6">
            <FaArrowLeft
              size={leftKey ? 50 : 40}
              fill={leftKey ? "#067b7c" : "white"}
              className={cn("transition-all duration-100")}
            />
            <FaArrowRight
              size={rightKey ? 50 : 40}
              fill={rightKey ? "#067b7c" : "white"}
              className="transition-all duration-100"
            />
          </div>
        )}
        <Stages currentStage={currentStage} matches={matches} />
        <div className="h-full w-full relative cursor-grab">
          <Canvas
            camera={{
              position: [14, 2.5, -5],
              fov: 15,
              near: 0.1,
              far: 1000,
            }}
            shadows
            eventSource={eventSource!}
            eventPrefix="client"
            className="bg-transparent h-screen w-full"
          >
            <Suspense fallback={<IntroLoader />}>
              <ambientLight intensity={0.1} />
              <spotLight position={[50, 25, 50]} color={"#000000"} />
              <directionalLight position={[100, 100, 100]} color={"#de17e8"} />
              <pointLight position={[100, 100, 100]} color={"#de17e8"} />
              <directionalLight
                position={[-100, 100, -100]}
                color={"#7d1ae5"}
              />
              <pointLight position={[-100, 100, -100]} color={"#7d1ae5"} />
              <directionalLight position={[10, 50, 100]} color={"#82e51a"} />
              <pointLight position={[10, 50, 100]} color={"#82e51a"} />

              {/* Rotating Environment */}
              <RotatingEnvironment />

              <Destiny_Island
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage}
                //@ts-ignore
                castShadow
                receiveShadow
              />
              <CameraLookAt targetPosition={new THREE.Vector3(0, 2, 0)} />
            </Suspense>
          </Canvas>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
