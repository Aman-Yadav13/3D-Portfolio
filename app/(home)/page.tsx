"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { WaterPass } from "three-stdlib";
import { RoundedBoxGeometry } from "three-stdlib";

import { useLights } from "@/hooks/useLights";
import { geometry } from "maath";

import { StartInfo } from "@/app/(home)/_components/StartInfo";
import { BlueRoom } from "@/models/BlueRoom";
import CameraAnimation from "@/app/(home)/_components/AnimatedCamera";
import Portal from "@/app/(home)/_components/Portal";
import Rig from "@/app/(home)/_components/Rig";
import IntroText from "@/app/(home)/_components/IntroText";
import { useMediaQuery } from "usehooks-ts";
import BackgroundIntro from "@/components/BgLayer";
import { IntroLoader } from "@/components/IntroLoader";

extend(geometry);

extend({ RoundedBoxGeometry });
extend({ WaterPass });

export default function HomePage() {
  const matches = useMediaQuery("(max-width: 1024px)");
  const { globalLightsOn, globalLights, lights, lightsOn, lightsOff } =
    useLights((state) => state);
  const [delayedLights, setDelayedLights] = useState(false);
  const [eventSource, setEventSource] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setEventSource(document.getElementById("root"));
    }
  }, []);

  useEffect(() => {
    if (lights) {
      const timer = setTimeout(
        () => setDelayedLights(true),
        !globalLights ? 4500 : 1000
      );
      return () => clearTimeout(timer);
    } else {
      setDelayedLights(false);
    }
  }, [lights]);

  const positionSpring = useSpring({
    position: delayedLights ? [0, 0, 0] : [0, -10, 0],
    config: { mass: 1, tension: 120, friction: 40 },
  });

  const toggleLights = () => {
    lightsOn();
    setTimeout(() => {
      globalLightsOn();
    }, 6500);
  };

  return (
    <>
      <BackgroundIntro />
      <main
        style={{
          background: "radial-gradient(at center bottom, #050504, #0F1012)",
        }}
        className="w-full h-screen relative"
      >
        <StartInfo
          onClick={toggleLights}
          lights={lights}
          matches={matches}
          globalLights={globalLights}
        />
        <Canvas
          eventSource={eventSource!}
          eventPrefix="client"
          className="w-full h-screen bg-transparent"
          camera={{
            position: [-10, 12, 35],
            near: 0.1,
            far: 1000,
          }}
        >
          <color attach="background" args={["#050504"]} />
          <Suspense fallback={<IntroLoader />}>
            <CameraAnimation lights={lights} globalLights={globalLights} />
            {lights && (
              <>
                <ambientLight intensity={0.5} />
                <directionalLight position={[100, 100, 100]} />
              </>
            )}
            <BlueRoom lights={lights} globalLights={globalLights} />
            {delayedLights && (
              <>
                {/* @ts-ignore */}
                <animated.group position={positionSpring.position}>
                  <Portal
                    id="experience"
                    name={`Experience`}
                    bg="#e4cdac"
                    lights={lights}
                    imgUrl="/assets/images/experience.jpg"
                    // @ts-ignore
                    position={[-2, 5, 10]}
                    height={2.4}
                    width={1.6}
                    rotation={[0, 0.5, 0]}
                  ></Portal>
                  <Portal
                    bg="#d1d1ca"
                    id="about"
                    name="About"
                    height={2.4}
                    imgUrl="/assets/images/about.jpg"
                    lights={lights}
                    width={1.6}
                    // @ts-ignore
                    position={[0, 5, 10]}
                  ></Portal>
                  <Portal
                    id="work"
                    name="Work"
                    lights={lights}
                    imgUrl="/assets/images/work.jpg"
                    height={2.4}
                    width={1.6}
                    bg="#d1d1ca"
                    // @ts-ignore
                    position={[2, 5, 10]}
                    rotation={[0, -0.5, 0]}
                  ></Portal>
                  <IntroText />
                </animated.group>
              </>
            )}

            {/* @ts-ignore */}
            <Rig lights={lights} matches={matches} />
          </Suspense>
        </Canvas>
      </main>
    </>
  );
}
