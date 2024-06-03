import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Rig({
  vec = new THREE.Vector3(),
  lights,
  matches,
}: {
  vec: THREE.Vector3;
  matches: boolean;
  lights: boolean;
}) {
  if (lights) {
    useFrame((state) => {
      state.camera.position.lerp(
        vec.set(
          matches ? 2.5 * state.pointer.x : state.pointer.x,
          6 + state.pointer.y * 0.5,
          14
        ),
        0.1
      );
      state.camera.lookAt(0, 6, 0);
    });
  }
}
