import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";

function CameraLookAt({ targetPosition }: { targetPosition: THREE.Vector3 }) {
  const { camera } = useThree();
  useFrame(() => {
    camera.lookAt(targetPosition.x, targetPosition.y, targetPosition.z);
  });
  return null;
}

export default function CameraAnimation({
  lights,
  globalLights,
}: {
  lights: boolean;
  globalLights: boolean;
}) {
  const { camera } = useThree();
  const [targetPosition, setTargetPosition] = useState(
    new THREE.Vector3(0, 0, 0)
  );
  const progressRef = useRef({ progress: 0 });

  useEffect(() => {
    if (lights && !globalLights) {
      const totalDuration = 5;

      const updateCameraPosition = () => {
        const { progress } = progressRef.current;
        const angle = progress * Math.PI;
        const radius = 10 * (1 - progress);
        camera.position.set(
          -10 + progress * 10 + Math.cos(angle) * radius,
          10 - 4 * progress,
          4 + progress * 11 + Math.sin(angle) * radius
        );
        camera.updateProjectionMatrix();
      };

      gsap.to(progressRef.current, {
        progress: 1,
        duration: totalDuration,
        ease: "power1.inOut",
        onUpdate: updateCameraPosition,
      });

      gsap.to(targetPosition, {
        x: 0,
        y: 6,
        z: 0,
        duration: totalDuration,
        ease: "power1.inOut",
        onUpdate: () => setTargetPosition(targetPosition.clone()),
      });
    }
  }, [lights, camera]);

  return (
    <>
      <perspectiveCamera
        position={[-8, 10, 10]}
        fov={75}
        aspect={window.innerWidth / window.innerHeight}
        near={0.1}
        far={1000}
      />
      <CameraLookAt targetPosition={targetPosition} />
    </>
  );
}
