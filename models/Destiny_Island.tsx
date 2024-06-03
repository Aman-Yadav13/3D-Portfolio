"use client";

import * as THREE from "three";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

type GLTFResult = GLTF & {
  nodes: {
    Plane_Material_0: THREE.Mesh;
    Plane001_Material001_0: THREE.Mesh;
    Cylinder_tronco_palma_1_0: THREE.Mesh;
    Cylinder003_tronco_palma_1_0: THREE.Mesh;
    Cylinder004_tronco_palma_1_0: THREE.Mesh;
    foglia_foglia_palma_0: THREE.Mesh;
    foglia012_foglia_palma_0: THREE.Mesh;
    foglia024_foglia_palma_0: THREE.Mesh;
    chest_chest_0: THREE.Mesh;
    chest_metallo_gold_0: THREE.Mesh;
    barile_barrell_0: THREE.Mesh;
    cassa_CRATE_0: THREE.Mesh;
    foglie_palma_due_sotto_1_foglia_palma_21_0: THREE.Mesh;
    foglie_palma_2_sopra_1_MI_di50_Pla_TreeK_03_0: THREE.Mesh;
    tronco_palma_2_1_MI_di_Pla_TreeK_01_0: THREE.Mesh;
    foglie_palma_2_sotto_2_foglia_palma_21_0: THREE.Mesh;
    foglie_palma_2_sopra_2_MI_di50_Pla_TreeK_03_0: THREE.Mesh;
    tronco_palma_2_2_MI_di_Pla_TreeK_01_0: THREE.Mesh;
    paopu_on_tree_MI_di50_Pla_TreeJ_05_0: THREE.Mesh;
    paopu_MI_di50_Pla_TreeJ_05_0: THREE.Mesh;
    ponte_MI_di50_Pro_WoodA_0: THREE.Mesh;
    Cube001_Material002_0: THREE.Mesh;
    Cube001_Material002_0_1: THREE.Mesh;
    Cylinder001_Material003_0: THREE.Mesh;
    Cylinder001_blue_metal_0: THREE.Mesh;
    Cylinder001_black_leather_0: THREE.Mesh;
    Cylinder001_Material002_0: THREE.Mesh;
    Cube002_Material003_0: THREE.Mesh;
    Cube002_Material003_0_1: THREE.Mesh;
    Cube002_Material003_0_2: THREE.Mesh;
    Cube002_Material003_0_3: THREE.Mesh;
    Cube002_Material003_0_4: THREE.Mesh;
    Cube002_Material003_0_5: THREE.Mesh;
    Cube002_Material003_0_6: THREE.Mesh;
    Cube002_Material003_0_7: THREE.Mesh;
    Cube002_Material003_0_8: THREE.Mesh;
    Torus001_Material002_0: THREE.Mesh;
    Torus002_Material003_0: THREE.Mesh;
    Torus003_Material003_0: THREE.Mesh;
    cassa001_CRATE_0: THREE.Mesh;
    bust_clay_0: THREE.Mesh;
    head__clay_0: THREE.Mesh;
    head__Material005_0: THREE.Mesh;
    heart_heart_0: THREE.Mesh;
    heart001_heart_0: THREE.Mesh;
    heart002_heart_0: THREE.Mesh;
    heart003_heart_0: THREE.Mesh;
    eyes_kupo_eyes001_0: THREE.Mesh;
    eyes_kupo_nose001_0: THREE.Mesh;
    eyes_clay_kupo001_0: THREE.Mesh;
    eyes_kupo_antenna001_0: THREE.Mesh;
    eyes_kupo_shere001_0: THREE.Mesh;
    Sphere002_palloncino_0: THREE.Mesh;
    wings_clay_kupo001_0: THREE.Mesh;
    wings001_Material008_0: THREE.Mesh;
    Cylinder006_perno_0: THREE.Mesh;
    Cylinder005_perno_0: THREE.Mesh;
    Cylinder002_perno_0: THREE.Mesh;
    base_zattera_MI_di50_Pro_WoodA001_0: THREE.Mesh;
    Plane011_tela_0: THREE.Mesh;
    paopu001_MI_di50_Pla_TreeJ_05_0: THREE.Mesh;
    paopu002_MI_di50_Pla_TreeJ_05_0: THREE.Mesh;
    Icosphere135_rocks_0: THREE.Mesh;
    barile001_METALLO_NERO_0: THREE.Mesh;
    barile001_BARRELL_TOP_0: THREE.Mesh;
    cassa002_CRATE_0: THREE.Mesh;
    cassa003_CRATE_0: THREE.Mesh;
    Cylinder007_candela_0: THREE.Mesh;
    Sphere_Material009_0: THREE.Mesh;
    Sphere001_Material010_0: THREE.Mesh;
    Plane003_BORDO_SABBIA_0: THREE.Mesh;
    Cube005_vetro_0: THREE.Mesh;
    Cube003_Material006_0: THREE.Mesh;
    Cube_delfino_0: THREE.Mesh;
    occhi_delfino_Material007_0: THREE.Mesh;
    Cube004_delfino_0: THREE.Mesh;
    occhi_delfino001_Material007_0: THREE.Mesh;
    Cube006_delfino_0: THREE.Mesh;
    occhi_delfino002_Material007_0: THREE.Mesh;
    occhi_delfino003_Material007_0: THREE.Mesh;
    Icosphere_rocks_0: THREE.Mesh;
    Icosphere001_rocks_0: THREE.Mesh;
    Icosphere002_rocks_0: THREE.Mesh;
    Icosphere003_rocks_0: THREE.Mesh;
    Icosphere004_rocks_0: THREE.Mesh;
    Icosphere005_rocks_0: THREE.Mesh;
    Icosphere006_rocks_0: THREE.Mesh;
    Icosphere007_rocks_0: THREE.Mesh;
    Icosphere008_rocks_0: THREE.Mesh;
    Icosphere009_rocks_0: THREE.Mesh;
    Icosphere010_rocks_0: THREE.Mesh;
    Icosphere011_rocks_0: THREE.Mesh;
    Icosphere012_rocks_0: THREE.Mesh;
    Icosphere013_rocks_0: THREE.Mesh;
    Icosphere014_rocks_0: THREE.Mesh;
    Icosphere015_rocks_0: THREE.Mesh;
    Icosphere016_rocks_0: THREE.Mesh;
    Icosphere017_rocks_0: THREE.Mesh;
    Icosphere018_rocks_0: THREE.Mesh;
    Icosphere019_rocks_0: THREE.Mesh;
    Icosphere020_rocks_0: THREE.Mesh;
    Icosphere021_rocks_0: THREE.Mesh;
    Icosphere022_rocks_0: THREE.Mesh;
    Icosphere023_rocks_0: THREE.Mesh;
    Icosphere024_rocks_0: THREE.Mesh;
    Icosphere025_rocks_0: THREE.Mesh;
    Icosphere026_rocks_0: THREE.Mesh;
    Icosphere027_rocks_0: THREE.Mesh;
    Icosphere028_rocks_0: THREE.Mesh;
    Icosphere029_rocks_0: THREE.Mesh;
    Icosphere030_rocks_0: THREE.Mesh;
    Icosphere031_rocks_0: THREE.Mesh;
    Icosphere032_rocks_0: THREE.Mesh;
    Icosphere033_rocks_0: THREE.Mesh;
    Icosphere034_rocks_0: THREE.Mesh;
    Icosphere035_rocks_0: THREE.Mesh;
    Icosphere036_rocks_0: THREE.Mesh;
    Icosphere037_rocks_0: THREE.Mesh;
    Icosphere038_rocks_0: THREE.Mesh;
    Icosphere039_rocks_0: THREE.Mesh;
    Icosphere040_rocks_0: THREE.Mesh;
    Icosphere041_rocks_0: THREE.Mesh;
    Icosphere042_rocks_0: THREE.Mesh;
    Icosphere043_rocks_0: THREE.Mesh;
    Icosphere044_rocks_0: THREE.Mesh;
    Icosphere045_rocks_0: THREE.Mesh;
    Icosphere046_rocks_0: THREE.Mesh;
    Icosphere047_rocks_0: THREE.Mesh;
    Icosphere048_rocks_0: THREE.Mesh;
    Icosphere049_rocks_0: THREE.Mesh;
    Icosphere050_rocks_0: THREE.Mesh;
    Icosphere051_rocks_0: THREE.Mesh;
    Icosphere052_rocks_0: THREE.Mesh;
    Icosphere053_rocks_0: THREE.Mesh;
    Icosphere054_rocks_0: THREE.Mesh;
    Icosphere055_rocks_0: THREE.Mesh;
    Icosphere056_rocks_0: THREE.Mesh;
    Icosphere057_rocks_0: THREE.Mesh;
    Icosphere058_rocks_0: THREE.Mesh;
    Icosphere059_rocks_0: THREE.Mesh;
    Icosphere060_rocks_0: THREE.Mesh;
    Icosphere061_rocks_0: THREE.Mesh;
    Icosphere062_rocks_0: THREE.Mesh;
    Icosphere063_rocks_0: THREE.Mesh;
    Icosphere064_rocks_0: THREE.Mesh;
    Icosphere065_rocks_0: THREE.Mesh;
    Icosphere066_rocks_0: THREE.Mesh;
    Icosphere067_rocks_0: THREE.Mesh;
    Icosphere068_rocks_0: THREE.Mesh;
    Icosphere069_rocks_0: THREE.Mesh;
    Icosphere070_rocks_0: THREE.Mesh;
    Icosphere071_rocks_0: THREE.Mesh;
    Icosphere072_rocks_0: THREE.Mesh;
    Icosphere073_rocks_0: THREE.Mesh;
    Icosphere074_rocks_0: THREE.Mesh;
    Icosphere075_rocks_0: THREE.Mesh;
    Icosphere076_rocks_0: THREE.Mesh;
    Icosphere077_rocks_0: THREE.Mesh;
    Icosphere078_rocks_0: THREE.Mesh;
    Icosphere079_rocks_0: THREE.Mesh;
    Icosphere080_rocks_0: THREE.Mesh;
    Icosphere081_rocks_0: THREE.Mesh;
    Icosphere082_rocks_0: THREE.Mesh;
    Icosphere083_rocks_0: THREE.Mesh;
    Icosphere084_rocks_0: THREE.Mesh;
    Icosphere085_rocks_0: THREE.Mesh;
    Icosphere086_rocks_0: THREE.Mesh;
    Icosphere087_rocks_0: THREE.Mesh;
    Icosphere088_rocks_0: THREE.Mesh;
    Icosphere089_rocks_0: THREE.Mesh;
    Icosphere090_rocks_0: THREE.Mesh;
    Icosphere091_rocks_0: THREE.Mesh;
    Icosphere092_rocks_0: THREE.Mesh;
    Icosphere093_rocks_0: THREE.Mesh;
    Icosphere094_rocks_0: THREE.Mesh;
    Icosphere095_rocks_0: THREE.Mesh;
    Icosphere096_rocks_0: THREE.Mesh;
    Icosphere097_rocks_0: THREE.Mesh;
    Icosphere098_rocks_0: THREE.Mesh;
    Icosphere099_rocks_0: THREE.Mesh;
    Icosphere100_rocks_0: THREE.Mesh;
    Icosphere101_rocks_0: THREE.Mesh;
    Icosphere102_rocks_0: THREE.Mesh;
    Icosphere103_rocks_0: THREE.Mesh;
    Icosphere104_rocks_0: THREE.Mesh;
    Icosphere105_rocks_0: THREE.Mesh;
    Icosphere106_rocks_0: THREE.Mesh;
    Icosphere107_rocks_0: THREE.Mesh;
    Icosphere108_rocks_0: THREE.Mesh;
    Icosphere109_rocks_0: THREE.Mesh;
    Icosphere110_rocks_0: THREE.Mesh;
    Icosphere111_rocks_0: THREE.Mesh;
    Icosphere112_rocks_0: THREE.Mesh;
    Icosphere113_rocks_0: THREE.Mesh;
    Icosphere114_rocks_0: THREE.Mesh;
    Icosphere115_rocks_0: THREE.Mesh;
    Icosphere116_rocks_0: THREE.Mesh;
    Icosphere117_rocks_0: THREE.Mesh;
    Icosphere118_rocks_0: THREE.Mesh;
    Icosphere119_rocks_0: THREE.Mesh;
    Icosphere120_rocks_0: THREE.Mesh;
    Icosphere121_rocks_0: THREE.Mesh;
    Icosphere122_rocks_0: THREE.Mesh;
    Icosphere123_rocks_0: THREE.Mesh;
    Icosphere124_rocks_0: THREE.Mesh;
    Icosphere125_rocks_0: THREE.Mesh;
    Icosphere126_rocks_0: THREE.Mesh;
    Icosphere127_rocks_0: THREE.Mesh;
    Icosphere128_rocks_0: THREE.Mesh;
    Icosphere129_rocks_0: THREE.Mesh;
    Icosphere130_rocks_0: THREE.Mesh;
    Icosphere131_rocks_0: THREE.Mesh;
    Icosphere132_rocks_0: THREE.Mesh;
    Icosphere133_rocks_0: THREE.Mesh;
    Icosphere134_rocks_0: THREE.Mesh;
    MI_di50_Pla_GrassA007_foglia1_0: THREE.Mesh;
    MI_di50_Pla_GrassA001_foglia1_0: THREE.Mesh;
    MI_di50_Pla_GrassB001_foglia1_0: THREE.Mesh;
    MI_di50_Pla_GrassD001_MI_di50_Pla_GrassD_0: THREE.Mesh;
    MI_di50_Pla_GrassA002_foglia1_0: THREE.Mesh;
    MI_di50_Pla_GrassD002_MI_di50_Pla_GrassD_0: THREE.Mesh;
    MI_di50_Pla_GrassD003_MI_di50_Pla_GrassD_0: THREE.Mesh;
    MI_di50_Pla_GrassD004_MI_di50_Pla_GrassD_0: THREE.Mesh;
    MI_di50_Pla_GrassA003_foglia1_0: THREE.Mesh;
    MI_di50_Pla_GrassA004_foglia1_0: THREE.Mesh;
    MI_di50_Pla_GrassA005_foglia1_0: THREE.Mesh;
    MI_di50_Pla_GrassD005_MI_di50_Pla_GrassD_0: THREE.Mesh;
    MI_di50_Pla_GrassB002_foglia1_0: THREE.Mesh;
    MI_di50_Pla_GrassB003_foglia1_0: THREE.Mesh;
    MI_di50_Pla_GrassB004_foglia1_0: THREE.Mesh;
    MI_di50_Pla_GrassA006_foglia1_0: THREE.Mesh;
    MI_di50_Pla_GrassA008_foglia1_0: THREE.Mesh;
    MI_di50_Pla_GrassA009_foglia1_0: THREE.Mesh;
    MI_di50_Pla_GrassA010_foglia1_0: THREE.Mesh;
    MI_di50_Pla_GrassD006_ERBA_0: THREE.Mesh;
    MI_di50_Pla_GrassD007_MI_di50_Pla_GrassD_0: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshPhysicalMaterial;
    tronco_palma_1: THREE.MeshStandardMaterial;
    foglia_palma: THREE.MeshStandardMaterial;
    chest: THREE.MeshStandardMaterial;
    metallo_gold: THREE.MeshPhysicalMaterial;
    barrell: THREE.MeshStandardMaterial;
    CRATE: THREE.MeshStandardMaterial;
    ["foglia_palma_2.1"]: THREE.MeshStandardMaterial;
    MI_di50_Pla_TreeK_03: THREE.MeshStandardMaterial;
    MI_di_Pla_TreeK_01: THREE.MeshStandardMaterial;
    MI_di50_Pla_TreeJ_05: THREE.MeshStandardMaterial;
    MI_di50_Pro_WoodA: THREE.MeshPhysicalMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    blue_metal: THREE.MeshStandardMaterial;
    black_leather: THREE.MeshStandardMaterial;
    clay: THREE.MeshPhysicalMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    heart: THREE.MeshPhysicalMaterial;
    ["kupo_eyes.001"]: THREE.MeshStandardMaterial;
    ["kupo_nose.001"]: THREE.MeshPhysicalMaterial;
    ["clay_kupo.001"]: THREE.MeshPhysicalMaterial;
    ["kupo_antenna.001"]: THREE.MeshStandardMaterial;
    ["kupo_shere.001"]: THREE.MeshPhysicalMaterial;
    palloncino: THREE.MeshPhysicalMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
    perno: THREE.MeshStandardMaterial;
    ["MI_di50_Pro_WoodA.001"]: THREE.MeshStandardMaterial;
    tela: THREE.MeshStandardMaterial;
    rocks: THREE.MeshPhysicalMaterial;
    METALLO_NERO: THREE.MeshPhysicalMaterial;
    BARRELL_TOP: THREE.MeshStandardMaterial;
    candela: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["Material.010"]: THREE.MeshStandardMaterial;
    BORDO_SABBIA: THREE.MeshStandardMaterial;
    vetro: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    delfino: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    foglia1: THREE.MeshPhysicalMaterial;
    MI_di50_Pla_GrassD: THREE.MeshStandardMaterial;
    ERBA: THREE.MeshPhysicalMaterial;
  };
};

export function Destiny_Island({
  setIsRotating,
  isRotating,
  setCurrentStage,
  ...props
}: {
  props: JSX.IntrinsicElements["group"];
  isRotating: boolean;
  setIsRotating: Dispatch<SetStateAction<boolean>>;
  setCurrentStage: Dispatch<SetStateAction<number | null>>;
}) {
  const { nodes, materials } = useGLTF(
    "/assets/3d/destiny_island.glb"
  ) as GLTFResult;

  const islandRef = useRef();
  // Get access to the Three.js renderer and viewport
  const { gl, viewport } = useThree();

  // Use a ref for the last mouse x position
  const lastX = useRef(0);
  // Use a ref for rotation speed
  const rotationSpeed = useRef(0);
  // Define a damping factor to control rotation damping
  const dampingFactor = 0.95;

  const handlePointerDown = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    // Calculate the clientX based on whether it's a touch event or a mouse event
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;

    // Store the current clientX position for reference
    lastX.current = clientX;
  };

  // Handle pointer (mouse or touch) up event
  const handlePointerUp = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  // Handle pointer (mouse or touch) move event
  const handlePointerMove = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      // If rotation is enabled, calculate the change in clientX position
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;

      // calculate the change in the horizontal position of the mouse cursor or touch input,
      // relative to the viewport's width
      const delta = (clientX - lastX.current) / viewport.width;

      // Update the island's rotation based on the mouse/touch movement
      //@ts-ignore
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;

      // Update the reference for the last clientX position
      lastX.current = clientX;

      // Update the rotation speed
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  // Handle keydown events
  const handleKeyDown = (event: any) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      //@ts-ignore
      islandRef.current.rotation.y += 0.005 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      //@ts-ignore

      islandRef.current.rotation.y -= 0.005 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };

  // Handle keyup events
  const handleKeyUp = (event: any) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  // Touch events for mobile devices
  const handleTouchStart = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handleTouchEnd = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handleTouchMove = (e: any) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      //@ts-ignore

      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  useEffect(() => {
    // Add event listeners for pointer and keyboard events
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("touchmove", handleTouchMove);

    // Remove event listeners when component unmounts
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  // This function is called on each frame update
  useFrame(() => {
    // If not rotating, apply damping to slow down the rotation (smoothly)
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      //@ts-ignore

      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on island's orientation
      //@ts-ignore

      const rotation = islandRef.current.rotation.y;

      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  return (
    //@ts-ignore
    <a.group ref={islandRef} {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[-45.261, 99.249, -35.293]}
          rotation={[-1.5, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chest_chest_0.geometry}
            material={materials.chest}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chest_metallo_gold_0.geometry}
            material={materials.metallo_gold}
          />
        </group>
        <group
          position={[158.605, 147.603, 94.525]}
          rotation={[0.086, -0.453, 1.462]}
          scale={72.964}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Material002_0.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Material002_0_1.geometry}
            material={materials["Material.002"]}
          />
          <group
            position={[-0.531, 0.001, -0.001]}
            rotation={[0, -Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_Material003_0.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_blue_metal_0.geometry}
              material={materials.blue_metal}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_black_leather_0.geometry}
              material={materials.black_leather}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder001_Material002_0.geometry}
              material={materials["Material.002"]}
            />
            <group
              position={[0, 0, -0.14]}
              rotation={[-Math.PI, -Math.PI / 2, 0]}
              scale={0.101}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube002_Material003_0.geometry}
                material={materials["Material.003"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube002_Material003_0_1.geometry}
                material={materials["Material.003"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube002_Material003_0_2.geometry}
                material={materials["Material.003"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube002_Material003_0_3.geometry}
                material={materials["Material.003"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube002_Material003_0_4.geometry}
                material={materials["Material.003"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube002_Material003_0_5.geometry}
                material={materials["Material.003"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube002_Material003_0_6.geometry}
                material={materials["Material.003"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube002_Material003_0_7.geometry}
                material={materials["Material.003"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube002_Material003_0_8.geometry}
                material={materials["Material.003"]}
              />
            </group>
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus001_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[0.407, 0.001, -0.001]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[-0.043, 0.043, 0.073]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus002_Material003_0.geometry}
            material={materials["Material.003"]}
            position={[-0.171, -0.047, 0.115]}
            rotation={[0.432, 0.093, 0.318]}
            scale={[-0.023, 0.023, 0.039]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus003_Material003_0.geometry}
            material={materials["Material.003"]}
            position={[-0.525, -0.053, -0.024]}
            rotation={[0.005, -0.037, 0.059]}
          />
        </group>
        <group
          position={[43.529, 145.999, 17.625]}
          rotation={[-1.372, -0.012, -2.792]}
          scale={22.53}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.head__clay_0.geometry}
            material={materials.clay}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.head__Material005_0.geometry}
            material={materials["Material.005"]}
          />
        </group>
        <group
          position={[-68.297, 104.905, -103.587]}
          rotation={[-Math.PI / 2, 0, 0.55]}
          scale={45.192}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.eyes_kupo_eyes001_0.geometry}
            material={materials["kupo_eyes.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.eyes_kupo_nose001_0.geometry}
            material={materials["kupo_nose.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.eyes_clay_kupo001_0.geometry}
            material={materials["clay_kupo.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.eyes_kupo_antenna001_0.geometry}
            material={materials["kupo_antenna.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.eyes_kupo_shere001_0.geometry}
            material={materials["kupo_shere.001"]}
          />
        </group>
        <group
          position={[-134.869, 116.949, -121.894]}
          rotation={[-1.41, 0, 0]}
          scale={32.888}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.barile001_METALLO_NERO_0.geometry}
            material={materials.METALLO_NERO}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.barile001_BARRELL_TOP_0.geometry}
            material={materials.BARRELL_TOP}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_Material_0.geometry}
          material={materials.Material}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[400, 400, 321.025]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[0, 26.504, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={404.18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_tronco_palma_1_0.geometry}
          material={materials.tronco_palma_1}
          position={[-184.741, 212.248, -232.256]}
          rotation={[-Math.PI / 2, 0, -0.095]}
          scale={40.337}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_tronco_palma_1_0.geometry}
          material={materials.tronco_palma_1}
          position={[-198.329, 192.92, 38.913]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={46.434}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_tronco_palma_1_0.geometry}
          material={materials.tronco_palma_1}
          position={[-286.222, 181.213, -101.994]}
          rotation={[-Math.PI / 2, 0, 2.012]}
          scale={46.434}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.foglia_foglia_palma_0.geometry}
          material={materials.foglia_palma}
          position={[-181.799, 339.943, -333.503]}
          rotation={[-1.53, 0.168, -0.364]}
          scale={[5.099, 2.054, 5.099]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.foglia012_foglia_palma_0.geometry}
          material={materials.foglia_palma}
          position={[-295.486, 278.674, 69.422]}
          rotation={[-1.646, 0.237, -1.5]}
          scale={[7.299, 2.94, 7.299]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.foglia024_foglia_palma_0.geometry}
          material={materials.foglia_palma}
          position={[-328.623, 284.726, -186.146]}
          rotation={[-1.715, 0.095, 0.863]}
          scale={[5.099, 2.054, 5.099]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.barile_barrell_0.geometry}
          material={materials.barrell}
          position={[-134.869, 116.949, -121.894]}
          rotation={[-1.41, 0, 0]}
          scale={32.888}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cassa_CRATE_0.geometry}
          material={materials.CRATE}
          position={[0, 86.473, 188.414]}
          rotation={[-Math.PI / 2, -0.126, 0]}
          scale={[31.251, 31.251, 27.32]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.foglie_palma_due_sotto_1_foglia_palma_21_0.geometry}
          material={materials["foglia_palma_2.1"]}
          position={[-138.113, 271.182, 214.817]}
          rotation={[-Math.PI, 0.256, 0]}
          scale={0.406}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.foglie_palma_2_sopra_1_MI_di50_Pla_TreeK_03_0.geometry
          }
          material={materials.MI_di50_Pla_TreeK_03}
          position={[-142.655, 304.911, 215.611]}
          rotation={[-Math.PI, 0.256, 0]}
          scale={0.406}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tronco_palma_2_1_MI_di_Pla_TreeK_01_0.geometry}
          material={materials.MI_di_Pla_TreeK_01}
          position={[-124.62, 185.671, 202.189]}
          rotation={[-Math.PI, 0.256, 0]}
          scale={0.406}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.foglie_palma_2_sotto_2_foglia_palma_21_0.geometry}
          material={materials["foglia_palma_2.1"]}
          position={[-37.856, 181.738, 273.513]}
          rotation={[-Math.PI, 0.256, 0]}
          scale={0.288}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.foglie_palma_2_sopra_2_MI_di50_Pla_TreeK_03_0.geometry
          }
          material={materials.MI_di50_Pla_TreeK_03}
          position={[-41.071, 205.613, 274.074]}
          rotation={[-Math.PI, 0.256, 0]}
          scale={0.288}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tronco_palma_2_2_MI_di_Pla_TreeK_01_0.geometry}
          material={materials.MI_di_Pla_TreeK_01}
          position={[-28.305, 121.21, 264.574]}
          rotation={[-Math.PI, 0.256, 0]}
          scale={0.288}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.paopu_on_tree_MI_di50_Pla_TreeJ_05_0.geometry}
          material={materials.MI_di50_Pla_TreeJ_05}
          position={[-184.589, 322.67, -334.418]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.463}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.paopu_MI_di50_Pla_TreeJ_05_0.geometry}
          material={materials.MI_di50_Pla_TreeJ_05}
          position={[-28.431, 91.374, -105.759]}
          rotation={[1.546, -0.609, -3.076]}
          scale={0.823}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ponte_MI_di50_Pro_WoodA_0.geometry}
          material={materials.MI_di50_Pro_WoodA}
          position={[349.309, 97.396, 0]}
          rotation={[0, 0.547, Math.PI]}
          scale={0.281}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cassa001_CRATE_0.geometry}
          material={materials.CRATE}
          position={[-24.96, 84.495, 105.629]}
          rotation={[-1.451, 0.017, 0.19]}
          scale={[31.251, 31.251, 27.32]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bust_clay_0.geometry}
          material={materials.clay}
          position={[44.469, 71.234, 2.525]}
          rotation={[-1.372, -0.012, -2.792]}
          scale={153.993}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.heart_heart_0.geometry}
          material={materials.heart}
          position={[96.36, 69.722, 122.625]}
          rotation={[-1.261, -0.019, -0.487]}
          scale={166.934}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.heart001_heart_0.geometry}
          material={materials.heart}
          position={[119.155, 68.887, 50.855]}
          rotation={[0.214, -0.156, 0.188]}
          scale={166.934}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.heart002_heart_0.geometry}
          material={materials.heart}
          position={[40.789, 61.16, 111.948]}
          rotation={[0.107, -0.153, -0.26]}
          scale={166.934}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.heart003_heart_0.geometry}
          material={materials.heart}
          position={[70.182, 70.172, 63.049]}
          rotation={[-0.178, -0.683, 0.327]}
          scale={166.934}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere002_palloncino_0.geometry}
          material={materials.palloncino}
          position={[-56.316, 210.024, -83.012]}
          rotation={[-Math.PI / 2, 0, 0.55]}
          scale={23.409}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wings_clay_kupo001_0.geometry}
          material={materials["clay_kupo.001"]}
          position={[-76.201, 127.957, -98.737]}
          rotation={[-Math.PI / 2, 0, 0.55]}
          scale={4.504}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wings001_Material008_0.geometry}
          material={materials["Material.008"]}
          position={[-76.067, 128.009, -100.386]}
          rotation={[-Math.PI / 2, 0, 0.391]}
          scale={4.504}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_perno_0.geometry}
          material={materials.perno}
          position={[-222.38, 137.269, -267.107]}
          rotation={[-1.967, -0.264, -0.063]}
          scale={[3.364, 3.364, 76.366]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_perno_0.geometry}
          material={materials.perno}
          position={[-239.858, 197.778, -287.07]}
          rotation={[1.411, -1.3, -2.914]}
          scale={[3.364, 3.364, 76.366]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_perno_0.geometry}
          material={materials.perno}
          position={[-212.671, 104.916, -248.201]}
          rotation={[1.411, -1.3, 1.542]}
          scale={[3.364, 3.364, 76.366]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.base_zattera_MI_di50_Pro_WoodA001_0.geometry}
          material={materials["MI_di50_Pro_WoodA.001"]}
          position={[-201.399, 23.117, -268.754]}
          rotation={[-0.533, 0.467, -2.845]}
          scale={0.555}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011_tela_0.geometry}
          material={materials.tela}
          position={[-248.777, 149.121, -260.014]}
          rotation={[-0.38, -0.061, 0.264]}
          scale={197.684}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.paopu001_MI_di50_Pla_TreeJ_05_0.geometry}
          material={materials.MI_di50_Pla_TreeJ_05}
          position={[149.466, 84.546, -26.798]}
          rotation={[1.436, 0.795, 0.133]}
          scale={0.823}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.paopu002_MI_di50_Pla_TreeJ_05_0.geometry}
          material={materials.MI_di50_Pla_TreeJ_05}
          position={[145.606, 88.959, -71.398]}
          rotation={[2.66, 0.182, -1.647]}
          scale={0.823}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere135_rocks_0.geometry}
          material={materials.rocks}
          position={[56.764, 85.703, -120.685]}
          rotation={[-0.057, 1.111, -1.135]}
          scale={10.798}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cassa002_CRATE_0.geometry}
          material={materials.CRATE}
          position={[0, 86.473, 188.414]}
          rotation={[-Math.PI / 2, -0.126, 0]}
          scale={[31.251, 31.251, 27.32]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cassa003_CRATE_0.geometry}
          material={materials.CRATE}
          position={[-24.96, 84.495, 105.629]}
          rotation={[-1.451, 0.017, 0.19]}
          scale={[31.251, 31.251, 27.32]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_candela_0.geometry}
          material={materials.candela}
          position={[139.786, 96.438, -147.671]}
          rotation={[-1.731, 0.076, -0.004]}
          scale={3.318}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_Material009_0.geometry}
          material={materials["Material.009"]}
          position={[140.045, 99.513, -148.22]}
          rotation={[-1.723, 0.013, 0.01]}
          scale={1.372}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_Material010_0.geometry}
          material={materials["Material.010"]}
          position={[140.045, 99.513, -148.22]}
          rotation={[-1.723, 0.013, 0.01]}
          scale={0.506}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_BORDO_SABBIA_0.geometry}
          material={materials.BORDO_SABBIA}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[400, 400, 321.025]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_vetro_0.geometry}
          material={materials.vetro}
          position={[141.363, 108.008, -149.609]}
          rotation={[-1.704, 0.105, 2.688]}
          scale={14.212}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_Material006_0.geometry}
          material={materials["Material.006"]}
          position={[141.384, 108.207, -149.635]}
          rotation={[-1.704, 0.105, 2.688]}
          scale={14.212}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_delfino_0.geometry}
          material={materials.delfino}
          position={[175.33, 17.674, -333.165]}
          rotation={[-1.443, 0.146, -0.222]}
          scale={76.785}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.occhi_delfino_Material007_0.geometry}
          material={materials["Material.007"]}
          position={[114.848, 13.887, -340.466]}
          rotation={[-1.443, 0.146, -0.222]}
          scale={1.276}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_delfino_0.geometry}
          material={materials.delfino}
          position={[211.263, 38.965, -269.594]}
          rotation={[-Math.PI / 2, 0, -0.578]}
          scale={36.969}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.occhi_delfino001_Material007_0.geometry}
          material={materials["Material.007"]}
          position={[180.457, 42.323, -286.005]}
          rotation={[-Math.PI / 2, 0, -0.578]}
          scale={0.614}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_delfino_0.geometry}
          material={materials.delfino}
          position={[307.007, 17.596, -207.647]}
          rotation={[-Math.PI / 2, 0, -0.764]}
          scale={76.785}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.occhi_delfino002_Material007_0.geometry}
          material={materials["Material.007"]}
          position={[254.321, 20.34, -249.253]}
          rotation={[-Math.PI / 2, 0, -0.764]}
          scale={1.276}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.occhi_delfino003_Material007_0.geometry}
          material={materials["Material.007"]}
          position={[183.975, 42.466, -291.529]}
          rotation={[-Math.PI / 2, 0, -0.578]}
          scale={0.614}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_rocks_0.geometry}
          material={materials.rocks}
          position={[-134.445, 75.979, 94.353]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={40.051}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_rocks_0.geometry}
          material={materials.rocks}
          position={[-102.155, 73.387, 39.659]}
          rotation={[-0.588, 0.032, -0.706]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere002_rocks_0.geometry}
          material={materials.rocks}
          position={[-86.979, 71.049, 91.47]}
          rotation={[-0.588, 0.032, -0.706]}
          scale={23.456}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere003_rocks_0.geometry}
          material={materials.rocks}
          position={[-150.165, 91.948, 35.518]}
          rotation={[0.08, 0.475, -0.226]}
          scale={46.88}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere004_rocks_0.geometry}
          material={materials.rocks}
          position={[-173.04, 78.588, 104.735]}
          rotation={[0.08, 0.475, -0.226]}
          scale={18.439}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere005_rocks_0.geometry}
          material={materials.rocks}
          position={[-112.405, 57.652, 119.477]}
          rotation={[-0.883, -0.088, -0.972]}
          scale={34.433}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere006_rocks_0.geometry}
          material={materials.rocks}
          position={[196.668, 19.198, -162.9]}
          rotation={[-0.588, 0.032, -0.706]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere007_rocks_0.geometry}
          material={materials.rocks}
          position={[147.564, 52.263, -202.652]}
          rotation={[1.832, -0.613, -2.284]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere008_rocks_0.geometry}
          material={materials.rocks}
          position={[185.473, 68.392, -158.872]}
          rotation={[-1.955, -1.177, -0.693]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere009_rocks_0.geometry}
          material={materials.rocks}
          position={[166.751, 18.391, -193.702]}
          rotation={[1.832, -0.613, -2.284]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere010_rocks_0.geometry}
          material={materials.rocks}
          position={[168.826, 80.7, -167.157]}
          rotation={[-3.078, -1.232, -1.561]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere011_rocks_0.geometry}
          material={materials.rocks}
          position={[219.76, 24.902, -137.033]}
          rotation={[-3.078, -1.232, -1.561]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere012_rocks_0.geometry}
          material={materials.rocks}
          position={[230.999, 43.392, -120.24]}
          rotation={[-0.786, -0.168, -0.523]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere013_rocks_0.geometry}
          material={materials.rocks}
          position={[223.296, 74.038, -118.476]}
          rotation={[1.398, -0.081, -2.098]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere014_rocks_0.geometry}
          material={materials.rocks}
          position={[242.909, 23.231, -114.113]}
          rotation={[-0.683, -0.066, -0.577]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere015_rocks_0.geometry}
          material={materials.rocks}
          position={[258.184, 57.909, -87.918]}
          rotation={[-3.078, -1.232, -1.561]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere016_rocks_0.geometry}
          material={materials.rocks}
          position={[240.664, 76.652, -91.21]}
          rotation={[1.585, 0.819, -1.977]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere017_rocks_0.geometry}
          material={materials.rocks}
          position={[215.748, 57.773, -139.187]}
          rotation={[1.832, -0.613, -2.284]}
          scale={13.671}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere018_rocks_0.geometry}
          material={materials.rocks}
          position={[206.12, 76.405, -143.144]}
          rotation={[0.242, 0.336, -1.579]}
          scale={13.671}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere019_rocks_0.geometry}
          material={materials.rocks}
          position={[211.803, 66.784, -142.504]}
          rotation={[1.832, -0.613, -2.284]}
          scale={4.107}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere020_rocks_0.geometry}
          material={materials.rocks}
          position={[162.066, 32.578, -237.044]}
          rotation={[-3.078, -1.232, -1.561]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere021_rocks_0.geometry}
          material={materials.rocks}
          position={[116.14, 71.854, -220.142]}
          rotation={[-3.078, -1.232, -1.561]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere022_rocks_0.geometry}
          material={materials.rocks}
          position={[94.752, 49.774, -259.512]}
          rotation={[1.811, -0.648, -2.368]}
          scale={17.597}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere023_rocks_0.geometry}
          material={materials.rocks}
          position={[37.574, 87.776, -231.354]}
          rotation={[-3.078, -1.232, -1.561]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere024_rocks_0.geometry}
          material={materials.rocks}
          position={[-22.228, 60.708, -251.789]}
          rotation={[2.398, 1.355, 3.085]}
          scale={43.133}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere025_rocks_0.geometry}
          material={materials.rocks}
          position={[46.757, 49.032, -261.731]}
          rotation={[-3.078, -1.232, -1.561]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere026_rocks_0.geometry}
          material={materials.rocks}
          position={[2.58, 46.02, -253.212]}
          rotation={[1.832, -0.613, -2.284]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere027_rocks_0.geometry}
          material={materials.rocks}
          position={[78.236, 71.243, -233.212]}
          rotation={[1.832, -0.613, -2.284]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere028_rocks_0.geometry}
          material={materials.rocks}
          position={[119.201, 57.023, -236.476]}
          rotation={[-1.082, -0.314, -0.552]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere029_rocks_0.geometry}
          material={materials.rocks}
          position={[134.498, 25.993, -240.155]}
          rotation={[0.986, 0.032, -1.546]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere030_rocks_0.geometry}
          material={materials.rocks}
          position={[180.914, 46.442, -189.798]}
          rotation={[0.986, 0.032, -1.546]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere031_rocks_0.geometry}
          material={materials.rocks}
          position={[-38.786, 46.442, -272.608]}
          rotation={[0.986, 0.032, -1.546]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere032_rocks_0.geometry}
          material={materials.rocks}
          position={[-100.471, 46.442, -269.228]}
          rotation={[0.986, 0.032, -1.546]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere033_rocks_0.geometry}
          material={materials.rocks}
          position={[-68.361, 64.597, -267.538]}
          rotation={[-0.216, -0.974, 2.285]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere034_rocks_0.geometry}
          material={materials.rocks}
          position={[-97.626, 69.714, -243.468]}
          rotation={[-2.981, 1.413, 1.797]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere035_rocks_0.geometry}
          material={materials.rocks}
          position={[-63.826, 87.776, -244.874]}
          rotation={[-3.078, -1.232, -1.561]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere036_rocks_0.geometry}
          material={materials.rocks}
          position={[-64.569, 29.675, -271.237]}
          rotation={[2.105, -1.172, -2.102]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere037_rocks_0.geometry}
          material={materials.rocks}
          position={[31.673, 65.599, -254.976]}
          rotation={[-0.216, -0.974, 2.285]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere038_rocks_0.geometry}
          material={materials.rocks}
          position={[88.821, 36.883, -262.167]}
          rotation={[-0.109, 0.229, -0.257]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere039_rocks_0.geometry}
          material={materials.rocks}
          position={[116.297, 28.67, -238.326]}
          rotation={[-0.109, 0.229, -0.257]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere040_rocks_0.geometry}
          material={materials.rocks}
          position={[269.022, 30.465, -54.164]}
          rotation={[-3.078, -1.232, -1.561]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere041_rocks_0.geometry}
          material={materials.rocks}
          position={[267.844, 20.822, -77.773]}
          rotation={[0.832, -0.789, -1.055]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere042_rocks_0.geometry}
          material={materials.rocks}
          position={[267.668, 38.332, -61.84]}
          rotation={[0.832, -0.789, -1.055]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere043_rocks_0.geometry}
          material={materials.rocks}
          position={[232.449, 72.717, -59.622]}
          rotation={[0.242, 0.336, -1.579]}
          scale={9.287}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere044_rocks_0.geometry}
          material={materials.rocks}
          position={[250.484, 65.772, -45.033]}
          rotation={[-1.082, -0.314, -0.552]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere045_rocks_0.geometry}
          material={materials.rocks}
          position={[3.244, 19.198, 281.802]}
          rotation={[-2.237, -0.789, -3.135]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere046_rocks_0.geometry}
          material={materials.rocks}
          position={[63.572, 52.263, 263.042]}
          rotation={[2, 0.518, -0.322]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere047_rocks_0.geometry}
          material={materials.rocks}
          position={[6.112, 68.392, 270.256]}
          rotation={[-2.665, 0.685, -2.167]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere048_rocks_0.geometry}
          material={materials.rocks}
          position={[50.595, 24.692, 308.924]}
          rotation={[2, 0.518, -0.322]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere049_rocks_0.geometry}
          material={materials.rocks}
          position={[22.246, 80.699, 261.013]}
          rotation={[-3.106, 0.926, -1.649]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere050_rocks_0.geometry}
          material={materials.rocks}
          position={[-31.091, 24.902, 286.642]}
          rotation={[-3.106, 0.926, -1.649]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere051_rocks_0.geometry}
          material={materials.rocks}
          position={[-51.298, 43.392, 286.662]}
          rotation={[-2.217, -0.508, -2.925]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere052_rocks_0.geometry}
          material={materials.rocks}
          position={[-48.488, 74.038, 279.277]}
          rotation={[1.735, -0.098, 0.076]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere053_rocks_0.geometry}
          material={materials.rocks}
          position={[-63.007, 23.231, 293.164]}
          rotation={[-2.226, -0.652, -2.997]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere054_rocks_0.geometry}
          material={materials.rocks}
          position={[-93.275, 57.909, 291.321]}
          rotation={[-3.106, 0.926, -1.649]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere055_rocks_0.geometry}
          material={materials.rocks}
          position={[-80.807, 76.652, 278.578]}
          rotation={[0.84, -0.409, 0.03]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere056_rocks_0.geometry}
          material={materials.rocks}
          position={[-27.072, 57.773, 284.501]}
          rotation={[2, 0.518, -0.322]}
          scale={13.671}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere057_rocks_0.geometry}
          material={materials.rocks}
          position={[-18.434, 76.405, 278.692]}
          rotation={[2.376, -1.239, 0.905]}
          scale={13.671}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere058_rocks_0.geometry}
          material={materials.rocks}
          position={[84.12, 32.578, 294.202]}
          rotation={[-3.106, 0.926, -1.649]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere059_rocks_0.geometry}
          material={materials.rocks}
          position={[95.569, 71.854, 246.623]}
          rotation={[-3.106, 0.926, -1.649]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere060_rocks_0.geometry}
          material={materials.rocks}
          position={[140.188, 49.774, 250.699]}
          rotation={[2.044, 0.515, -0.416]}
          scale={17.597}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere061_rocks_0.geometry}
          material={materials.rocks}
          position={[148.523, 87.776, 187.511]}
          rotation={[-3.106, 0.926, -1.649]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere062_rocks_0.geometry}
          material={materials.rocks}
          position={[198.728, 60.708, 149.128]}
          rotation={[0.16, -0.424, -0.722]}
          scale={43.133}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere063_rocks_0.geometry}
          material={materials.rocks}
          position={[168.686, 49.032, 212.018]}
          rotation={[-3.106, 0.926, -1.649]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere064_rocks_0.geometry}
          material={materials.rocks}
          position={[194.659, 45.17, 179.559]}
          rotation={[0.47, -0.481, -0.137]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere065_rocks_0.geometry}
          material={materials.rocks}
          position={[127.487, 71.243, 222.359]}
          rotation={[2, 0.518, -0.322]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere066_rocks_0.geometry}
          material={materials.rocks}
          position={[107.452, 57.023, 258.239]}
          rotation={[-2.112, -0.201, -2.846]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere067_rocks_0.geometry}
          material={materials.rocks}
          position={[102.017, 25.993, 273.003]}
          rotation={[1.894, -0.497, 0.687]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere068_rocks_0.geometry}
          material={materials.rocks}
          position={[34.363, 46.442, 283.639]}
          rotation={[1.894, -0.497, 0.687]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere069_rocks_0.geometry}
          material={materials.rocks}
          position={[225.238, 46.442, 146.919]}
          rotation={[1.894, -0.497, 0.687]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere070_rocks_0.geometry}
          material={materials.rocks}
          position={[256.683, 46.442, 93.743]}
          rotation={[1.894, -0.497, 0.687]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere071_rocks_0.geometry}
          material={materials.rocks}
          position={[237.446, 64.597, 119.508]}
          rotation={[-3.021, 0.002, -0.677]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere072_rocks_0.geometry}
          material={materials.rocks}
          position={[233.68, 69.714, 81.804]}
          rotation={[-0.028, -0.433, -1.198]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere073_rocks_0.geometry}
          material={materials.rocks}
          position={[216.078, 87.776, 110.693]}
          rotation={[-3.106, 0.926, -1.649]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere074_rocks_0.geometry}
          material={materials.rocks}
          position={[238.415, 29.675, 124.716]}
          rotation={[2.671, 0.743, -0.77]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere075_rocks_0.geometry}
          material={materials.rocks}
          position={[171.445, 65.599, 195.723]}
          rotation={[-3.021, 0.002, -0.677]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere076_rocks_0.geometry}
          material={materials.rocks}
          position={[145.689, 36.883, 247.242]}
          rotation={[-2.848, -1.198, 3.135]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere077_rocks_0.geometry}
          material={materials.rocks}
          position={[110.604, 28.67, 280.44]}
          rotation={[-2.848, -1.198, 3.135]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere078_rocks_0.geometry}
          material={materials.rocks}
          position={[-127.364, 30.465, 281.588]}
          rotation={[-3.106, 0.926, -1.649]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere079_rocks_0.geometry}
          material={materials.rocks}
          position={[-107.077, 20.822, 293.72]}
          rotation={[2.594, 0, 1.425]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere080_rocks_0.geometry}
          material={materials.rocks}
          position={[-120.229, 38.332, 284.725]}
          rotation={[2.594, 0, 1.425]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere081_rocks_0.geometry}
          material={materials.rocks}
          position={[-124.663, 65.772, 261.1]}
          rotation={[-2.112, -0.201, -2.846]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere082_rocks_0.geometry}
          material={materials.rocks}
          position={[138.169, 21.255, 262.276]}
          rotation={[1.819, -0.694, 0.194]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere083_rocks_0.geometry}
          material={materials.rocks}
          position={[172.144, 27.168, 227.355]}
          rotation={[2.655, -0.051, -1.072]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere084_rocks_0.geometry}
          material={materials.rocks}
          position={[176.816, 71.718, 183.965]}
          rotation={[-1.983, -0.592, -1.48]}
          scale={12.275}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere085_rocks_0.geometry}
          material={materials.rocks}
          position={[219.556, 9.046, 178.344]}
          rotation={[1.019, -1.119, 1.056]}
          scale={41.22}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere086_rocks_0.geometry}
          material={materials.rocks}
          position={[196.779, 77.571, 53.33]}
          rotation={[-0.028, -0.433, -1.198]}
          scale={10.798}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere087_rocks_0.geometry}
          material={materials.rocks}
          position={[-299.433, 19.198, -12.623]}
          rotation={[-2.429, 0.56, 1.984]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere088_rocks_0.geometry}
          material={materials.rocks}
          position={[-289.344, 52.263, 49.743]}
          rotation={[0.971, 0.292, 1.596]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere089_rocks_0.geometry}
          material={materials.rocks}
          position={[-288.405, 68.392, -8.161]}
          rotation={[-0.457, 0.634, 1.574]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere090_rocks_0.geometry}
          material={materials.rocks}
          position={[-332.945, 24.692, 30.443]}
          rotation={[0.971, 0.292, 1.596]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere091_rocks_0.geometry}
          material={materials.rocks}
          position={[-281.523, 80.699, 9.113]}
          rotation={[-0.024, 0.503, 1.532]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere092_rocks_0.geometry}
          material={materials.rocks}
          position={[-299.396, 24.902, -47.298]}
          rotation={[-0.024, 0.503, 1.532]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere093_rocks_0.geometry}
          material={materials.rocks}
          position={[-296.574, 43.392, -67.307]}
          rotation={[-2.099, 0.63, 1.995]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere094_rocks_0.geometry}
          material={materials.rocks}
          position={[-289.657, 74.038, -63.486]}
          rotation={[1.646, 0.175, 1.774]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere095_rocks_0.geometry}
          material={materials.rocks}
          position={[-301.365, 23.231, -79.814]}
          rotation={[-2.273, 0.601, 2.029]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere096_rocks_0.geometry}
          material={materials.rocks}
          position={[-295.283, 57.909, -109.522]}
          rotation={[-0.024, 0.503, 1.532]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere097_rocks_0.geometry}
          material={materials.rocks}
          position={[-284.42, 76.652, -95.386]}
          rotation={[2.183, -0.583, 2.09]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere098_rocks_0.geometry}
          material={materials.rocks}
          position={[-297.842, 57.773, -43.018]}
          rotation={[0.971, 0.292, 1.596]}
          scale={13.671}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere099_rocks_0.geometry}
          material={materials.rocks}
          position={[-293.305, 76.405, -33.649]}
          rotation={[2.897, 0.374, 1.735]}
          scale={13.671}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere100_rocks_0.geometry}
          material={materials.rocks}
          position={[-323.084, 32.578, 65.705]}
          rotation={[-0.024, 0.503, 1.532]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere101_rocks_0.geometry}
          material={materials.rocks}
          position={[-277.588, 71.854, 83.731]}
          rotation={[-0.024, 0.503, 1.532]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere102_rocks_0.geometry}
          material={materials.rocks}
          position={[-287.899, 49.774, 127.333]}
          rotation={[0.959, 0.33, 1.528]}
          scale={17.597}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere103_rocks_0.geometry}
          material={materials.rocks}
          position={[-226.512, 87.776, 144.473]}
          rotation={[-0.024, 0.503, 1.532]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere104_rocks_0.geometry}
          material={materials.rocks}
          position={[-195.57, 60.708, 199.577]}
          rotation={[2.876, -0.985, 2.13]}
          scale={43.133}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere105_rocks_0.geometry}
          material={materials.rocks}
          position={[-253.611, 49.032, 160.988]}
          rotation={[-0.024, 0.503, 1.532]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere106_rocks_0.geometry}
          material={materials.rocks}
          position={[-225.127, 45.17, 191.268]}
          rotation={[2.528, -0.8, 2.306]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere107_rocks_0.geometry}
          material={materials.rocks}
          position={[-258.055, 71.243, 118.745]}
          rotation={[0.971, 0.292, 1.596]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere108_rocks_0.geometry}
          material={materials.rocks}
          position={[-290.76, 57.023, 93.863]}
          rotation={[-1.721, 0.556, 1.824]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere109_rocks_0.geometry}
          material={materials.rocks}
          position={[-304.613, 25.993, 86.405]}
          rotation={[2.05, 0.351, 2.229]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere110_rocks_0.geometry}
          material={materials.rocks}
          position={[-305.628, 46.442, 17.928]}
          rotation={[2.05, 0.351, 2.229]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere111_rocks_0.geometry}
          material={materials.rocks}
          position={[-197.112, 46.442, 226.134]}
          rotation={[2.05, 0.351, 2.229]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere112_rocks_0.geometry}
          material={materials.rocks}
          position={[-148.887, 46.442, 264.745]}
          rotation={[2.05, 0.351, 2.229]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere113_rocks_0.geometry}
          material={materials.rocks}
          position={[-171.69, 64.597, 242.075]}
          rotation={[-0.705, 1.383, -3.122]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere114_rocks_0.geometry}
          material={materials.rocks}
          position={[-133.831, 69.714, 243.65]}
          rotation={[-3.095, -0.996, 1.994]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere115_rocks_0.geometry}
          material={materials.rocks}
          position={[-159.958, 87.776, 222.16]}
          rotation={[-0.024, 0.503, 1.532]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere116_rocks_0.geometry}
          material={materials.rocks}
          position={[-176.983, 29.675, 242.303]}
          rotation={[0.413, 0.588, 1.801]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere117_rocks_0.geometry}
          material={materials.rocks}
          position={[-237.865, 65.599, 166.012]}
          rotation={[-0.705, 1.383, -3.122]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere118_rocks_0.geometry}
          material={materials.rocks}
          position={[-285.249, 36.883, 133.266]}
          rotation={[-3.021, 0.496, 2.803]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere119_rocks_0.geometry}
          material={materials.rocks}
          position={[-313.183, 28.67, 93.861]}
          rotation={[-3.021, 0.496, 2.803]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere120_rocks_0.geometry}
          material={materials.rocks}
          position={[-280.853, 30.465, -141.903]}
          rotation={[-0.024, 0.503, 1.532]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere121_rocks_0.geometry}
          material={materials.rocks}
          position={[-295.717, 20.822, -123.524]}
          rotation={[1.345, 1.007, -3.022]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere122_rocks_0.geometry}
          material={materials.rocks}
          position={[-284.962, 38.332, -135.28]}
          rotation={[1.345, 1.007, -3.022]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere123_rocks_0.geometry}
          material={materials.rocks}
          position={[-260.949, 65.772, -136.348]}
          rotation={[-1.721, 0.556, 1.824]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere124_rocks_0.geometry}
          material={materials.rocks}
          position={[-299.077, 21.255, 123.707]}
          rotation={[2.254, 0.28, 1.716]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere125_rocks_0.geometry}
          material={materials.rocks}
          position={[-269.281, 27.168, 162.255]}
          rotation={[1.415, 1.079, 0.702]}
          scale={19.922}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere126_rocks_0.geometry}
          material={materials.rocks}
          position={[-226.979, 71.718, 172.983]}
          rotation={[-2.158, 0.419, -2.936]}
          scale={12.275}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere127_rocks_0.geometry}
          material={materials.rocks}
          position={[-227.426, 9.046, 216.089]}
          rotation={[2.758, -0.1, -3.097]}
          scale={41.22}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere128_rocks_0.geometry}
          material={materials.rocks}
          position={[-245.184, 68.392, -146.462]}
          rotation={[0.354, 0.135, 2.322]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere129_rocks_0.geometry}
          material={materials.rocks}
          position={[-253.915, 19.198, -175.643]}
          rotation={[-2.429, 0.56, 1.984]}
          scale={37.511}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere130_rocks_0.geometry}
          material={materials.rocks}
          position={[-31.365, 85.703, -80.083]}
          rotation={[-0.028, -0.433, -1.198]}
          scale={10.798}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere131_rocks_0.geometry}
          material={materials.rocks}
          position={[-15.921, 85.703, -76.258]}
          rotation={[-0.057, 1.111, -1.135]}
          scale={10.798}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere132_rocks_0.geometry}
          material={materials.rocks}
          position={[-17.654, 85.703, -89.497]}
          rotation={[-3.045, -1.307, 2.049]}
          scale={10.798}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere133_rocks_0.geometry}
          material={materials.rocks}
          position={[46.038, 97.994, -140.107]}
          rotation={[-3.078, -1.232, -1.561]}
          scale={25.389}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere134_rocks_0.geometry}
          material={materials.rocks}
          position={[56.4, 93.027, -159.023]}
          rotation={[-3.045, -1.307, 2.049]}
          scale={10.798}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MI_di50_Pla_GrassA007_foglia1_0.geometry}
          material={materials.foglia1}
          position={[-103.864, 97.251, -30.883]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.245}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MI_di50_Pla_GrassA001_foglia1_0.geometry}
          material={materials.foglia1}
          position={[-103.864, 97.251, -30.883]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.245}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MI_di50_Pla_GrassB001_foglia1_0.geometry}
          material={materials.foglia1}
          position={[-108.751, 116.383, 70.882]}
          rotation={[-Math.PI, 0.869, 0]}
          scale={0.201}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MI_di50_Pla_GrassD001_MI_di50_Pla_GrassD_0.geometry}
          material={materials.MI_di50_Pla_GrassD}
          position={[123.735, 88.541, 142.395]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.741}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MI_di50_Pla_GrassA002_foglia1_0.geometry}
          material={materials.foglia1}
          position={[-134.681, 82.913, 144.725]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.245}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MI_di50_Pla_GrassD002_MI_di50_Pla_GrassD_0.geometry}
          material={materials.MI_di50_Pla_GrassD}
          position={[68.9, 93.072, -127.438]}
          rotation={[-Math.PI, 0.53, 0]}
          scale={0.301}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MI_di50_Pla_GrassD003_MI_di50_Pla_GrassD_0.geometry}
          material={materials.MI_di50_Pla_GrassD}
          position={[87.753, 99.597, -196.928]}
          rotation={[-Math.PI, -1.231, 0]}
          scale={0.553}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MI_di50_Pla_GrassD004_MI_di50_Pla_GrassD_0.geometry}
          material={materials.MI_di50_Pla_GrassD}
          position={[44.885, 68.891, 135.383]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MI_di50_Pla_GrassA003_foglia1_0.geometry}
          material={materials.foglia1}
          position={[-38.066, 107.557, -171.792]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.245}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MI_di50_Pla_GrassA004_foglia1_0.geometry}
          material={materials.foglia1}
          position={[56.234, 76.253, 188.875]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.245}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MI_di50_Pla_GrassA005_foglia1_0.geometry}
          material={materials.foglia1}
          position={[203.06, 90.054, -49.522]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.154}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MI_di50_Pla_GrassD005_MI_di50_Pla_GrassD_0.geometry}
          material={materials.MI_di50_Pla_GrassD}
          position={[207.326, 85.67, -128.479]}
          rotation={[3.084, 0.009, -0.026]}
          scale={0.301}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MI_di50_Pla_GrassB002_foglia1_0.geometry}
          material={materials.foglia1}
          position={[189.9, 61.697, -194.569]}
          rotation={[3.132, -0.087, -0.136]}
          scale={0.201}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MI_di50_Pla_GrassB003_foglia1_0.geometry}
          material={materials.foglia1}
          position={[107.828, 62.897, -261.221]}
          rotation={[3.132, -0.087, -0.136]}
          scale={0.132}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MI_di50_Pla_GrassB004_foglia1_0.geometry}
          material={materials.foglia1}
          position={[248.647, 66.076, -109.421]}
          rotation={[3.132, -0.087, -0.136]}
          scale={0.223}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MI_di50_Pla_GrassA006_foglia1_0.geometry}
          material={materials.foglia1}
          position={[-50.412, 86.878, 44.053]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.245}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MI_di50_Pla_GrassA008_foglia1_0.geometry}
          material={materials.foglia1}
          position={[-4.566, 107.557, -211.72]}
          rotation={[-Math.PI, -1.256, 0]}
          scale={0.245}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MI_di50_Pla_GrassA009_foglia1_0.geometry}
          material={materials.foglia1}
          position={[-54.686, 107.557, -216.51]}
          rotation={[0, 1.307, Math.PI]}
          scale={0.245}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MI_di50_Pla_GrassA010_foglia1_0.geometry}
          material={materials.foglia1}
          position={[17.278, 107.557, -171.247]}
          rotation={[0, 1.261, -Math.PI]}
          scale={0.245}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MI_di50_Pla_GrassD006_ERBA_0.geometry}
          material={materials.ERBA}
          position={[-20.524, 129.21, -191.819]}
          rotation={[-Math.PI, 0, 0]}
          scale={1.087}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MI_di50_Pla_GrassD007_MI_di50_Pla_GrassD_0.geometry}
          material={materials.MI_di50_Pla_GrassD}
          position={[-9.692, 90.427, -80.013]}
          rotation={[0.057, -0.07, 3.119]}
          scale={0.301}
        />
      </group>
    </a.group>
  );
}
