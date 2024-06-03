"use client";

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_11: THREE.SkinnedMesh;
    Object_12: THREE.SkinnedMesh;
    Object_13: THREE.SkinnedMesh;
    Object_7: THREE.SkinnedMesh;
    Object_9: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    eyes: THREE.MeshPhysicalMaterial;
    claws: THREE.MeshPhysicalMaterial;
    teeth__nor2_tga: THREE.MeshPhysicalMaterial;
    fur__fella3_jpg_001: THREE.MeshPhysicalMaterial;
    Material__wolf_col_tga: THREE.MeshPhysicalMaterial;
  };
};

type ActionName = "01_Run" | "02_walk" | "03_creep" | "04_Idle" | "05_site";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function Wolf({
  currentAnimation,
  ...props
}: {
  currentAnimation: string;
  props: JSX.IntrinsicElements["group"];
}) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/assets/3d/wolf_updated.glb"
  ) as GLTFResult;
  //@ts-ignore
  const { actions } = useAnimations<GLTFActions>(animations, group);

  useEffect(() => {
    Object.values(actions).forEach((action: any) => action.stop());
    //@ts-ignore
    if (actions[currentAnimation]) {
      //@ts-ignore
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    //@ts-ignore
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, -1.593]}
          scale={1.977}
        >
          <group
            name="e4ef26d3d7a44d328db4b473b35c6be8fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <group
                    name="Hemi"
                    position={[-0.85, 1.001, 0.915]}
                    rotation={[0.751, 0.1, 0.083]}
                  >
                    <group name="Object_68" rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_69" />
                    </group>
                  </group>
                  <group
                    name="Object_10"
                    position={[0, 0.002, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.eyes}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials.claws}
                    skeleton={nodes.Object_12.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.teeth__nor2_tga}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <group
                    name="Object_6"
                    position={[0, 0.002, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.fur__fella3_jpg_001}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group
                    name="Object_8"
                    position={[0, 0.002, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Material__wolf_col_tga}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <group
                    name="Plane"
                    position={[0, -0.348, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group name="Wolf1" position={[0, 0, 0.002]} />
                  <group name="Wolf2" position={[0, 0, 0.002]} />
                  <group name="Wolf3" position={[0, 0, 0.002]} />
                  <primitive object={nodes._rootJoint} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
