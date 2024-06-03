//@ts-nocheck
"use client";

import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three"; // Add this import
import { Material } from "three";

interface BlueRoomProps {
  lights: boolean;
  globalLights: boolean;
}

export function BlueRoom({ lights, globalLights }: BlueRoomProps) {
  const { nodes, materials } = useGLTF(
    "/assets/3d/scifi_tron_studio__baked.glb"
  );

  // Define a spring for opacity
  const { opacity } = useSpring({
    opacity: lights ? 1 : 0.01,
    config: { duration: 500 },
  });

  useEffect(() => {
    if (!lights && !globalLights) {
      Object.values(materials).forEach((material: Material) => {
        material.transparent = true;
        material.opacity = 0.01;
      });
    }
  }, [materials]);
  return (
    <group dispose={null}>
      <group scale={0.01}>
        <group
          position={[0, 122.556, -99.564]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[237.378, 243.106, 10.544]}
        >
          <animated.mesh // Use animated.mesh for the transition
            castShadow
            receiveShadow
            geometry={nodes.stage_stage5_0.geometry}
            material={materials.stage5}
            material-opacity={opacity} // Apply the spring opacity
          />
          <animated.mesh
            castShadow
            receiveShadow
            geometry={nodes.stage_stage2_0.geometry}
            material={materials.stage2}
            material-opacity={opacity}
          />
          <animated.mesh
            castShadow
            receiveShadow
            geometry={nodes.stage_stage3_0.geometry}
            material={materials.stage3}
            material-opacity={opacity}
          />
          <animated.mesh
            castShadow
            receiveShadow
            geometry={nodes.stage_stage1_0.geometry}
            material={materials.stage1}
            material-opacity={opacity}
          />
          <animated.mesh
            castShadow
            receiveShadow
            geometry={nodes.stage_stage4_0.geometry}
            material={materials.stage4}
            material-opacity={opacity}
          />
        </group>
        <group
          position={[0, 600.51, -301.167]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[976.004, 3.161, 443.101]}
        >
          <animated.mesh
            castShadow
            receiveShadow
            geometry={nodes.frame_frame1_0.geometry}
            material={materials.frame1}
            material-opacity={opacity}
          />
          <animated.mesh
            castShadow
            receiveShadow
            geometry={nodes.frame_frame2_0.geometry}
            material={materials.frame2}
            material-opacity={opacity}
          />
        </group>
        <group
          position={[-1435.453, 946.575, -215.334]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[22.008, 574.789, 100]}
        >
          <animated.mesh
            castShadow
            receiveShadow
            geometry={nodes.dec_dec1_0.geometry}
            material={materials.dec1}
            material-opacity={opacity}
          />
          <animated.mesh
            castShadow
            receiveShadow
            geometry={nodes.dec_dec2_0.geometry}
            material={materials.dec2}
            material-opacity={opacity}
          />
        </group>
        <group
          position={[-1823.353, 355.15, -855.587]}
          rotation={[-1.231, 0.4, 0.834]}
          scale={[418.331, 113.488, 325.782]}
        >
          <animated.mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_dec_cube_dec1_0.geometry}
            material={materials.cube_dec1}
            material-opacity={opacity}
          />
          <animated.mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_dec_cude_dec2_0.geometry}
            material={materials.cude_dec2}
            material-opacity={opacity}
          />
        </group>
        <group
          position={[-1773.136, 316.913, 458.878]}
          rotation={[Math.PI, 0.193, 0.717]}
          scale={[359.582, 97.55, 280.03]}
        >
          <animated.mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_light_Cube_light2_0.geometry}
            material={materials.Cube_light2}
            material-opacity={opacity}
          />
          <animated.mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_light_Cube_light3_0.geometry}
            material={materials.Cube_light3}
            material-opacity={opacity}
          />
          <animated.mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_light_Cube_light4_0.geometry}
            material={materials.Cube_light4}
            material-opacity={opacity}
          />
          <animated.mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_light_Cube_light1_0.geometry}
            material={materials.Cube_light1}
            material-opacity={opacity}
          />
        </group>
        <animated.mesh
          castShadow
          receiveShadow
          geometry={nodes.house_house_0.geometry}
          material={materials.house}
          position={[45.134, 340.95, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[4456.016, 4456.016, 341.147]}
          material-opacity={opacity}
        />
        <animated.mesh
          castShadow
          receiveShadow
          geometry={nodes.lighting_lighting_0.geometry}
          material={materials.lighting}
          position={[0, 52.159, 115.188]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[726.455, 691.253, 22.138]}
          material-opacity={opacity}
        />
        <animated.mesh
          castShadow
          receiveShadow
          geometry={nodes.screen_screen001_0.geometry}
          material={materials["screen.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          material-opacity={opacity}
        />
        <animated.mesh
          castShadow
          receiveShadow
          geometry={nodes.roof_roof2_0.geometry}
          material={materials.roof2}
          position={[0, 1336.289, -67.294]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1205.933, 1148.85, 58.488]}
          material-opacity={opacity}
        />
        <animated.mesh
          castShadow
          receiveShadow
          geometry={nodes.floor_floor_0.geometry}
          material={materials.floor}
          position={[45.134, 340.95, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[4456.016, 4456.016, 341.147]}
          material-opacity={opacity}
        />
      </group>
    </group>
  );
}
